const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/meridian-and-oak.html");
});

// or serve the whole folder as static:
// app.use(express.static(__dirname));

app.listen(port, () => console.log(`Listening on ${port}`));
