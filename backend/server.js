import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import productRoutes from "./routes/product.route.js"
const app=express();
dotenv.config();

app.use(express.json()); //to use json for request


app.use("/api/products",productRoutes)


app.listen(3000,()=>{
connectDB();
    console.log("server started at http://localhost:3000");

})

