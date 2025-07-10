const express = require("express");
const {
  uploads,
  addCandidate,
  getCandidate,
  updateCandidate,
  deleteCandidate
} = require("../controllers/candidate.controller");
const { CandidateValidate } = require("../middlewares/candidateValidate.middleware");
const { auth } = require("../middlewares/auth.middleware");
const candidateRouter = express.Router();

candidateRouter.post("/add", uploads.single('resume'), CandidateValidate, auth, addCandidate);
candidateRouter.get("/get", auth, getCandidate);
candidateRouter.put("/update/:id/status", auth, updateCandidate);
candidateRouter.delete("/delete/:id", auth, deleteCandidate);

module.exports = { candidateRouter };

