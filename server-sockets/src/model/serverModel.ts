export default class ServerModel {
    constructor() {}

    static validateObjectForDatabase(message: unknown) {
        if(message) {
            return;
        }  else {
            throw new Error("String com valor inválido!");
        }
    }
}