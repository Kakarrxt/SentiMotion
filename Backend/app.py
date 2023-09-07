import cv2
from flask import Flask, request, jsonify, send_file,Response
import numpy as np
import cv2
from keras.models import model_from_json
from flask_cors import CORS
from mss import mss
from PIL import Image
import pyautogui
from win32api import GetSystemMetrics


# Get the screen size
width=GetSystemMetrics(0)
height=GetSystemMetrics(1)


left_half_region = (0, 0, width // 2, height)

app = Flask(__name__)
CORS(app)

# Load the pre-trained emotion detection model
json_file = open("./Backend/emotiondetector2.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)
model.load_weights("./Backend/emotiondetector2.h5")

# Load Haarcascade classifier XML file
haar_file = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(haar_file)

prediction_results = []
values=[]

predictions_all=[]

def extract_features(image):
    feature = image.reshape(1, 48, 48, 1)
    return feature


def generate_frames():
    webcam = cv2.VideoCapture(0)
    labels = {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'neutral', 5: 'sad', 6: 'surprise'}
    while True:
        ret, frame = webcam.read()
        if not ret:
            print("Error reading webcam frame")
            break
        
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)
        prediction_results.clear()
        predictions_all.clear()
        for (x, y, w, h) in faces:
            face_image = gray[y:y+h, x:x+w]
            cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
            resized_face = cv2.resize(face_image, (48, 48))
            normalized_face = resized_face 
            img = extract_features(normalized_face)
            # Predict emotion and apply thresholding
            pred = model.predict(img)
            prediction_label = labels[pred.argmax()]
            prediction_percentage = np.max(pred)*10 
            predictions_all.append(pred.tolist())
            # Store prediction for smoothing
            prediction_results.append(prediction_percentage)
            smoothed_pred = np.mean(prediction_results)
            values.append((prediction_label, smoothed_pred))
            text = f"{prediction_label}: {smoothed_pred:.2f}%"
            # Define text style
            font = cv2.FONT_HERSHEY_SIMPLEX
            font_scale = 0.7
            font_color = (153, 51, 255) 
            font_thickness = 2

            # Calculate text size to position it properly
            text_size = cv2.getTextSize(text, font, font_scale, font_thickness)[0]
            text_width, text_height = text_size

            # Calculate text position above the bounding box
            text_x = x + (w - text_width) // 2
            text_y = y - 15  # Slightly above the top of the bounding box

            # Overlay text on the frame
            cv2.putText(frame, text, (text_x, text_y), font, font_scale, font_color, font_thickness)
        
        _, buffer = cv2.imencode('.jpg', frame)  
        frame_data = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_data + b'\r\n')


@app.route('/predict', methods=['GET'])
def test():
    try:
          return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')
    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        return jsonify({"error": error_message}), 500
    




labels = {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'neutral', 5: 'sad', 6: 'surprise'}
def generate_screen():
    while True:
        try:
            # Capture the screen using PyAutoGUI
            screenshot = pyautogui.screenshot(region=left_half_region)
            
            # Convert the image into numpy array
            frame = np.array(screenshot)

            # Convert the color space from BGR to RGB
            frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

            gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)
            faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)
            prediction_results.clear()
            for (x, y, w, h) in faces:
                face_image = gray[y:y + h, x:x + w]
                cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
                resized_face = cv2.resize(face_image, (48, 48))
                normalized_face = resized_face
                img = extract_features(normalized_face)

                # Predict emotion and apply thresholding
                pred = model.predict(img)
                prediction_label = labels[pred.argmax()]
                prediction_percentage = np.max(pred) * 10

                # Store prediction for smoothing
                prediction_results.append(prediction_percentage)
                smoothed_pred = np.mean(prediction_results)
                values.append((prediction_label, smoothed_pred))

                text = f"{prediction_label}: {smoothed_pred:.2f}%"
                # Define text style
                font = cv2.FONT_HERSHEY_SIMPLEX
                font_scale = 0.7
                font_color = (153, 51, 255)
                font_thickness = 2

                # Calculate text size to position it properly
                text_size = cv2.getTextSize(text, font, font_scale, font_thickness)[0]
                text_width, text_height = text_size

                # Calculate text position above the bounding box
                text_x = x + (w - text_width) // 2
                text_y = y - 15  # Slightly above the top of the bounding box

                # Overlay text on the frame
                cv2.putText(frame, text, (text_x, text_y), font, font_scale, font_color, font_thickness)

            # Encode the frame as JPEG data
            _, buffer = cv2.imencode('.jpg', frame)
            frame_data = buffer.tobytes()

            # Yield the frame data with the appropriate HTTP headers
            yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame_data + b'\r\n')
        except Exception as e:
            print("An error occurred:", str(e))

 

@app.route('/screen', methods=['GET'])
def screen():
    try:
        return Response(generate_screen(), mimetype='multipart/x-mixed-replace; boundary=frame')
    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        return jsonify({"error": error_message}), 500
    

    
@app.route('/value', methods=['GET'])
def value():
    try:
        if values:
            prediction_label, prediction_percentage = values[-1]
            value = {"label": prediction_label, "percentage": prediction_percentage}
            return jsonify(value)
    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        return jsonify({"error": error_message}), 500
    
@app.route('/pred', methods=['GET'])
def pred():
    try:
        if predictions_all is not None:
            # Convert the ndarray to a Python list
            predictions_list = predictions_all[0]
            predictions_list=predictions_list[0]

            return jsonify({
                "angry": predictions_list[0],
                "disgust": predictions_list[1],
                "fear": predictions_list[2],
                "happy": predictions_list[3],
                "neutral": predictions_list[4],
                "sad": predictions_list[5],
                "surprise": predictions_list[6]
            })
        else:
            return jsonify({"error": "No predictions available"}), 404
    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        return jsonify({"error": error_message}), 500

if __name__ == '__main__':
    app.run(debug=True)
