import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const App = () => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:5001");  // Point to Flask server

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('receive_data', (data) => {
      console.log('Received image data:', data);

      if (data?.image) setImage(data.image);  // Update the image state
      if (data?.data) setMessage(data.data);  // Update the message state

    });

    window.addEventListener("beforeunload", () => {
      socket.disconnect();
    })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('receive_data');
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO Image Stream</h1>

      {/* Display the received image if available */}
      {image ? (
        <div>
          <h2>Received Image:</h2>
          <img 
            src={`data:image/jpeg;base64,${image}`} 
            alt="Received" 
            style={{ width: '300px' }} 
          />
        </div>
      ) : (
        <p>Waiting for image...</p>
      )}

      {message ? <p>{message}</p> : <p>No message received</p> /* This will help debug if the message is empty */ }

    </div>
  );
};

export default App;
