import mongoose from "mongoose"
import { db_name } from "../constants.js";

export const connectDb = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        console.log(`\n Sucessfully connected to mongodb!!! DB HOST ${connectionInstance.connection.host}`);
    }catch(err){
        console.error("Mongo db connection error: ",err);
        process.exit(1)
    }
}