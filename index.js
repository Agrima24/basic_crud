const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const crudModelSchema = require("./model/crudModelSchema");
const user = require('./router/userRouter')
require('./model/config');
const port = 5000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use('/',user)

app.listen(port, () => {
  console.log(`server is running on port no ${port}`);
});
