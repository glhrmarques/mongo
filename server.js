import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app  = express();
const PORT = 3001;

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONG_URI);
        console.log("mongoDB connected")
    } catch(error){
        console.log("connection to mongoDB failed");
    }
};

app.listen(PORT, () => console.log(`PORT connected http://localhost:${PORT}`))