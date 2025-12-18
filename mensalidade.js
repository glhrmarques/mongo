import mongoose from "mongoose";

const mensalidade = new mongoose.Schema({
    value: Number,
    name: String
});

export default mongoose.model("mensalidades", mensalidade)