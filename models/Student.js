const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true, unique:true, lowercase:true},
    matricNumber:{type:String, required:true, unique:true},
    level:{type:Number, required:true},
    department:{type:mongoose.Schema.Types.ObjectId, ref:"Department", required:true}
},{timestamps:true})

module.exports = mongoose.model("Student", studentSchema);