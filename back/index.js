const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World!")
    app.get("/", (req,res)=>{
        res.send("Hello World!")
    })
    
    app.get("/about", (req, res)=>{
      res.send("About route")
    })
})

app.listen(3000, () => console.log("Server is listening to port 3000"))
aaa
