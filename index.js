const express = require("express");
const app = express();
var port = process.env.PORT || 3000;
app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(port);
