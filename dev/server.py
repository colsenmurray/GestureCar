from flask import Flask
from flask_socketio import SocketIO
import eventlet
import time

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('connect')
def handle_connect():
    print("Client Connected...")

    # emit data once connected
    def send_data():
        while True:
            socketio.emit('server_event', {'data': 'Hello from Python Flask!!'})
            time.sleep(2)

    socketio.start_background_task(send_data)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port = 5000)
