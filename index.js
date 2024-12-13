import express from "express";

const app = express();

app.get("/", (req,res)=>{
    res.json({ status: "working" })
})

const port = 5001;

app.listen(port, function(){
    console.log(`Server is started at port ${port}`)
})