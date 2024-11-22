// api.js
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:4000"; // Replace with your server URL

class WebSocketService {
    constructor() {
        this.socket = null;
    }

    connect() {
        if (!this.socket) {
            this.socket = io(SOCKET_SERVER_URL);

            // Event handler for connection success
            this.socket.on("connect", () => {
                console.log("Connected to WebSocket server");
            });

            // Event handler for disconnection
            this.socket.on("disconnect", () => {
                console.log("Disconnected from WebSocket server");
                this.socket = null; // Reset socket on disconnect
            });
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
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
