const express = require("express");
const { registerUser, loginUser , currentUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/register",registerUser);


router.post("/login",loginUser);


router.get("/currentInfo",currentUser);


module.exports = router