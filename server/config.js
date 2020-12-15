const dotenv = require("dotenv");


dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:  'mongodb://localhost/pizza',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret00123',

};