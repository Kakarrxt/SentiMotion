import cv2
import numpy as np
from keras.models import model_from_json
from keras.models import  load_model
# Load the pre-trained emotion detection model
model_path = "C:/projects/MNIT Hackathon/Model/"
json_file = open(model_path + "emotiondetector2.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)
model.load_weights(model_path + "emotiondetector2.h5")


# Load Haarcascade classifier XML file
haar_file = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(haar_file)
prediction_results = []
def extract_features(image):
    feature = image.reshape(1, 48, 48, 1)
    return feature

webcam = cv2.VideoCapture(0)
labels = {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'neutral', 5: 'sad', 6: 'surprise'}

while True:
    try:
        ret, frame = webcam.read()
        if not ret:
            print("Error reading webcam frame")
            break
        
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5)
        
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
            
            # Store prediction for smoothing
            prediction_results.append(prediction_percentage)
            smoothed_pred = np.mean(prediction_results)
            
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
        
        cv2.imshow("Emotion Detection", frame)
        
        # Press 'Esc' key to exit
        if cv2.waitKey(1) == 27:
            break
    except Exception as e:
        print("An error occurred:", str(e))

# Release the webcam and close all OpenCV windows
webcam.release()
cv2.destroyAllWindows()
