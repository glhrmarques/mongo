import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import mensalidade from "./mensalidade.js";

dotenv.config();

const app  = express();
const PORT = 3001;

//middleware
app.use(express.json())

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONG_URI);
        console.log("mongoDB connected")
    } catch(error){
        console.log("connection to mongoDB failed");
    }
};

await connectDB()

//create
app.post("/mensalidades", async (req,res) => {
    try {
        const novaMensalidade = await mensalidade.create(req.body);
        res.json(novaMensalidade);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//read
app.get("/mensalidades", async (req,res) => {
    try {
        const allMensalidades = await mensalidade.find();
        res.json(allMensalidades)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//update
app.put("/mensalidades/:id", async (req,res) => {
    try {
        const newValue = await mensalidade.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(newValue)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
});


//delete
app.delete("/mensalidades/:id", async (req,res) => {
    try {
        const deleteMensalidade = await mensalidade.findByIdAndDelete(
            req.params.id
        );
        res.json(deleteMensalidade)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    });




app.listen(PORT, () => console.log(`PORT connected http://localhost:${PORT}`))