const express = require("express")
const { userValidate } = require("../middlewares/userValidate.middleware")
const { registerUser, loginUser } = require("../controllers/user.controller")
const userRouter = express.Router()

userRouter.post("/register", userValidate, registerUser)
userRouter.post("/login", loginUser)

module.exports = {userRouter}
