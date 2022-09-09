import express from "express";
import {checkout,orderDetail} from "../controllers/index.js"
import {authenticateLogin} from "../middlewares/index.js"

const router = express.Router();

router.route("").post(authenticateLogin,checkout).get(authenticateLogin,orderDetail);

export default router;