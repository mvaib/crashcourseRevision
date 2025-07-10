const multer = require("multer")
const { validationResult } = require("express-validator");
const { CandidateModel } = require("../models/candidate.model");

const storage = multer.diskStorage({
    destination : 'uploads',
    filename : (_,file,cb) => cb(null, Date.now() + '-' + file.originalname)
});

const uploads = multer({
    storage,
    fileFilter : (_,file, cb) => {
        if(file.mimetype === 'application/pdf') cb(null, true);
        else cb(new Error("Only PDF files are allowed!"));
    }
});

const addCandidate= async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors : errors.array()});

    const {name, email, phone, jobTitle} = req.body;
    const userId = req.user?.userId; // Always use userId from JWT
    const resumeUrl = req.file ? `/uploads/${req.file.filename}` : '';

    try {
        const candidate = new CandidateModel({name, email, phone, jobTitle, resumeUrl, userId})
        await candidate.save();
        return res.status(201).json({success : true, msg : "candidate add successfully!"})
    } catch (error) {
        return res.status(500).json({success : false, msg : error.message})
    }
}

const getCandidate = async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) return res.status(401).json({ success: false, msg: 'Unauthorized' });
        const candidates = await CandidateModel.find({ userId });
        if (candidates.length === 0) return res.status(200).json({ success: true, msg: "No Candidates Found" });
        return res.status(200).json({ success: true, candidates });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

const updateCandidate = async (req, res) => {
    const id = req.params.id;
    const userId = req.user?.userId;
    if (!id) {
        return res.status(400).json({ success: false, msg: "Candidate ID is missing in the request" });
    }
    try {
        // Ensure candidate belongs to user
        const candidate = await CandidateModel.findOne({ _id: id, userId });
        if (!candidate) {
            return res.status(403).json({ success: false, msg: "You are not authorized to update this candidate." });
        }
        candidate.status = req.body.status;
        await candidate.save();
        return res.status(200).json({ success: true, msg: "Candidate Updated Successfully!", candidate });
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message });
    }
};



const deleteCandidate = async (req, res) => {
    const id = req.params.id;
    const userId = req.user?.userId;
    if (!id) {
        return res.status(400).json({ success: false, msg: "Candidate ID is missing in the request" });
    }
    try {
        // Ensure candidate belongs to user
        const candidate = await CandidateModel.findOneAndDelete({ _id: id, userId });
        if (!candidate) {
            return res.status(403).json({ success: false, msg: "You are not authorized to delete this candidate." });
        }
        return res.status(200).json({ success: true, msg: "Candidate Deleted Successfully!", candidate });
    } catch (error) {
        return res.status(400).json({ success: false, msg: error.message });
    }
};


module.exports = { addCandidate, getCandidate, updateCandidate , uploads, deleteCandidate}

