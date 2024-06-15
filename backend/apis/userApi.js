const User=require("../models/User");
const generateToken=require("../token")
const handleLogin=async(req,res)=>{
    console.log("inlogin");
    let {u_id,u_pwd}=req.body;
    console.log(req.body);
    const result = await User.find({u_id:u_id,u_pwd:u_pwd});
    console.log("result:",result)
    
    try{
        
        if(result.length>0){
            let payload = {
                name: result[0].u_name,
                email: result[0].u_email,
                addr: result[0].u_addr,
            };
            console.log(payload);
        let token=await generateToken(payload,"mongocrud$#@")
        res.json({
            token:token,
            user:payload,
            status:"success"
        })

        }else{
            res.status(404).json({
                status:"Invalid Credentials"
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            status: "Backend Error",
            error:err
        });
    }

}
const handleSignup=async(req,res)=>{
    const user_obj=new User(req.body);
    try{
        let user=await User.findOne({u_id:user_obj.u_id});
        if(user)
            return res.json({
                status:"user id taken"
            })
        user=await User.findOne({u_email:user_obj.u_email});
        if(user)
            return res.json({
                status:"email already registed"
            })
        
        const saveUser=await user_obj.save(); 
        console.log(`created user ${user_obj.u_name}`);
        res.json({
            status:"success"
        })

    }catch(err){
        console.log(err)
        res.json({status:"got error"});
    }
}

module.exports = {
    handleLogin,
    handleSignup,
};
