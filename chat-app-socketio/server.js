const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')
// no database needed

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// connection success
io.on('connection', (socket) => {
    console.log(`A user with ID: ${socket.id} connected.`)

    // disconnected
    socket.on('disconnect', () => {
        console.log(`A user with ID: ${socket.id} disconnected.`)
    })

        
    // if connection successed
    if (io.sockets.connected) {
        socket.emit('connections', Object.keys(io.sockets.connected).length)
    } else {    // not connected..
        socket.emit('connections', 0)
    }

    socket.on('chat-message', (message) => {
        const data = {
            message: message.message,
            user_id: socket.id,
            name: message.user
        }
        // broadcast when protocol name 'chat-message' received.
        socket.broadcast.emit('chat-message', message)  
    })

    // broadcast when typing...
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })

    // when joined
    socket.on('joined', (name) => {
        const joinedData = `${name} has joined.`
        socket.broadcast.emit('joined', joinedData)
    })

    // leaved.
    socket.on('leave', (data) => {
        socket.broadcast.emit('leave', data)
    })
})


// connection with 3000 port of localhost...
http.listen(3000, () => {
    console.log('Listening on Port * : 3000')
})