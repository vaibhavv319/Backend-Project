//require('dotenv').config()

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config ({
    path : './env' 
})


connectDB ()



/*
import express from "express"
const app = express()

function connectDB () {}

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        app.on("error", (error) => {
            console.log("ERRR" , error)
            throw error
        })

        app.listen(process.env.PORT , () => {
            console.log(`App id listening on port ${process.env/PORT}`);
        }) 
    } catch (error) {
        console.error("ERROR: " , error)
        throw err 
    }
})()
*/
