const express=require("express");
const {logout,login,signup}=require("../Controller/authController");
const router=express.Router();


router.get("/signup",signup);
router.get("/login",login);
router.get("/logout",logout);



module.exports=router;