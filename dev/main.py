import tensorflow as tf
from tensorflow.keras.models import load_model
from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS
import numpy as np
import eventlet
import time
import base64
import cv2

app = Flask(__name__)
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app, cors_allowed_origins="*")  # Allow any frontend to connect

send_data_flag = True

cam_port = 0



mean, std = 128.33125, 15.842568
model = load_model('../models/COSC307_limited_data_CNN2.keras')

def prediction(image):
    prediction = model.predict(image, batch_size=1, verbose=0)
    maxIndex = prediction[0].argmax()

    letters = ['P','Y','R','O','V']

    return letters[maxIndex], int(prediction[0][maxIndex] * 100)

def preprocess_image(img, top, bottom, left, right): # img is a np array (captured image)
    # Crop center 256x256 pixel array
    cropped = img[top:bottom, left:right]

    # Change to grayscale
    gray = cv2.cvtColor(cropped, cv2.COLOR_BGR2GRAY)

    # Scale the image to (128, 128)
    resized = cv2.resize(gray, (0,0), fx = 0.5, fy = 0.5)

    # Scale pixel values to [-1, 1]
    normalized = (resized - mean) / std

    # Add batch size (1) and channel dimension (grayscale is 1 channel)
    processed_image = np.expand_dims(normalized, axis=(0, -1))  # Shape: (1, 128, 128, 1)

    return processed_image

def encode_image_to_base64(image):
    encoded_image = cv2.imencode('.jpg', image)[1].tobytes()
    encoded_image = base64.b64encode(encoded_image).decode('utf-8')  # Base64 encode
    return encoded_image

def send_data():
    global send_data_flag
    cam = cv2.VideoCapture(cam_port)
    cam.set(cv2.CAP_PROP_BUFFERSIZE, 1)
    

    last_emit_time = time.time()
    target_interval = 1/30 # 30 fps

    letter, chance = '', ''

    try:
        while send_data_flag:
            # socketio.emit('server_event', {'data': 'Hello from Flask! ' + str(i)})

            _, image = cam.read()

            frameSize = image.shape
            x = frameSize[1]
            y = frameSize[0]

            left = int((x - 256) / 2)
            right = left + 256
            top = int((y - 256) / 2)
            bottom = top + 256


            start_point = (left, top)    # top left corner of box
            end_point = (right, bottom)      # bottom right corner of box

            rectangle = cv2.rectangle(image, start_point, end_point, (0, 0, 255), 2)
            processed_image = preprocess_image(image, top, bottom, left, right)

            encoded_image = encode_image_to_base64(rectangle)
            
            current_time = time.time()
            if current_time - last_emit_time >= target_interval:
                
                letter, chance = prediction(processed_image)
                socketio.emit('receive_data', {'image': encoded_image, 'data': f"{letter} {chance}%"})
                last_emit_time = current_time
        
    finally:
        cam.release()


@socketio.on('connect')
def handle_connect():
    global send_data_flag
    send_data_flag = True
    print("Client connected")
    socketio.start_background_task(send_data)


@socketio.on('disconnect')
def handle_disconnect():
    global send_data_flag
    send_data_flag = False
    print('Client Disconnected')
    




if __name__ == '__main__':
    eventlet.monkey_patch()

    tf.config.optimizer.set_jit(True)  # Enable XLA

    socketio.run(app, port=5001)
