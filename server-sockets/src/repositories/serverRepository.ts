import newModel from "../model/database/dataBaseModel";

export default class ServerRepository {
    private db;
    
    constructor() {this.db = newModel}

    findAll() {
        this.db.find();
    }

    postMessage(data: object) {
        this.db.create(data)
    }

    updateMessage() {

    }

    deleteMessage() {

    }
    // Não serão adicionados rotas PATCH pois não haverá motivo de utilizá-las neste chat (decisões escolhidas por mim)

}