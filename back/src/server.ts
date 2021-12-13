console.log("About to start the server...");
const express = require("express");
const serveIndex = require("serve-index");
const app = express();
const port: number = 3000;
const publicDir = "public";

app.use((req, res, next) => {
  console.log("req: ", req.url, this);
  next();
});

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at
  
  http://localhost:${port}`);
});