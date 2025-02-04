import { IUser } from "../model/database/dataBaseModel";

export default class ServerModel {
    constructor() {}

    static validateObjectForDatabase(object: IUser) {
        if(object.idUser && object.message) {
            return;
        }  else {
            throw new Error("Objeto com valores inválidos!");
        }
    }
}