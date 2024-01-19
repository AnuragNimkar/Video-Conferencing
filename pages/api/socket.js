import { Server } from "socket.io";

const SocketHandler = (req, res) =>{
    if(res.socket.server.io)
    {
        console.log("alreay runncing socket")

    }
    else{
        const io = new Server(res.socket.server)
        res.socket.server.io = io


        io.on('connection' , (socket) =>{
            console.log("server is connenected")
        })
    }

    res.end();
}


export default SocketHandler;