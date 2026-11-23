// step 1 require mongoose
const mongoose = require("mongoose")

const databaseurl = process.env.databaseurl

// step 2, connect mongoose to db.js
mongoose.connect(databaseurl).then(() => console.log("database connection established")).catch((err) => console.log("Unable to connect to database due to " + err))