const Student = require("../models/Student")
const Department =  require("../models/Department.js")
const { firstName, lastName, email, matricNumber, level, department } = req.body;
const createStudent = async (req, res) => { try { Department.findById(department) } catch (error) { 400 } };