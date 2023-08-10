from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
from keras.models import model_from_json
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the model
json_file = open("C:/projects/MNIT Hackathon/Model/emotiondetector.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)
model.load_weights("C:/projects/MNIT Hackathon/Model/emotiondetector.h5")

# Load the face cascade classifier
haar_file = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(haar_file)

labels = {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'neutral', 5: 'sad', 6: 'surprise'}

def extract_features(image):
    feature = np.array(image)
    feature = feature.reshape(1, 48, 48, 1)
    return feature / 255.0

def predict_frame(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(frame, 1.3, 5)

    results = []
    try:
        for (p, q, r, s) in faces:
            face_image = gray[q:q+s, p:p+r]
            cv2.rectangle(frame, (p, q), (p+r, q+s), (255, 0, 0), 2)
            face_image = cv2.resize(face_image, (48, 48))
            img = extract_features(face_image)
            pred = model.predict(img)
            prediction_label = labels[pred.argmax()]
            results.append({
                'x': p,
                'y': q,
                'width': r,
                'height': s,
                'label': prediction_label
            })

        ret, jpeg = cv2.imencode('.jpg', frame)
        response = jpeg.tobytes()
        return response, results

    except Exception as e:
        print(e)
        return None, []

@app.route('/predict', methods=['POST'])
def predict():
    video_data = request.files['video']
    video_stream = cv2.VideoCapture(video_data)

    if not video_stream.isOpened():
        return jsonify(error="Video stream could not be opened"), 500

    frame_count = 0
    frames = []

    while True:
        ret, frame = video_stream.read()
        if not ret:
            break

        if frame_count % 5 == 0:  # Process every 5th frame
            response, results = predict_frame(frame)
            if response:
                frames.append((frame_count, response, results))

        frame_count += 1

    video_stream.release()

    return jsonify(frames=frames)

if __name__ == '__main__':
    app.run(debug=True)
