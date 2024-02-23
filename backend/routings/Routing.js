import express from 'express';
import { createUser } from '../controlls/Auth/Auth_controlls.js';
import { createUserName, getUserName, postCreateuser, postDeleteLikeuser, postDeleteuser, postLikeuser, postUpdateLikeuser } from '../controlls/User_controlls.js';


const router = express.Router();


// auth router


router.post("/register", createUser)
router.post("/user", createUserName)
router.get("/get", getUserName)
router.put("/update", postCreateuser)
router.put("/delete/post", postDeleteuser)
router.put("/update/like", postLikeuser)
router.put("/delete/like", postDeleteLikeuser)
router.put("/upadted/like/user", postUpdateLikeuser)









export default router;