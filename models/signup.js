const mongoose = require("mongoose");

const portalSchema = new mongoose.Schema({
    fname : {
        type:"String",
        required: true,
    },
    uname : {
        type:"String",
        required: true,
    },
    dob : {
        type:"String",
        required: true,
    },
    email : {
        type: "String",
        required : true,
    },
    password :{
        type : "String",
        required: true
    },



});
const Portal = mongoose.model("portal" , portalSchema)
module.exports = Portal