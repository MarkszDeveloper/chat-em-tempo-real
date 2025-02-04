import http from "http";
import express, { Application } from "express";
import { Server } from "socket.io"; 
import { ServerService } from "./services/serverServices";

export class Server2 {
    private io: Server;
    private http: http.Server;
    private app: Application;
    constructor() {
        this.app = express();
        // Protegendo o servidor utilizado o NPM do helmet.js
        this.http = http.createServer(this.app);
        // Criando o servidor sockets para permitir a comunicação 
        this.io = new Server(this.http);
        this.listenSockets();
        this.setupRouteGet();
    }
    // Subir o servidor http
    listenServer() {
        const PORT = 3000;
        this.http.listen(PORT, () => {
            console.log("Rodanu");
        })
    }
    // Comunicação entre os sockets do servidor e do usuário/interface
    listenSockets() {
        this.io.on("connection", async (socket) => {
            console.log("Connext user:", socket.id);
            const oldMessages = await ServerService.findMessages();
            console.log(oldMessages);
            this.io.emit("temp", oldMessages)
            socket.on("message", async (msg) => {
                const dataId: string = `<b> User (id: ${socket.id} - ${Date.now()}):</b> `;
                const completeData: string = dataId + ` msg: ${msg}`;
                console.log(completeData);
                await ServerService.postMessages(completeData);
                this.io.emit("message", dataId, msg);
            });
        })
    }
    // Gerenciar a rota GET da API criada, passando o arquivo que será a UI
    setupRouteGet() {
        this.app.get("/", (req, res) => {
            res.status(200).sendFile(__dirname + "/index.html");
        })
    }
}

const server2 = new Server2();
server2.listenServer();