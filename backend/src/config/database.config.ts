import mongoose from "mongoose";
import env from "./environment.config";

const connectDb = async ()=>{
    try {
        
        const mongo = await mongoose.connect(env.db ?? "");

        console.log(`database connected to ${mongo.connection.host}`);

    } catch (error) {
        console.log('ERROR',error);
    }
}


export default connectDb ;