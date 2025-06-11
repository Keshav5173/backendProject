import dotenv from "dotenv"
import express from "express"
import { connectDb } from "./db/index.js";

dotenv.config({
    path: "./env"
})
const app = express();


connectDb()
app.on("error", (error)=>{
    console.log("Error: ",(error));
    throw error;
})
app.listen(process.env.PORT, ()=>{
    console.log(`App is listining on port ${process.env.PORT} `); 
})
    