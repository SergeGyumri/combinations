import express from "express";
import combinationsController from "../controllers/combinationsController.js";

import combinationSchema from "../middlewares/schemas/combinationSchema.js";
import validator from "../services/validator.js";
const router = express.Router();

router.post('/generate', validator(combinationSchema.generate), combinationsController.generate);

export default router;
