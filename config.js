const dotenv = require("dotenv");

dotenv.config();

const { TESTSERVER, PORT, CURRENTSERVER } = process.env;

module.exports = {
  port: PORT,
  testServer: TESTSERVER,
  server: CURRENTSERVER,
};
