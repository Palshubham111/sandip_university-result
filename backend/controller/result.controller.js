import Result from '../models/result.model.js';

export const getResults = async (req, res) => {
    try {
        const results = await Result.find();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getResultByPRN = async (req, res) => {
    try {
        const { prn } = req.params;
        const { dob } = req.query;
        
        const result = await Result.findOne({ prn, dob });
        
        if (!result) {
            return res.status(404).json({ message: "Invalid PRN or Date of Birth" });
        }
        
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};






