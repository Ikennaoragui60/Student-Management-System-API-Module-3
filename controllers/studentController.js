const Student = require("../models/Student");
const Department = require("../models/Department");
const Registration = require("../models/Registration");

exports.createStudent = async (req, res) => {
    try {
        const { department } = req.body;
        if (department) {
            const existingDepartment = await Department.findById(department);
            if (!existingDepartment) {
                return res.status(404).json({ message: "Department not found" });
            }
        }
        const student = await Student.create(req.body);
        res.status(201).json({ message: "Student created successfully", data: student });
        } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "Student with the matricNumber and email already exists" });
        }
        if (err.name === "ValidationError" || err.name === "CastError") {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: err.message });
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate("department", "name code");
        res.json({ message: "All students fetched successfully", data: students });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate("department", "name code");
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json({ message: "Student fetched successfully", data: student });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const { department } = req.body;
        if (department) {
            const existingDepartment = await Department.findById(department);
            if (!existingDepartment) {
                return res.status(404).json({ message: "Department not found" });
            }
        }
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json({ message: "Student updated successfully", data: student });
        } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "Student with the matricNumber already exists" });
        }
        if (err.name === "ValidationError" || err.name === "CastError") {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: err.message });
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        await Registration.deleteMany({ student: student._id });
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
