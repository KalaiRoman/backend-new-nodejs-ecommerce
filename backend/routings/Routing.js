import express from 'express';
import { createUser } from '../controlls/Auth/Auth_controlls.js';
import { createUserName, getUserName } from '../controlls/User_controlls.js';


const router = express.Router();


// auth router


router.post("/register", createUser)
router.post("/user", createUserName)
router.get("/get", getUserName)




export default router;