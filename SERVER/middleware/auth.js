const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

//auth
exports.auth = async(req, res, next) =>{
    try {
        let token;
        if(req.cookie.token){
            token = req.cookie.token;
        }
        else if(req.body.token){
            token = req.body.token;
        }
        else if(req.header("Authorization").replace("Bearer", "")){
            token = req.header("Authorization").replace("Bearer", "");
        }

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token not found",
            })
        }

        //verify token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode)
            req.user = decode;
        
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "token is invalid",
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong",
        })
    }
}

// student
exports.isStudent = async(req, res, next)=>{
    try {
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for student",
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "User role cannot be verified"
        })
    }
}
// instructor
exports.isInstructor = async(req, res, next)=>{
    try {
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Instructor",
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "User role cannot be verified"
        })
    }
}
//admin
exports.isAdmin = async(req, res, next)=>{
    try {
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin",
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "User role cannot be verified"
        })
    }
}