const express = require("express");
const app = express();
app.get("/",(req,res)=>{res.sendFile("./index.html")});
app.listen(8080);
