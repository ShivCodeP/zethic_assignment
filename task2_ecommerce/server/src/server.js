import "dotenv/config"
import app from "./index.js";
import {connect} from "./configs/index.js";

const Port = process.env.PORT || 4000;

app.listen(Port,async () => {
    try {
        await connect();

        console.log("Listening on Port",Port)
        
    } catch (error) {
        console.log("Error",error)
    }
})