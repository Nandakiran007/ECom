const Product=require("../models/Product")

const handleinsert = async(req, res) => {
    
    let prodObj = new Product({
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_cost: req.body.p_cost,
        p_cat: req.body.p_cat,
        p_img: req.body.p_img,
        p_desc: req.body.p_desc,
    });
    try{
        const product=await Product.findOne({p_id:prodObj.p_id});
        if(product){
           return res.status(400).json({status:"product id exits"});
        }
        const result=await prodObj.save();
        res.status(201).json({status:"product inserted successfully",result});
    }catch(err){
        res.status(400).json({status:"error",err});
    }

};

const handleProdDelete = async(req, res) => {
    let p_id = req.body.p_id;
    console.log(p_id);
    try{
        const product=await Product.findOne({p_id:p_id});
        if(product){
            const result=await Product.deleteOne({p_id:p_id});
            console.log("product deleted")
            return res.status(200).json({status:"product deleted",product})
        }else{
            return res.status(400).json({status:"product not found to delete"});
        }
    }catch(err){
        return res.status(400).json({status:"error",err});
    }
    
};


const fetchallProducts =async (req, res) => {
    try{
    const result=await Product.find().sort({pid:1});
    return res.status(200).json({result});
    console.log(result)
    }catch(err){
        console.log(err);
    }
    

};

const handleUpdate = async(req, res) => {
     let p_id = req.body.p_id;
     const reqProduct = {
         p_name: req.body.p_name,
         p_cost: req.body.p_cost,
         p_cat: req.body.p_cat,
         p_img: req.body.p_img,
         p_desc: req.body.p_desc,
     };
     try {
         const product = await Product.findOne({ p_id: p_id });
         if (product) {
             const result = await Product.updateOne({ p_id }, reqProduct);
            
             return res.status(200).json({status:"updated successfully",result})
         } else {
             return res
                 .status(400)
                 .json({ status: "product not found to update" });
         }
     } catch (err) {
         res.status(400).json({ status: "error", err });
     }
    

};

const fetchProduct =async (req, res) => {
    // console.log(req)
    let p_id=req.params.p_id;
    try{
        const product=await Product.findOne({p_id:p_id});
        if(product){
            res.status(200).json({product:product,status:"Found"});
        }else{
            res.status(404).json({status:"Not Found"});
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports = {
    handleinsert,
    handleProdDelete,
    handleUpdate,
    fetchProduct,
    fetchallProducts
};