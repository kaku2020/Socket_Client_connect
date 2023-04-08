const express = require('express');
const path = require('path')
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
const dashboardController = require('./controllers/dashboardController');

// Register the route for the dashboard page
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname,'views','index.html'));
});

// Start the server and listen for incoming data
httpServer.listen(5000, () => {
  console.log('Server listening on port 5000');
  dashboardController.startServer(io);
});
