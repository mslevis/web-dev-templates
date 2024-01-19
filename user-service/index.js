const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`User service is running on port ${port}.`);
});
