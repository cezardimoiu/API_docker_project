const express = require('express');

const BooksEndpoint = require('./Books');

const Router = express.Router();

Router.use('/books', BooksEndpoint);

module.exports = Router;