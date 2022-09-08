import app from "./index.js";

const Port = process.env.PORT || 4000;

app.listen(Port,() => {
    console.log("Listening on port",Port)
})
