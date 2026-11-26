const Registration = require("../models/Registration");
const Student = require("../models/Student");
const Course = require("../models/Course");

exports.createRegistration = async (req, res) => {
    try {
        const { student, course, session, status } = req.body;
        const existingStudent = await Student.findById(student);
        if (!existingStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        const existingCourse = await Course.findById(course); 
        if (!existingCourse) {
            return res.status(404).json({ message: "Course not found" });
        }
        const registration = await Registration.create({ student, course, session, status });
        res.status(201).json({ message: "Registration created successfully", data: registration });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.json({ message: "All registrations fetched successfully", data: registrations });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getRegistration = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) return res.status(404).json({ message: "Registration not found" });
        res.json({ message: "Registration fetched successfully", data: registration });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateRegistration = async (req, res) => {
    try {
        const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!registration) return res.status(404).json({ message: "Registration not found" });
        res.json({ message: "Registration updated successfully", data: registration });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteRegistration = async (req, res) => {
    try {
        const registration = await Registration.findByIdAndDelete(req.params.id);
        if (!registration) return res.status(404).json({ message: "Registration not found" });
        res.json({ message: "Registration deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};