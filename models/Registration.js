const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    session: { type: String, required: true },
    status: { type: String }
}, { timestamps: true })

registrationSchema.index({ student: 1, course: 1, session: 1 }, { unique: true });

module.exports = mongoose.model("Registration", registrationSchema);