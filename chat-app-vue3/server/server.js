const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// 웹소켓 기본 접속 연결
io.on('connection', (socket) => {
    console.log(`connection: ${socket}`)
    socket.on('connection', () => {
        console.log('connection complete..')
    })

    socket.on('message-on', (data) => {
      console.log(data)
    })
});

// 3000 포트 사용 내용
server.listen(3000, () => {
  console.log('listening on *:3000');
});
