const express = require('express');
const path = require('path')
const app = express();
const PORT = 4545;

app.listen(PORT, function () {
  console.log('listening on ' + PORT)
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"))
})


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"))
})
