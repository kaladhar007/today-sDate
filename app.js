const express = require("express");
const app = express();
app.listen(3000);
app.get("/", (request, response) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

module.exports = app;
