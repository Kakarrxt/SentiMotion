import cv2
import numpy as np
import pyautogui

# Get the size of the screen using pyautogui
SCREEN_SIZE = tuple(pyautogui.size())

# Define the codec and create VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'XVID')
out = cv2.VideoWriter('output.avi', fourcc, 20.0, (SCREEN_SIZE))


while True:
    # Capture the screen
    img = pyautogui.screenshot()

    # Convert the image into numpy array
    img = np.array(img)

    # Convert the color space from BGR to RGB
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    cv2.imshow('frame', img)


    # Press 'q' to quit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        print("Recording Stopped")
        break

out.release()
cv2.destroyAllWindows()
#labels = {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'neutral', 5: 'sad', 6: 'surprise'}