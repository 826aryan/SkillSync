const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

mongoose.connect('mongodb+srv://826aryan:Bimmi%4019721968@cluster0.rxsod.mongodb.net/couse_selling_app');
app.use(express.json());

// Routes
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

// Serve React frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
username : String,
password: String,
purchasedcourses : [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Course'
}]
});

const CouseSchema = new mongoose.Schema({
    title: String,
    description : String,
    imagelink:  String,
    price: String

});

const admin = mongoose.model('admin',AdminSchema);
const user = mongoose.model('user',UserSchema);
const course = mongoose.model('course', CouseSchema);


module.exports ={
    admin,
    user,
    course
}