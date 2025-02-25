
import mongoose from "mongoose";

async function connectDB() {
    
    if (mongoose.connection?.readyState) {
        console.log("Already connected to DB");
        return;
    }
        // Connect DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
}

export default connectDB;