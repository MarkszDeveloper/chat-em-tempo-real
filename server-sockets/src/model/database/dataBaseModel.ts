import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    idUser: string,
    message: string,
}

const newSchemma = new Schema<IUser>({
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

const newModel = mongoose.model("Chat 1", newSchemma);

export default newModel;
