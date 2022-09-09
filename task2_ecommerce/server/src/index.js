import express from "express";
import cors from "cors";
import {authRoutes,userRoutes,checkoutRoutes} from './routes/index.js'

const app = express();

app.use(cors())
app.use(express.json());

app.get("/",(req,res) => {
    return res.send("<h1>E-commerce Backend</h1>")
})

app.use("/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/checkout",checkoutRoutes);

export default app;