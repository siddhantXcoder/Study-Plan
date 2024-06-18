const mongoose = require('mongoose');   
const mailSender = require("../utils/mailSender");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    otp:{
        type:String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        expires: 5*60, // Otp will be valid for 5 minutes
    }
}, {timestamps:true});

//function to send email
async function emailVerification(email, otp){
    try {
        const mailResponse = await mailSender(email, "Verfication for email", otp);
        console.log("Mail response -> ", mailResponse);
    } catch (error) {
        console.log("At email verfication -> ", error);
        throw error;
    }
}

otpSchema.pre("save", async function(next){
    await emailVerification(this.email, this.otp);
    next();
});

module.exports = mongoose.model("OTP", otpSchema);