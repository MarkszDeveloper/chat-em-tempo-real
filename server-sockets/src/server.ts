import express, { Application } from "express";
import http from "http";
import { Server } from "socket.io";

class App {
    private app: Application;
    private http: http.Server;
    private io: Server;

    constructor() {
        this.app = express();
        this.http = http.createServer(this.app);
        this.io = new Server(this.http);
        this.listenSocket();
        this.setupRouteGet();
    }
    listenServer() {
        const PORT = process.env.PORT || 3000;
        this.http.listen(PORT, () => {
            console.log("Servidor rodando");
        })
    }
    listenSocket() {
        this.io.on("connection", (socket) => {
            console.log("Usuário conectado: " + socket.id);
            
            socket.on("message", (msg) => {
                const data = `<b> User (id: ${socket.id}):</b> `;
                console.log(data + `msg: ${msg}`);
                this.io.emit("message", data, msg);
            });
        });
    }
    setupRouteGet() {
        this.app.get("/", (req, res) => {
            res.sendFile(__dirname + "/index.html");
        })
    }
}

const app = new App();
app.listenServer();