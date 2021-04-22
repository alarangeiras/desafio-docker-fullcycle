const mysql      = require('mysql');

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbSchema = process.env.DB_SCHEMA;
const dbPoolSize = process.env.DB_POOL_SIZE;

const pool  = mysql.createPool({
  connectionLimit : dbPoolSize || 10,
  host            : dbHost,
  port            : dbPort,
  user            : dbUser,
  password        : dbPass,
  database        : dbSchema
});

module.exports = pool;