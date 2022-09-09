import express from "express";
import {showProducts,postUserProduct,getProduct,deleteUserProduct} from "../controllers/index.js";
import {authenticateLogin} from "../middlewares/index.js"

const router = express.Router();

router.route("/product").get(showProducts);
router.route("/showproduct").get(getProduct);
router.route("/cart").patch(authenticateLogin,postUserProduct);
router.route("/cart/delete").patch(authenticateLogin,deleteUserProduct);

export default router;
