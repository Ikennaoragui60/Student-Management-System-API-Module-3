const env = require("dotenv");
env.config();
const express = require("express");
require("./db");

const app = express(); 


app.use(express.json());
app.use("/students", require("./routes/studentRoutes"))
app.use("/departments", require("./routes/departmentRoutes"))
app.use("/courses", require("./routes/courseRoutes"))
app.use("/lecturers", require("./routes/lecturerRoutes"))
app.use("/registration", require("./routes/registrationRoutes"))

app.get("/",(req,res)=>{res.send("Hello my fellow Programmer, Hope we are all doing great today, well, we were given a project on Student Management System API")});

app.listen(2027,()=>{console.log("My app is running on port 2027")})