const User = require('../models/User');
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();


// sendotp
exports.sendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        // check if user already exists
        const checkUserExists = await User.findOne({ email });

        if (checkUserExists) {
            return res.status(401).json({
                success: false,
                message: "User already exists",
            });
        }

        // generate otp
        let otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });

        console.log("OTP generated - >", otp);

        // check unique otp or not
        let result = await OTP.findOne({ otp });

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            result = await OTP.findOne({ otp });
        }

        const otpPayload = { email, otp };

        // create an entry in db
        const createOtpEntry = await OTP.create(otpPayload);
        console.log(createOtpEntry);

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to send message",
        });
    }
};

// signup
exports.signup = async (req, res) => {
    try {
        // data fetch
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp,
        } = req.body;

        // validation
        if (
            [firstName, lastName, email, password, confirmPassword, otp].some(
                (field) => !field || field.trim() === ""
            )
        ) {
            return res.status(403).json({
                success: false,
                message: "Please fill all fields",
            });
        }

        // match password and confirm password
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        // check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // find most recent OTP for user
        const recentOTP = await OTP.findOne({ email }).sort({ createdAt: -1 });
        
        // validate OTP
        if (!recentOTP) {
            return res.status(400).json({
                success: false,
                message: "OTP not found",
            });
        } else if (otp !== recentOTP.otp) {
            // invalid OTP
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // save user data
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            accountType,
            contactNumber,
            additionalDetails: null, // Adjust this based on your schema
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
        });

        // return response
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered",
            error,
        });
    }
};

// login
exports.login = async (req, res) => {
    try {
        // get data
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all fields",
            });
        }

        // user check exist or not
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist",
            });
        }

        // generate Jwt, after password matching
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const payload = {
                email: user.email,
                id: user._id,
                accountType: user.accountType,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            // create cookie and send message
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Secure only in production
            };
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Login Failure",
            error: error.message,
        });
    }
};

// change password
exports.changePassword = async (req, res) => {
    try {
        // get data
        const { email, oldPassword, newPassword, confirmPassword } = req.body;
        // get user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        // compare passwords
        const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Old password is incorrect",
            });
        }
        // validate new password
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "New passwords do not match",
            });
        }
        // hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        // update password in db
        user.password = hashedPassword;
        await user.save();
        // send email or return response
        res.status(200).json({
            success: true,
            message: "Password changed successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to change password",
        });
    }
};
