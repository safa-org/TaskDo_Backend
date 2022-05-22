const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const cors = require("cors");
app.use(cors());

app.get("/test",(req,res)=>{
  res.send('testing')
})

const port = process.env.PORT || 5000;
const SignupRouter = require("./src/signup/signup.route");
const LoginRouter = require("./src/login/login.router");
const { authenticateToken } = require("./src/login/login.service");

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://sahulhameed:tyz7lfNL3VzPSyFr@cluster0.a2if2.mongodb.net/SafaDb?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db is connected"))
  .catch((err) => console.log(err, "it has an error"));

app.use("/register", SignupRouter);
app.use("/login", LoginRouter);

app.listen(port, () => [
  console.log(`server starts at http://localhost:${port}`),
]);
