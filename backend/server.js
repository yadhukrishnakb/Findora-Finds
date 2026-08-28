const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const cors = require("cors")
const productRoutes = require("./routes/productRoutes")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/",productRoutes)

const PORT = process.env.PORT || 3000

const connectDbAndStartServer = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        app.listen(PORT,() => console.log(`Server Started!`))
    }catch(err){
        console.log(`Server Error: ${err.message}`)
    }
}

connectDbAndStartServer()