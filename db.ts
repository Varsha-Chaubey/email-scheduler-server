import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        let URL = process.env.DBURL;
        await mongoose.connect(`${URL}`);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err);
        process.exit(1); 
    }
};
