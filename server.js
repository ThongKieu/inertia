// ES
import { createServer } from "http";
import { Server } from "socket.io";

// import https from 'node:https';
// import http from 'node:http';
// import fs from 'node:fs';

// const httpsServer = https.createServer({
//     "key" : fs.readFileSync( "./public/site.test/server.key" ),
//     "cert": fs.readFileSync( "./public/site.test/server.crt" ),
//     "ca"  : fs.readFileSync( "./public/site.test/server.crt"   )
// });
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: { origin: "*" },
});

io.on("connection", (socket) => {
    console.log( "user connected" );
        // ... your code
           socket.on('sendChatToServer', (message) => {

            console.log(message);

            io.sockets.emit('sendChatToClient', message);
            socket.broadcast.emit('sendChatToClient', message);
        });
        socket.on('pushOnline', (message) => {
            console.log(message);
        });
});

httpServer.listen(3000,function(){
    console.log('server running');
});

