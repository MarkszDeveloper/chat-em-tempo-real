import ServerRepository from "../repositories/serverRepository";
import { IUser } from "../model/database/dataBaseModel";

export class ServerService {
    constructor() {}

    static async findMessages() {
        return await ServerRepository.findAll();
    }

    static async postMessages(data: string) {
        return await ServerRepository.postMessage(data);
    }

    static async updateMessages(data: IUser) {
        return await ServerRepository.updateMessage(data);
    }

    static async deleteMessages(data: IUser) {
        return await ServerRepository.deleteMessage(data);
    }
}