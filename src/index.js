// require('dotenv').config({"path":'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => (
        
        
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on port ${process.env.PORT}`);
            
        })
        
    ))
    .catch((err) => {
        console.log("mongoDB connection Failed !!!", err);
        
})




/*
import express from "express"
const app = express();

(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.error(err);
            throw err
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`your port is ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error(error);
        throw err


    }
})()
    */