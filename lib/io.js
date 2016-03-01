var io = require('socket.io')();
io.on('connection', function (socket) {

 socket.emit('messageTest', 'string message example-data');

 socket.on('messageFeed', function (data) {

   console.log(data);

 });


});

module.exports = io;
