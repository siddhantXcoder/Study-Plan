const express = require('express');
const { login, signup, sendOTP } = require('../controllers/Auth');
const router = express.Router();
const { auth } = require("../middleware/auth");

// Define routes here
router.post('/login', login);
router.post('/signup', signup);
router.post('/sendotp', sendOTP);

module.exports = router;
