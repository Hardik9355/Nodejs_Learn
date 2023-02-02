const portalSchema =  require("../models/signup");
const bcrypt = require("bcrypt");
require("dotenv").config();
const mongoose = require("mongoose");
const {use} = require("../router/signup"); 
// const saltRounds = process.env.saltRounds;
saltRounds = 10;
const createUser = async(req,res) => {
    try{
        const{fname , uname, dob,email,password } = req.body;
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            if(!err){
                const createUser = new portalSchema({
                    fname,
                    uname,
                    dob,
                    email,
                    password:hash
                });
                let response = await createUser.save();
                res.json({
                    message : "Users Details Saved Successfully",
                    data:response,
                });
            }
            else{
                 res.json({
                     message: err.message,
                    });
                }
            });

            
        // });
    }
    catch (err){
        res.json ({
            message:err.message,
        });
    }

};
module.exports = createUser
