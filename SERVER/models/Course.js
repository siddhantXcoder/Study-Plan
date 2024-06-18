const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required: true,
        trim:true,
    },
    courseDescription:{
        type: String,
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User", //this is a reference to the User
        required: true,
    },
    aboutCourse:{
        type: String,
    },
    courseContent:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Section"
    }],
    rateAndReview:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RateAndReview",
        }
    ],
    price:{
        type: Number,
    },
    thumbnail:{
        type: String,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category",
    },
    tag:{
        type: String,
    },
    studentEnrolled:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {timestamps: true});

module.exports = mongoose.model("Course", courseSchema);