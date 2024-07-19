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

// const pool = new Pool({
//   user: process.env.LOCAL_USER,
//   host: process.env.LOCAL_HOST,
//   database: process.env.LOCAL_DATABASE,
//   password: process.env.LOCAL_PASSWORD,
//   port: process.env.LOCAL_PORT,
// });

module.exports = pool;
