const express = require("express");
const app = express();
const port = 3000; // You can change the port as needed

app.get("/", (req, res) => {
  // Return an HTML <h1> tag
  res.send("<h1>Hello, World!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
