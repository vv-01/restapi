const express = require("express");
const userRoutes = require("./src/users/routes");
const userTypeRoutes = require("./src/user_types/routes");
const servicesRoutes = require("./src/services/routes");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/userTypes", userTypeRoutes);

app.use("/api/v1/services", servicesRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
