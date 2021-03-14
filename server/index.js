const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
	console.log('We have a new conenction :)');

	socket.on('disconnect', () => {
		console.log('User left :(');
	});
});

app.use(router);

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
