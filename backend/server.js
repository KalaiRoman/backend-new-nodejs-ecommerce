import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDb from './dbconnect/Dbconnect.js';
dotenv.config();
ConnectDb();
const app = express();

app.use(express.json());
app.use(cors());


app.get("/kalai", (req, res, next) => {
    res.send("welcome to kalai amma appa new")
})
app.listen(process.env.PORT, () => {
    console.log(`Port Running ${process.env.PORT}`)
})