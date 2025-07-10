const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, msg: "Unauthorized" });
  }

  const actualToken = token.split(' ')[1];

  try {
    const decodedToken = jwt.verify(actualToken, process.env.SECRET_KEY);
    req.user = { userId: decodedToken.userId }; 
    next();
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

module.exports = { auth };
