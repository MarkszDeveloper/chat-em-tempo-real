import http from "http";
import express, { Application } from "express";
import { Server } from "socket.io"; 

export class Server2 {
    private io: Server;
    private http: http.Server;
    private app: Application;
    constructor() {
        this.app = express();
        this.http = http.createServer(this.app);
        this.io = new Server(this.http);
        this.listenSockets();
        this.setupRouteGet();
    }
    listenServer() {
        const PORT = 3000;
        this.http.listen(PORT, () => {
            console.log("Rodanu");
        })
    }
    listenSockets() {
        this.io.on("connection", (socket) => {
            console.log("Connext user:", socket.id);

            socket.on("message", (msg) => {
                const data = `<b> User (id: ${socket.id} - ${Date.now()}):</b> `;
                console.log(data + ` msg: ${msg}`);
                this.io.emit("message", data, msg);
            });
        })
    }
    setupRouteGet() {
        this.app.get("/", (req, res) => {
            res.status(200).sendFile(__dirname + "/index.html");
        })
    }
}

const server2 = new Server2();
server2.listenServer();