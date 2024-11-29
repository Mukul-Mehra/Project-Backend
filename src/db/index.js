import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
     const connResponse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`mongoDB connected !! DB HOST : ${connResponse.connection.host}`);
     
        
    } catch (error) {
        console.error(error);
        process.exit(1)
        
    }
}

export default connectDB