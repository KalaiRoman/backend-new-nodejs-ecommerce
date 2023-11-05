import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDb from './dbconnect/Dbconnect.js';
dotenv.config();
ConnectDb();
const app = express();

app.use(express.json());
app.use(cors());



app.listen(process.env.PORT, () => {
    console.log(`Port Running ${process.env.PORT}`)
})

app.get("/kalai", (req, res) => {
    res.send("welcome to kalai amma appa new")
})