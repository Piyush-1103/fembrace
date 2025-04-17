const mongoose = require("mongoose");

const periodSchema= new mongoose.Schema({

    username:{type:String,required:'true'},
    start:{type:Date},
    end:{type:Date},
    flow:{type:Number},
    note:{type:String},    
    symptoms:[{

        name:{type:String},
        emoji:{type:String},
        category:{type:String},
        intensity:{type:Number},
    }]
});

module.exports = mongoose.model("Period",periodSchema);