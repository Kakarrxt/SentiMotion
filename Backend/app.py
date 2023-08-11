import cv2
from flask import Flask, request, jsonify, send_file,Response
import numpy as np
import cv2


from keras.models import model_from_json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# from keras_preprocessing.image import load_img
json_file = open("C:/projects/MNIT Hackathon/Model/emotiondetector.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)

model.load_weights("C:/projects/MNIT Hackathon/Model/emotiondetector.h5")
haar_file=cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade=cv2.CascadeClassifier(haar_file)

def extract_features(image):
    feature = np.array(image)
    feature = feature.reshape(1,48,48,1)
    return feature/255.0


def generate_frames():
    webcam = cv2.VideoCapture(0)
    labels = {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'neutral', 5: 'sad', 6: 'surprise'}
    while True:
        ret, im = webcam.read()
        if not ret:
            break
        
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)
        
        for (p, q, r, s) in faces:
            image = gray[q:q+s, p:p+r]
            cv2.rectangle(im, (p, q), (p+r, q+s), (255, 0, 0), 2)
            image = cv2.resize(image, (48, 48))
            img = extract_features(image)
            pred = model.predict(img)
            prediction_label = labels[pred.argmax()]
            cv2.putText(im, '%s' % prediction_label, (p-10, q-10), cv2.FONT_HERSHEY_COMPLEX_SMALL, 2, (0, 0, 255))
        
        _, buffer = cv2.imencode('.jpg', im)
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


if __name__ == '__main__':
    app.run(debug=True)








