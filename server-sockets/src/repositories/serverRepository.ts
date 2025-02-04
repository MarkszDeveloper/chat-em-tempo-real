import newModel, { IUser } from "../model/database/dataBaseModel";
import ServerModel from "../model/serverModel";

export default class ServerRepository {
    private db;
    
    constructor() {this.db = newModel}

    findAll() {
        this.db.find()
            .catch((error) => {
                console.log("Ocorreu um erro ao buscar as mensagens no banco de dados:", error);
            });
    }

    postMessage(data: IUser) {
        ServerModel.validateObjectForDatabase(data);
        this.db.create(data)
            .catch((error) => {
                console.log("Ocorreu um erro ao adicionar a mensagem no banco de dados:", error)
            });
    }

    updateMessage(data: IUser) {
        ServerModel.validateObjectForDatabase(data);
        this.db.findByIdAndUpdate(data.idUser, {message: data.message}, {new: true})
            .catch((error) => {
                console.log("Ocorreu um erro ao atualizar a mensagem no banco de dados:", error)
            });
    }

    deleteMessage(data: IUser) {
        ServerModel.validateObjectForDatabase(data);
        this.db.findByIdAndDelete(data.idUser)
            .catch((error) => {
                console.log("Ocorreu um erro ao deletar a mensagem no banco de dados:", error)
            });
    }
    // Não serão adicionados rotas PATCH pois não haverá motivo de utilizá-las neste chat (decisões escolhidas por mim)

}