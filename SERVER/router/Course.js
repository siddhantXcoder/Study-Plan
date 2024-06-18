const express = require("express");
const router = express.Router();

const {showAllCategory} = require("../controllers/category");

router.get("/showAllCategories", showAllCategory)
