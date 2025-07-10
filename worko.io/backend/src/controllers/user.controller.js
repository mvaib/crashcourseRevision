const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
require("dotenv").config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(+process.env.SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);
    if (!hash) return res.status(400).json({ success: false, msg: "Error in hashing password" });

    const newUser = new UserModel({ name, email, password: hash });
    await newUser.save();

    return res.status(201).json({ success: true, msg: "User created successfully!" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ success: false, msg: "User not found!" });

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) return res.status(400).json({ success: false, msg: "Invalid password!" });

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "3d" });
    if (!token) return res.status(400).json({ success: false, msg: "Error assigning token" });

    return res.status(200).json({ success: true, msg: "Login successful!", token });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = { registerUser, loginUser };

