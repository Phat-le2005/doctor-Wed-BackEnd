import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRouter from "./route/wed"
import connectDB from "./config/connectDB"
import cookieParser from "cookie-parser";
import helmet from "helmet";
const path = require("path");

require('dotenv').config();
const cors = require('cors');

const app = express()
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '50mb' })); // Cấu hình giới hạn dữ liệu JSON là 50MB
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); 
app.use(cors({
    origin: "http://localhost:3000", // 👈 frontend domain cụ thể
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use(helmet());

app.use(express.json());
app.use(cookieParser());



viewEngine(app)
initWebRouter(app)
connectDB(app)
let port= process.env.PORT || 6969
app.listen(port,()=>{
    console.log('Thanh cong roi')
})