import mongoose, { Schema, Document } from "mongoose";
import DatabaseModel from "../../config/database/databaseConfig";

export interface IUser extends Document {
    idUser: string,
    message: string,
}

export const dbSchemma = new Schema<IUser>({
    idUser: {
        type: String, 
        required: true,
        default: "Unknown user"
    },
    message: {
        type: String,
        required: true
    },
}, {timestamps: true});

const dbModel = mongoose.model("Chat 1", dbSchemma);
const connect = async () => {
    return await DatabaseModel.connectDb();
}
connect();
export default dbModel;
