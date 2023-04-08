const socketModel = require('../models/socket');

exports.startServer = (io) => {
  // Connect to the external WebSocket
  socketModel.connect((data) => {
    // Forward the data to connected clients
    io.emit('dashboardData', data);
  });
};
