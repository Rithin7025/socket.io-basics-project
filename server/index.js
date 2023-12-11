import express from 'express'
const app = express();
//create a http server(socket io is created upon a http server)
import http from 'http'
import { Server } from 'socket.io';
import cors from 'cors'

//server

app.use(cors())

const server = http.createServer(app)

const io = new Server(server,{
    cors : {
        origin : 'http://localhost:5173',
        methods : ["GET","POST"],
    }
})

server.listen(3001,() => {
    console.log('server runnin on port 3001')
})