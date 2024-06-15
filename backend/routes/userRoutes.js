const express=require("express")
const router=express();
const { handleLogin, handleSignup } = require("../apis/userApi");
router.post("/login",handleLogin);
router.post("/signup", handleSignup);

module.exports=router;
