import express from "express";
import {logicController} from "../controllers/index.js"

const router = express.Router();

router.post("/logic",logicController);

export default router;