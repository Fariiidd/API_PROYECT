import express from "express";

// DB
import connectDB from "./config/db";

// Routes
import productRouter from './routes/products.routes'

connectDB()
const app = express()

// ROUTER
app.use("/api/products", productRouter)

export default app