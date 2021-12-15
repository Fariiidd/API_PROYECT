import { Schema, model } from "mongoose";

const productShcema = new Schema({
    name: String,
    price: Number,
    category: String,
    imageUrl: String,
    discount: Number,
}, {
    timestamps: true,
    versionKey: false,
})

export default model("Product", productShcema)