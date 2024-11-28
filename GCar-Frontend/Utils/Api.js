// api.js
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:5001"; // Replace with your server URL

class WebSocketService {

    
    constructor() {
        this.socket = null;
    }

    connect(setConnected) {
        console.log("Connecting to WebSocket server");
        if (!this.socket) {
            this.socket = io(SOCKET_SERVER_URL);

            // Event handler for connection success
            this.socket.on("connect", () => {
                console.log("Connected to WebSocket server");
                setConnected(true);
            });

            // Event handler for disconnection
            this.socket.on("disconnect", () => {
                console.log("Disconnected from WebSocket server");
                this.socket = null; // Reset socket on disconnect
                setConnected(false);
            });
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
            console.log("Disconnected from WebSocket entirely");
        }
    }

    // Emit an event to the server
    emit(eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    }

    // Listen for an event from the server
    on(eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, callback);
        }
    }

    // Remove a specific listener
    off(eventName, callback) {
        if (this.socket) {
            this.socket.off(eventName, callback);
        }
    }
}

const socketService = new WebSocketService();
export default socketService;
