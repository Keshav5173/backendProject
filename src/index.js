import dotenv from "dotenv"
import express from "express"
import { connectDb } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})
// const app = express();


connectDb()
.then(()=>{
    let port = process.env.PORT || 8000;
    app.listen(port, ()=>{
        console.log(`App is listining on port ${port} `); 
    })
})
.catch((err)=>{
    console.error("Mongo db connection error: ", err);
})




    