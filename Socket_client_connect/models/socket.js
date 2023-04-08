const socketio = require('socket.io-client');

exports.connect = (onData) => {
  // Connect to the external WebSocket
  const socket = socketio('http://13.232.18.39/');

  // Listen for incoming data
  socket.on('dashboard', (data) => {
    // Emit the data to the controller
    onData(data);
  });
};
