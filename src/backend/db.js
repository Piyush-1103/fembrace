require("dotenv").config();

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

.then ((   )=>{console.log("MongoDB Connection establised"); })
.catch((err)=>{console.log("MongoDB Connection failed",err);});

module.exports = mongoose;