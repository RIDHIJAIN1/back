import express from "express";
import { User } from "../models/user.js";
import { editUser, getAllUsers,  getSingleUser,  getUserDetails,logOut,loginFunc,newRegister, userCount  } from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";


const router = express.Router()

router.post("/new",newRegister)     
router.post("/login",loginFunc)
router.get('/:id',isAuthenticated, getSingleUser); // Get user by ID
router.put('/:id',isAuthenticated, editUser); // Edit user by ID
router.get("/", isAuthenticated,getAllUsers)
router.get("/logout",isAuthenticated,logOut)
router.get("/usercount",isAuthenticated,userCount)




router.get( "/me",isAuthenticated,getUserDetails)

export default router;
