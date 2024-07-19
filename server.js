const express = require("express");
const userRoutes = require("./src/users/routes");

require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/users", userRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
