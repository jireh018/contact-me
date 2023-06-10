import dotenv from 'dotenv'
dotenv.config()
import express from "express";
const app = express()

import cors from 'cors'
import morgan from 'morgan';
import 'express-async-errors'

import contactRouter from './route/contactRouter.js'

app.use(cors())
app.use(express.json())
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

app.use('/api/v1/contact-me', contactRouter)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})
