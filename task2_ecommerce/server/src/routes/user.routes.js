import express from "express";
import {showProducts,postUserProduct,getProduct,deleteUserProduct, getUserCartProduct, getUserOrderProduct} from "../controllers/index.js";
import {authenticateLogin} from "../middlewares/index.js"

const router = express.Router();

router.route("/product").get(showProducts);
router.route("/product/:id").get(getProduct);
router.route("/cart").get(authenticateLogin,getUserCartProduct);
router.route("/cart/:id").patch(authenticateLogin,postUserProduct);
router.route("/cart/delete/:id").patch(authenticateLogin,deleteUserProduct);
router.route("/order",authenticateLogin,getUserOrderProduct);

export default router;
