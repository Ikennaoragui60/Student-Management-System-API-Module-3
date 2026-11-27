const Lecturer = require("../models/Lecturer");

exports.createLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.create(req.body);
        res.status(201).json({ message: "Lecturer created successfully", data: lecturer });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllLecturers = async (req, res) => {
    try {
        const lecturers = await Lecturer.find();
        res.json({ message: "All lecturers retrieved successfully", data: lecturers });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findById(req.params.id);
        if (!lecturer) return res.status(404).json({ message: "Lecturer not found" });
        res.json({ message: "Lecturer retrieved successfully", data: lecturer });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!lecturer) return res.status(404).json({ message: "Lecturer not found" });
        res.json({ message: "Lecturer updated successfully", data: lecturer });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByIdAndDelete(req.params.id);
        if (!lecturer) return res.status(404).json({ message: "Lecturer not found" });
        res.json({ message: "Lecturer deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};