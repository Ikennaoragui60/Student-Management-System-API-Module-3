const Department = require("../models/Department");

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json({ message: "Department created successfully", data: department });
  } catch (err) {
    res.status(400).json({ message: "Department already exist" });
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json({ message: "All departments fetched successfully", data: departments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDepartment = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) return res.status(404).json({ message: "Department not found" });
    res.json({ message: "Department fetched successfully", data: department });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!department) return res.status(404).json({ message: "Department not found" });
    res.json({ message: "Department updated successfully", data: department });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) return res.status(404).json({ message: "Department not found" });
    res.json({ message: "Department deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};