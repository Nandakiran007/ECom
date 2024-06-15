const express=require("express");
const app=express();
const cors = require("cors");
const url=require("./url")
const userRouter=require("./routes/userRoutes")
const productRouter=require("./routes/productRoutes")
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT||8000;

mongoose
    .connect(url, { dbName: "nodedb" })
    .then(() => {
        console.log("mongo connection success");
    })
    .catch((err) => {
        console.log("connection failed", err);
    });
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/",userRouter);
app.use("/product",productRouter);
app.listen(PORT, () => {
    console.log(`listening on http:/127.0.0.1:${PORT}`);
});