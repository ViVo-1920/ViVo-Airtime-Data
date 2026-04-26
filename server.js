const express= require("express");
const bodyParser= require("body-parser");
const app= express();

app.use(bodyParser.json());

app.post("/buy",(req, res)=>{
  const{phone, network, amount}= req.body;

  console.log("Buying airtime:", phone, network, amount);

  //⚠️Here is where real API will go 
  res.json({
   success: true,
   message:'"Airtime purchase successful!"
  });
});

app.listen(3000,() =>{
  console.log("Server running on port 3000");
});
