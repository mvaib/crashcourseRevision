const express = require('express');
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require('./src/config/db.config');
const { candidateRouter } = require('./src/routes/candidate.route');
const { userRouter } = require('./src/routes/user.route');

const startServer = async () => {
  try {
    await connectDB();

    const app = express();
    const PORT = process.env.PORT || 8000;

    app.use(express.json());

    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true
      }));
      
    // app.options('*', cors({
    //     origin: 'http://localhost:5173',
    //     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    //     credentials: true
    // }));
      

    app.use("/api/candidate", candidateRouter);
    app.use("/api/user", userRouter);

    app.get("/", (req, res) => {
      res.send("server is running");
    });

    app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`failed to start Server : ${error.message}`);
  }
};

startServer();

