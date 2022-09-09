import express from "express";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json());

app.get("/",(req,res) => {
    return res.send("<h1>E-commerce Backend</h1>")
})


export default app;