const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json({ message: "Course created successfully", data: course });
        } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "Course already exists" });
        }
        if (err.name === "ValidationError" || err.name === "CastError") {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: err.message });
        }
};

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json({ message: "All courses fetched successfully", data: courses });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json({ message: "Course fetched successfully", data: course });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json({ message: "Course updated successfully", data: course });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json({ message: "Course deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};