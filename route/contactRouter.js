import express from 'express'
const router = express.Router()

import { StatusCodes } from 'http-status-codes'
import sendEmail from '../utils/sendEmail.js'

router.post('/', async (req, res) => {
    const {email, subject, html} = req.body
    await sendEmail({email: email, subject: subject, html: html})
    res.status(StatusCodes.OK).json({msg: "Message sent"})
})

export default router