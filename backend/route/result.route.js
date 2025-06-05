import express from "express";
import { getResults, getResultByPRN } from "../controller/result.controller.js";


const router = express.Router();

router.get("/results", getResults);
router.get("/results/:prn", getResultByPRN);

export default router;