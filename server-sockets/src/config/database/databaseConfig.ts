import mongoose from "mongoose";

export default class DatabaseModel {
    constructor() {}
    static async connectDb() {
        try {
            return await mongoose.connect("mongodb+srv://marco:rYFR8bPXQjiwXfsE@nova-api.ndqwj.mongodb.net/?retryWrites=true&w=majority&appName=nova-api").then(() => console.log("Database connected"));
        } catch (error) {
            if(error instanceof Error) {
                console.log("Error conhecido:", error.message);
            } else {
                console.log("Erro desconhecido:", error);
            }
        }
    }
}