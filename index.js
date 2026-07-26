const express = require('express');
const app = express();

app.get("/about", (req, res) => res.sendFile(__dirname + "/routes/about.html"));
app.get("/contact-me", (req, res) => res.sendFile(__dirname + "/routes/contact-me.html"));
app.get("/", (req, res) => res.sendFile(__dirname + "/routes/index.html"));
app.get("*error", (req, res) => {
    if(res.status(404)){
        res.sendFile(__dirname + "/routes/404.html")
    }
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    if(error == 404){
        console.log("hi");
    }
    throw error;
  }
});