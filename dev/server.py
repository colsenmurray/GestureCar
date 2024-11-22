from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS
import eventlet
import time

app = Flask(__name__)
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app, cors_allowed_origins="*")  # Allow any frontend to connect

send_data_flag = True

def send_data():
    i = 0
    while send_data_flag:
        print("Sending Data...")
        socketio.emit('server_event', {'data': 'Hello from Flask! ' + str(i)})
        i += 1
        time.sleep(2)

@socketio.on('connect')
def handle_connect():
    print("Client connected")
    socketio.start_background_task(send_data)
    global send_data_flag
    send_data_flag = True

@socketio.on('disconnect')
def handle_disconnect():
    global send_data_flag
    print('Client Disconnected')
    send_data_flag = False

if __name__ == '__main__':
    eventlet.monkey_patch()

    socketio.run(app, port=5001)