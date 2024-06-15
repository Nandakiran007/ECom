    const mongoose = require("mongoose");
    const productSchema=new mongoose.Schema({
        p_id:String,
        P_name:String,
        p_cost:Number,
        p_cat:String,
        p_img:String,
        p_desc:String
    })
    const Product=mongoose.model("Product",productSchema);
   module.exports = Product;