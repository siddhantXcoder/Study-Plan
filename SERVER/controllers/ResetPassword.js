const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const brcypt = require("brcypt")

// reset password token
exports.resetPasswordToken = async (req, res) => {
    try {
        //get email from re body
        const {email} = req.body;
        //check user for this email, email validation
        const user = await User.findOne({email:email});
         if (!user){
            return res.status(400).json({
                success: false,
                message :"Email not found",
            })
         }
        //generate token 
        const token = crypto.randomUUID();
        //update user by adding token and expiration time
        const userDetails = await User.findByIdAndUpdate(
            {email:email},
            {
                $set:{
                    token:token,
                    resetPasswordExpires: Date.now() + 50*60*1000,
                }
            },
            {new: true}.select("-password")
        )
        //create url
        const url = `https://localhost:3000/update-password/${token}`;
        //send mail containing url
        await mailSender(email, "Password resent link", `Password ${url}`);

        return res.json({
            success: true,
            message:"Email sent successfully"
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Something went worng while sending email"
        })
    }
}

//reset password

exports.resetPassword = async (req, res)=>{
   try {
     //data fetch
     const {password, confirmPassword, token} = req.body;
     //validation
     if(password !== confirmPassword){
         return  res.status(400).json({
             success: false,
             message: "Incorrect password",
         })
     }
     //get user details
     const user = await User.findOne({token: token});
     // if no entry - invalid
     if(!user){
         return res.json({
             success: false,
             messge: "Token is Invalid",
         })
     }
     //token time
     if(userDetails.resetPasswordExpires < Date.now()){
         return res.json({
             success: false,
             message:"Token is expired, please regenerate your token"
         });
     }
     //hashpassword
     const hashedPassword = await brcypt.hash(password, 12);
 
     //updatepassword
     await User.findOneAndUpdate(
         {token: token},
         {
             $set:{
                 password: hashedPassword,
             }
         },
         {new : true}.select("-password"),
     )
     //return response
     return res.status(200).json({
         success: true,
         message: "Password reset successfull",
     })
   } catch (error) {
    return res.json({
        success: false,
        message: "Fail to update password",
    })
   }
}

