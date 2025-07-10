const { UserModel } = require("../models/user.model")
const validator = require("validator")
const userValidate = async (req, res, next) => {
    const {email, password} = req.body
    try {

        const user = await UserModel.findOne({email})
        if(user) return res.status(400).json({success : false, msg : "User Already exists"})
        
        if (password.length < 8) return res.status(400).json({ success: false, msg: "Password must be at least 8 characters" });

        if (!validator.isStrongPassword(password)) return res.status(400).json({ success: false, msg: "Please enter a strong password" });
        
        next()
    } catch (error) {
        return res.status(500).json({success : false, msg : error.message})
    }
}

module.exports = { userValidate}