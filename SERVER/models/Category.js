const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type:String,
    },
    course:{
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
    }
},{timestamps:true});

module.exports = mongoose.model("Category", categorySchema);