// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get("/api", (req, res) => {
  res.json({ message: "API Endpoints:\n1. Sign In\n2. Sign Up" });
  console.log("API Endpoints:\n1. Sign In\n2. Sign Up");
});
// Todo: complete signup

app.post("/signup", (req, res) => {
  console.log(req.body);
  //var c=req.body;
  res.json(req.body);
  //res.json({ message: "Hello from server!" });
});

// Todo: Sign In
app.post("/signin", (req, res) => {
  console.log(req.body);
  var c = req.body.email;
  var d = req.body.password;
  var re = { flag: true };
  res.json(re);
  console.log(c + "\n" + d);
  //res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
