import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import connectDB from './src/config/db.js'
import cardRoutes from './src/routes/cardRoutes.js'
import corsOptions from './src/config/cors.js'
import dotenvConfig from './src/config/env.js'


const app = express()
dotenvConfig()
await connectDB()
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static('public'))
app.use('/api/v1', cardRoutes)
app.listen(process.env.PORT, () => {
    console.log(`The server is running on: http://localhost:${process.env.PORT}`)
})