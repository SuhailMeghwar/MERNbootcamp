const express = require("express");
const app = express();

let messages = []

//Declare routes

app.get("/", (req, res, next) => {
  res.send("Hello from Backend");
});

app.get("/message",(req, res)=>{
  messages.push(req.query.text)
  res.send("Your message has been recieved!")
})

app.get("/getAllmessage",(req,res)=>{
res.send(messages)
})



app.listen(5000, () => {
  console.log("Node api is running");
});