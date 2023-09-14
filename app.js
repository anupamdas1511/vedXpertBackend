import express from "express"
// import * as db from './db/database.js'
import mainRoute from './routes/index.js'
import 'dotenv/config.js'
import * as Exception from './middleware/exception.js'
import BodyParser from 'body-parser'
import cors from 'cors'

// db.connect()
const app = express()

app.use(cors())
app.use(express.json())
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

app.use('/api', mainRoute)
app.use(Exception.defaultExceptionHandler)
export default app