import express from 'express';
import { createUser } from '../controlls/Auth/Auth_controlls.js';


const router = express.Router();


// auth router


router.post("/register", createUser)


export default router;