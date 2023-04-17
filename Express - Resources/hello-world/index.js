const express = require("express");
const app = express();

let messages = []

// middlewares 
// app.use()

app.use(express.json());

//Declare routes

app.get("/", (req, res, next) => {
  res.send("Hello from Backend");
});

app.get("/message",(req, res)=>{
  messages.push(req.query.id)
  // request.body.text
  res.send("Your message has been recieved!")
})

app.get("/getAllmessage",(req,res)=>{
res.send(messages)
})


app.post("/insert-message/:profile_id",(req,res)=>{
  req.params.profile_id
  console.log(req.body)
  res.send({"log": "message recieved"})
  })


app.listen(5000, () => {
  console.log("Node api is running");
});