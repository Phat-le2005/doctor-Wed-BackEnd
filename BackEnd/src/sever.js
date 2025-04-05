import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRouter from "./route/wed"
import connectDB from "./config/connectDB"
const path = require("path");

require('dotenv').config();
const cors = require('cors');

const app = express()
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: '*', // Cho phép tất cả, có thể đổi thành ['http://localhost:3000']
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
viewEngine(app)
initWebRouter(app)
connectDB(app)
let port= process.env.PORT || 6969
app.listen(port,()=>{
    console.log('Thanh cong roi')
})