require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const configViewEngine = require('./src/config/viewEngine');
const initWebRoutes   = require('./src/route/web');

const app = express();

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine
configViewEngine(app);

// routes
initWebRoutes(app);

// (tuỳ slide) thử kết nối DB thủ công
// const connectDB = require('./src/config/connectDB');
// connectDB();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
