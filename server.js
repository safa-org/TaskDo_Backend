const express = require("express");
const app = express();
const port = 000;

app.get("/", (req, res) => {
  res.send(" Bismillah");
});

app.listen(port, () => {
  console.log("server started successfully");
});
