const { body } = require("express-validator")
const { CandidateModel } = require("../models/candidate.model")

const CandidateValidate = async (req, res, next) => {
    const {email} = req.body
    try {
        const candidate = await CandidateModel.findOne({email : email})
        if(candidate) return res.status(404).json({success : false , msg : "Candidate already exists"})
        next()
    } catch (error) {
        return res.status(400).json({success : false , msg : error.message})
    }
}

module.exports = { CandidateValidate }