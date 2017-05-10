var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = []; // hold all users
connections = []; // hold all socket connections
server.listen(process.env.PORT || 3000);
console.log('Server running ..');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
  connections.push(socket); // push in socket when user connects
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', function(data) {
    // remove user when disconnected
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    // also remove the socket connection
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  // recieve cleint messages
  socket.on('send message', function(data) {
    // console.log(data);
    io.sockets.emit('new message', { msg: data, user: socket.username });
  });

  // new user
  socket.on('new user', function(user, callback) {
    callback(true); // return true to client
    socket.username = user; // add user name info to socket
    users.push(user);
    updateUsernames();
  });

  function updateUsernames() {
    io.sockets.emit('get users', users);
  }

});
