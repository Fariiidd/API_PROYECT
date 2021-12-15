import express from "express";
import morgan from "morgan";

// DB
import connectDB from "./config/db";

// Routes
import productRouter from './routes/products.routes'

connectDB()
const app = express()
app.use(morgan('dev'))
app.use(express.json())


// ROUTER
app.use("/api/products", productRouter)

export default app