import dotenv from "dotenv"
import express from "express"
import { connectDb } from "./db/index.js";

dotenv.config({
    path: "./env"
})
const app = express();


connectDb()
.then(()=>{
    let port = process.env.PORT || 3000;
    app.listen(port, ()=>{
        console.log(`App is listining on port ${port} `); 
    })
})
.catch((err)=>{
    console.error("Mongo db connection error: ", err);
})




    