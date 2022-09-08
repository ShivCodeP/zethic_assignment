import express from "express";
import {logicrouter} from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());

app.use("",logicrouter);

export default app;