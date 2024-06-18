const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Error while connecting to DB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
