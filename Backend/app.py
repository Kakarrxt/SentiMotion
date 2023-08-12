import cv2
from flask import Flask, request, jsonify, send_file,Response
import numpy as np
import cv2


from keras.models import model_from_json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



# Load the pre-trained emotion detection model
model_path = "C:/projects/MNIT Hackathon/Model/"
json_file = open(model_path + "emotiondetector.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)
model.load_weights(model_path + "emotiondetector.h5")

# Load Haarcascade classifier XML file
haar_file = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(haar_file)

prediction_results = []

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
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5)
        prediction_results.clear()
        for (x, y, w, h) in faces:
            face_image = gray[y:y+h, x:x+w]
            cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
            resized_face = cv2.resize(face_image, (48, 48))
            img = extract_features(resized_face)
            pred = model.predict(img)  
            prediction_label = labels[pred.argmax()]
            prediction_percentage = np.max(pred)*10   # Get the maximum prediction probability
            prediction_results.append((prediction_label, prediction_percentage))
            
            text = f"{prediction_label}: {prediction_percentage:.2f}%"
            cv2.putText(frame, text, (x, y-40), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
        
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
    

@app.route('/value', methods=['GET'])
def value():
    try:
        if prediction_results:
            prediction_label, prediction_percentage = prediction_results[-1]
            value = {"label": prediction_label, "percentage": prediction_percentage}
            return jsonify(value)
        # else:
        #     value = {"label": "No Value Available", "percentage": 0}
        #     return jsonify(value)
    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        return jsonify({"error": error_message}), 500


if __name__ == '__main__':
    app.run(debug=True)
