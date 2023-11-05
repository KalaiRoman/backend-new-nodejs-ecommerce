import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import { BSON } from 'bson';
import ConnectDb from './dbconnect/Dbconnect.js';
dotenv.config();
ConnectDb();
const app = express();

app.use(express.json());
app.use(cors());

const router = express.Router();

router.get('/', (req, res) => res.render('welcome'));


app.listen(process.env.PORT, () => {
    console.log(`Port Running ${process.env.PORT}`)
})

