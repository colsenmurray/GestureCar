# gesture-car
CS307 Final Project to Code a Gesture-Controlled Car
Final Project Write-up
Packages and Requirements
Front-end(npm):
cd to “/GCar-Frontend” folder and run “npm install” to download all of the packages
    "framer-motion": "^11.5.6",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "recharts": "^2.12.7",
    "sass": "^1.79.3",
    "socket.io-client": "^4.8.1"
Back-end(pip):
Activate virtual environment, cd to “/dev” folder, and run “pip install -r requirements.txt” to download all of the 
absl-py==2.1.0
astunparse==1.6.3
bidict==0.23.1
certifi==2024.8.30
charset-normalizer==3.4.0
click==8.1.7
colorama==0.4.6
dnspython==2.0.0
eventlet==0.33.1
Flask==2.1.2
Flask-Cors==3.0.10
Flask-SocketIO==5.2.0
flatbuffers==24.3.25
gast==0.6.0
google-pasta==0.2.0
greenlet==3.1.1
grpcio==1.68.0
h11==0.14.0
h5py==3.12.1
idna==3.10
itsdangerous==2.2.0
Jinja2==3.1.4
keras==3.6.0
libclang==18.1.1
Markdown==3.7
markdown-it-py==3.0.0
MarkupSafe==3.0.2
mdurl==0.1.2
ml-dtypes==0.4.1
namex==0.0.8
numpy==1.26.4
opencv-python==4.10.0.84
opt_einsum==3.4.0
optree==0.13.1
packaging==24.2
protobuf==4.25.5
Pygments==2.18.0
python-engineio==4.10.1
python-socketio==5.11.4
requests==2.32.3
rich==13.9.4
simple-websocket==1.1.0
six==1.16.0
tensorboard==2.17.1
tensorboard-data-server==0.7.2
tensorflow==2.17.0
tensorflow-intel==2.17.0
tensorflow-io-gcs-filesystem==0.31.0
termcolor==2.5.0
typing_extensions==4.12.2
urllib3==2.2.3
Werkzeug==2.2.3
wrapt==1.16.0
wsproto==1.2.0
Running the programs
Front-end:
cd to “/GCar-Frontend” and run “npm run dev” to start front-end application
Back-end:
cd to “/dev” and run “python main.py” to start back-end application
Hardware:
Ensure Arduino is powered on

How to Use:
This is a gesture controlled car trained on 5 ASL signs that correlate to instructions to the car
The five signs are “Y”, “L”,”C”,”W”,”O”. The front end provides examples for how to sign this these letters
“Y” - Stop
“W” - Go
“L” - Left
“C” - Right
“O” - Reverse
Known Bugs:
Latency between image recognition and instruction to the car is a little slow
