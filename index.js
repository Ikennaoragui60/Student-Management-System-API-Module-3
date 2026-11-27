const env = require("dotenv");
env.config();
const express = require("express");
const PORT = 2027
require("./db");
const app = express();


app.use(express.json()); 
app.use("/students", require("./routes/studentRoutes"))
app.use("/departments", require("./routes/departmentRoutes"))
app.use("/courses", require("./routes/courseRoutes"))
app.use("/lecturers", require("./routes/lecturerRoutes"))
app.use("/registrations", require("./routes/registrationRoutes"))

app.get("/", (req, res) => { res.send("Hello my fellow Programmer, Hope we are all doing great today, well, we were given a project on Student Management System API") });

app.listen(PORT, () => { console.log("My app is running on port 2027") })