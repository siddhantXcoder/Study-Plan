const mongoose = require("mongoose");

const rateAndReviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: "User",
    },
    rating:{
        type: Number,
        required: true,
    },
    review:{
        type: String,
        required: true,
    }
}, {timestamps:true});

module.exports = mongoose.model("RateAndReview", rateAndReviewSchema);