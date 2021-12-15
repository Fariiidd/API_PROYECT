import express from "express";

// Routes
import productRouter from './routes/products.routes'


const app = express()

// ROUTER
app.use("/api/products", productRouter)

export default app