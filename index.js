// server config
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
})
const cors = require('cors')
const port = 8888

// serial port config
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const COM = new SerialPort({ path: 'COM6', baudRate: 115200 })

// start server
server.listen(port, () => console.log('on port ' + port))

// user server
app.use(express.static(__dirname + '/public'));
app.use(cors())

io.on('connection', onConnection);

var connectedSocket = null;
function onConnection(socket){
    connectedSocket = socket;
}

// send data

/** 
 * Serial data recieved is of the form [12.22, 18.09, 5.66]
 *                                        ^      ^      ^
 *                                        |      |      |
 *                                       yaw   pitch   roll
*/

const parser = COM.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', function (data) {
    io.emit('newData', { data });
});