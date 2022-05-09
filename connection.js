var mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION, (error, connected)=>{
    error? console.log("error"):
    console.log("connected")
})

module.exports = mongoose;
