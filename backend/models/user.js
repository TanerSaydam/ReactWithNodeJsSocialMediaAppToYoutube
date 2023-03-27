const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    password: String,
    avatar: Object
});

const User = mongoose.model("User", userSchema);

module.exports = User;