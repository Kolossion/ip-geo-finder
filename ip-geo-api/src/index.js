require('dotenv').config()
const app = require('./app');

console.log("PORT: ", process.env.PORT)
const port = process.env.PORT || 4000;
const server = app.listen(port);

console.log("LISTENING ON PORT", port);