const mongoose = require("mongoose");

const lecturerSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phoneNumber: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true }
}, { timestamps: true })

module.exports = mongoose.model("Lecturer", lecturerSchema);