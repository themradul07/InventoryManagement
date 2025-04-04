// const mongoose = require('mongoose');

// mongoose
// .connect('mongodb://127.0.0.1:27017/Inventory')
// .then(() => {
//     console.log("Working Connection Successful!!"); 
// })
// .catch((err) => {
//     console.log("Error Connection fail the reason is:" , err);
  
// })

// module.exports = mongoose.connection;


import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI

if (!MONGODB_URI) {
    throw new Error("Please define the MONGO_URI environment variable");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

global.mongoose = cached;
