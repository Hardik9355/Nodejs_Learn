const portalSchema = require("../models/signupmodel")
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const login = async(req,res)=> {
    try{
        const{email,password} = req.body;
        let user = await portalSchema.findOne({email:email});
        bcrypt.compare(password, user.password, function(err, result) {
            if(result==true){
                var token = jwt.sign(
                    {email :user.email, id:user._id,fname: user.fname},
                    process.env.SECRETKEY
                );
            
                res.json({
                    message:"Logged In",
                    token,
                    
                });

            }
            else{
                res.json({
                    message:"Login Error"
                });
            }
    });


}
catch(err){
    res.json({
        message:"Login Error",
        error: err.message,
    });
}

};
module.exports = login;
