const Pool = require("pg").Pool;

require("dotenv").config();

const pool = new Pool({
  user: process.env.CLOUD_USER,
  host: process.env.CLOUD_HOST,
  database: process.env.CLOUD_DATABASE,
  password: process.env.CLOUD_PASSWORD,
  port: process.env.CLOUD_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
