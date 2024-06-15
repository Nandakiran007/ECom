const mongoose = require("mongoose");
const cartSchema=new mongoose.Schema({
    pid:String,
    pimg:String,
    p_cost:Number,
    p_qty:Number,
    u_id:String
})
const Cart=mongoose.model("Cart",cartSchema);
module.exports=Cart;