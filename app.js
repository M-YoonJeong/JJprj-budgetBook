// express 가져오기
const express = require("express");
const app = express();
const port = 8000; // port number - ncp에서 열었던 포트 번호

app.get("/", (req, res) => {
  res.send("하이");
});

app.listen(port, () => {
  console.log("8000!");
});
