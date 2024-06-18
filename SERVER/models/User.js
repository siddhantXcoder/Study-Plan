const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim:true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    accountType:{
        type: String,
        enum: ["Admin","Student", "Instructor"],
        required: true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.Mixed, // adjust this based on your needs
        default: null
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course',
    }],
    image: {
        type: String,
        required: false // assuming this is optional
    },
    token:{
        type:String
    },
    resetPasswordExpires:{
        type: Date,
    },
    courseProgress:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'CourseProgress',
    }]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     accountType: {
//         type: String,
//         enum: ['STUDENT', 'INSTRUCTOR'], // adjust according to your account types
//         required: true
//     },
//     contactNumber: {
//         type: String,
//         required: false // make sure this is not a required field if it's optional
//     },
//     additionalDetails: {
//         type: mongoose.Schema.Types.Mixed, // adjust this based on your needs
//         default: null
//     },
//     image: {
//         type: String,
//         required: false // assuming this is optional
//     }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
