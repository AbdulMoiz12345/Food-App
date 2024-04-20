const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.listen(8000,()=>{
    console.log("server is on");
 })
mongoose.connect('mongodb://127.0.0.1:27017/item', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is connected");
}).catch(error => {
    console.error("Database connection error:", error);
});

const messscheme = new mongoose.Schema({
       email:String,
       password:String,
       address:String
 });
 const messscheme1 = new mongoose.Schema({
    CategoryName: String,
        name: String,
        img:String ,
        options: [
            {
                half:String,
                full:String
            }
        ],
        description: String
});
const message=mongoose.model("login",messscheme);
const message1=mongoose.model("message",messscheme1);
 app.post("/register",async(req,res)=>{
    const{email,password,address}=req.body
    await message.create({email,password,address})
 })
 app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    const check=await message.findOne({email:email,password:password})
    if(check){
        res.json("confirm")
    }
    else{
        res.json("not confirm")
    }
 })
 app.get("/getdata", async (req, res) => {
    try {
      const allData = await message1.find({}).exec();
      res.json(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "An error occurred while fetching data" });
    }
  });
  