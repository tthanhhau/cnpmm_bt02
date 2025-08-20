const express = require('express');

const configViewEngine = (app) => {
  // static files
  app.use(express.static('./src/public'));
  // EJS
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
};

module.exports = configViewEngine;
