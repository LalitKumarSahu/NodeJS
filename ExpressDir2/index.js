
// const express = require('express')
// const app = express();

const { request } = require("express");

// //console.dir(app);
// let port = 3000;

// app.listen(port, () => {
//   console.log(` app is listening on port ${port}`)
// });

//--------------------------------------->
// app.use((req,res) =>{
//   //console.log(req);
//   console.log("request received");
//   // res.send("this is a basic response");

//--------------------------------------->

//   // res.send({
//   //   name:"apple",
//   //   color:"red",
//   // });
//--------------------------------------->

// let code = "<h1>fruits</h1><ul><li>apple</li><li>mango</li><li>orange</li></ul>";
// res.send(code);
// });

//--------------------------------------->

// const express = require('express');
// const app = express();

// let port = 3000;

// app.listen(port , () =>{
//   console.log(`app is listining at port ${port}`);
// });
// app.get("/",(req,res) =>{
//   res.send("hello, you contacted root path");
// });
// app.get("/apple",(re, res) =>{
//    res.send("you contacted apple path");
// });
// app.get("/orange",(re, res) =>{
//   res.send("you contacted ornage path");
// });
// app.get("*",(re, res) =>{
//   res.send("this path is not exist");
// });
// app.post("/",(re, res) =>{
//   res.send("you sent a post req to root");
// });

////--------------------------------------->

const express = require('express');
const app = express();

let port = 3000;

app.listen(port , () =>{
  console.log(`app is listining at port ${port}`);
});

app.get("/",(req,res) =>{
  res.send("hello, you contacted root path");
});

app.get("/:username",(req,res) =>{
  console.log(req.params);
  res.send("hello, you contacted username ");
});

app.get("/:username/:id",(req,res) =>{
  //console.log(req.params);
  let{username, id} = req.params
  res.send(`Welcome to the page of @${username}` );
})