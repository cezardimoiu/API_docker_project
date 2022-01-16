const express = require('express');

const AddBookEndpoint = require('./AddBook.js');
const GetBooksEndpoint = require('./GetBooks.js');

const Router = express.Router();

Router.use('/', AddBookEndpoint);
Router.use('/', GetBooksEndpoint);

module.exports = Router;