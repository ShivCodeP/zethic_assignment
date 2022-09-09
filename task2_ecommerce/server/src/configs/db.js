import mongoose from "mongoose";

const MongoUrl = process.env.MONGO_URL;

const connect = async () => {
    return await mongoose.connect(MongoUrl);
}

export default connect;