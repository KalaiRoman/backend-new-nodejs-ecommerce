import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';
import ConnectDb from './dbconnect/Dbconnect.js';
import router from './routings/Routing.js';
import errroMiddelware from './middleware/errorMiddleware.js';
dotenv.config();
ConnectDb();
const app = express();

app.use(express.json());
app.use(cors());


app.use("/base", router)


// middleware

app.use(errroMiddelware);

app.listen(process.env.PORT, () => {
    console.log(`Port Running ${process.env.PORT}`)
})

