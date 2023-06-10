import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const connectMongo = async () => mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default connectMongo