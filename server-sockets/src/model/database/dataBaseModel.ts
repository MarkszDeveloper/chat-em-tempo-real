import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    name: string,
    message: string,
}
const newSchemma = new Schema<IUser>({
    name: {
        type: String, 
        required: true,
        default: "Unknown"
    },
    message: {
        type: String,
        required: true
    },
}, {timestamps: true});

export const newModel = mongoose.model("Chat 1", newSchemma);
