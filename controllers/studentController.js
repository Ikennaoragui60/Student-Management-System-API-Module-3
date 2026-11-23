const Student = require("../models/Student");
const Department = require("../models/Department");

const createStudent = async (req, res) => {
    try {
        const { firstName, lastName, email, matricNumber, level, department } = req.body;

        if (!firstName || !lastName || !email || !matricNumber || !level || !department) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingDepartment = await Department.findById(department);
        if (!existingDepartment) {
            return res.status(404).json({ message: "Department not found" });
        }

        const student = await Student.create({ firstName, lastName, email, matricNumber, level, department });
        res.status(201).json(student);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email or matric number already exists" });
        }
        res.status(500).json({ message: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate("department", "name code");
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createStudent, getStudents };