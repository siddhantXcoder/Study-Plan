const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./router/User");
const courseRouter = require("./router/Course");
const fileUpload = require("express-fileupload");
const connectDB = require("./config/database");
const cloudinary = require("./config/cloudinary");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Middleware for the entire application
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/"
}));

// Connect to the database
connectDB();

// Connect to Cloudinary
cloudinary.cloudinaryConnect();

// Mount routes
app.use("/api/v1/auth", userRouter);
// app.use("/api/v1/course", courseRouter);  // Added missing leading slash

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Root route
app.get("/", (req, res) => {
  res.send('<h1>Hello</h1>');
});

// Activate server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

// Optional: Handle uncaught exceptions and promise rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
