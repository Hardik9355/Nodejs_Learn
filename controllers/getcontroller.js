const portalSchema =  require("../models/signupmodel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const mongoose = require("mongoose");
const {use} = require("../router/getrouter"); 
const getUser = async (req, res) => {
    try {
      console.log(req.id);
      const id = mongoose.Types.ObjectId(req.id);
      let users = await portalSchema.findOne(id).select("-password");
      res.json({
        message: "One the user",
        users,
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };
module.exports = {getUser};
// const getUser = async (req, res) => {
//     try {
//       let users = await portalSchema.find().select("-password");
//       res.json({
//         message: "all the users",
//         users,
//       });
//     } catch (err) {
//       res.json({
//         message: err.message,
//       });
//     }
//   };
//   module.exports = {getUser};