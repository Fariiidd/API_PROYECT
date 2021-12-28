import express from "express";
import morgan from "morgan";
import { createRoles } from './libs/initialRole'

// DB
import connectDB from "./config/db";

// Routes
import productRouter from './routes/products.routes'
import authRouter from './routes/auth.routes'


const app = express()
createRoles()

connectDB()
app.use(morgan('dev'))
app.use(express.json())


// ROUTER
app.use("/api/products", productRouter)
app.use("/api/auth", authRouter)

export default app