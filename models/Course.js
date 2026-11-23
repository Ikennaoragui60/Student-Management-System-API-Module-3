const mongoose = require("mongoose");
// const Department = require("./Department");

const courseSchema = mongoose.Schema({
    title: { type: String, required: true },
    code: { type: String, required: true, unique: true, uppercase: true },
    creditUnits: { type: Number, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
    lecturer: { type: mongoose.Schema.Types.ObjectId, ref: "Lecturer" }
}, { timestamps: true })

module.exports = mongoose.model("Course", courseSchema);




/*You have been assigned to develop a Student Management System API for an educational institution.
The institution wants to digitise its student records and academic management processes. The system should allow the institution to manage students, departments, courses, lecturers, and course registrations.
Your task is to develop a RESTful API using Node.js, Express.js, MongoDB and Mongoose.

Student Management (5 Endpoints)
Method Endpoint Description
POST /students Register a new student
GET /students Get all students
GET /students/:id Get a single student
PUT /students/:id Update student information
DELETE /students/:id Delete a student


Department Management (5 Endpoints)
Method Endpoint Description
POST /departments Create a department
GET /departments Get all departments
GET /departments/:id Get a single department
PUT /departments/:id Update department details
DELETE /departments/:id Delete a department


Course Management (5 Endpoints)
Method Endpoint Description
POST /courses Create a course
GET /courses Get all courses
GET /courses/:id Get a single course
PUT /courses/:id Update course details
DELETE /courses/:id Delete a course


Lecturer Management (5 Endpoints)
Method Endpoint Description
POST /lecturers Register a lecturer
GET /lecturers Get all lecturers
GET /lecturers/:id Get a single lecturer
PUT /lecturers/:id Update lecturer information
DELETE /lecturers/:id Delete a lecturer


Course Registration (5 Endpoints)
Method Endpoint Description
POST /registrations Register a student for a course
GET /registrations Get all course registrations
GET /registrations/:id Get a single registration
PUT /registrations/:id Update a course registration
DELETE /registrations/:id Delete a course registration*/