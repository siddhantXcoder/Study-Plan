const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender:{
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
    },
    dateOfBirth:{
        type: String,
    },
    about:{
        type: String,
        trim: true,
    },
    contactNumber:{
        type: Number,
        trim: true,
    },
    address:{
        type: String,
    }
},{timestamps: true});

module.exports = mongoose.model("Profile", profileSchema);