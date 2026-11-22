const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
    student:{type:mongoose.Schema.Types.ObjectId, ref:"Student"},
    course:{type:mongoose.Schema.Types.ObjectId, ref:"Course"},
    session:{type:String, required:true},
    status:{type:String}
},{timestamp:true})

module.exports = mongoose.model("Registration", registrationSchema);