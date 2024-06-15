const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({
    u_id:String,
    u_name:String,
    u_pwd:String,
    u_email:String,
    u_contact:String,
    u_addr:String  
})
const User=mongoose.model("User",userSchema);
module.exports=User