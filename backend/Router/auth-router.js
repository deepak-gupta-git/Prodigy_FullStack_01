const express = require("express")
const router = express.Router();
const authController = require("../Controllers/auth-controller")


router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.login);


module.exports = router;