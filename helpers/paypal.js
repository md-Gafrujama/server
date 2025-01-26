const paypal = require("paypal-rest-sdk");
require("dotenv").config(); // Load environment variables from .env file

paypal.configure({
  mode: process.env.PAYPAL_MODE, // sandbox or live
  client_id: process.env.PAYPAL_CLIENT_ID, // Your PayPal Client ID
  client_secret: process.env.PAYPAL_CLIENT_SECRET, // Your PayPal Client Secret
});

module.exports = paypal;
