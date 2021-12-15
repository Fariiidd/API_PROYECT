import { Schema, model } from "mongoose";

const productShcema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    category: String,
    imageUrl: String,
    discount: String,
}, {
    timestamps: true,
    versionKey: false,
})

export default model("Product", productShcema)