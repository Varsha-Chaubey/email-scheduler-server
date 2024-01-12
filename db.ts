import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        let URL = process.env.PROD ==="PROD_TRUE"? process.env.PRODDBURL :process.env.DBURL;
        const resp=await mongoose.connect(`${URL}`);
       console.log(resp)
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err);
        process.exit(1); 
    }
};
