const mongoose = require("mongoose");

const symptomSchema = new mongoose.Schema({
    username:{type:String,required:true},
    date:{type:Date,required:true},
    name:{type:String},
    emoji:{type:String},
    category:{type:String},
    intensity:{type:Number}
}); 

module.exports = mongoose.model("Symptom",symptomSchema);