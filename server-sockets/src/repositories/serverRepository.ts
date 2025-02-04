import dbModel, { IUser } from "../model/database/dataBaseModel";
import ServerModel from "../model/serverModel";

export default class ServerRepository {
    constructor() {}

    static async findAll() {
        return await dbModel.find()
            .catch((error) => {
                console.log("Ocorreu um erro ao buscar as mensagens no banco de dados:", error);
            });
    }

    static async postMessage(data: string) {
        ServerModel.validateObjectForDatabase(data);
        dbModel.create({message: data})
            .catch((error) => {
                console.log("Ocorreu um erro ao adicionar a mensagem no banco de dados:", error)
            });
    }

    static async updateMessage(data: IUser) {
        ServerModel.validateObjectForDatabase(data);
        return dbModel.findByIdAndUpdate(data.idUser, {message: data.message}, {new: true})
            .catch((error) => {
                console.log("Ocorreu um erro ao atualizar a mensagem no banco de dados:", error)
            });
    }

    static async deleteMessage(data: IUser) {
        ServerModel.validateObjectForDatabase(data);
        dbModel.findByIdAndDelete(data.idUser)
            .catch((error) => {
                console.log("Ocorreu um erro ao deletar a mensagem no banco de dados:", error)
            });
    }
}

// Não serão adicionados rotas PATCH pois não haverá motivo de utilizá-las neste chat (decisões escolhidas por mim)