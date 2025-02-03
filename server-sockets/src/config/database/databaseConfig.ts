import mongoose from "mongoose";

export default class DatabaseModel {
    constructor() {}
    async connectDb() {
        try {
            await mongoose.connect("mongodb+srv://marco:<db_password>@nova-api.ndqwj.mongodb.net/?retryWrites=true&w=majority&appName=nova-api").then(() => console.log("Database connected"));
        } catch (error) {
            if(error instanceof Error) {
                return console.log("Error conhecido:", error.message);
            } 
            console.log("Erro desconhecido:", error);
        }
    }
}