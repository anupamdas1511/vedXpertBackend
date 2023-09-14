import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const {MONGO_URL} = process.env

// Couldn't find mongo url
if (!MONGO_URL) {
    console.log("Couldn't find mongo url. Exiting...");
    process.exit(0)
}

export const connect = () => {
    // connect to database
    mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("Successfully connected to database", MONGO_URL);
    })
    .catch(err => console.log(err))
}