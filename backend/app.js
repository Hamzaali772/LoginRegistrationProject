import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import router from './routes/urlroutes.js'
import connectDataBase from './connectDB/database.js'

const app = express()
const DATABASE_URL = process.env.DATABASE_URL
const PORT=process.env.PORT || 8000



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public/uploads/image'))
app.use('/api/user',router)
connectDataBase(DATABASE_URL)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})