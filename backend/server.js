import express from "express"
import dotenv from "dotenv"
import path from "path"
import {connectDB} from "./config/db.js"
import productRoutes from "./routes/product.route.js"
const app=express();
dotenv.config();

app.use(express.json()); //to use json for request


app.use("/api/products",productRoutes)
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
app.listen(3000,()=>{
connectDB();
    console.log("server started at http://localhost:3000");

})


