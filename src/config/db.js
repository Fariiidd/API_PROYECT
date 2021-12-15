require("dotenv").config({path: "dotenv.env"})
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
        console.log("Database Working")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
