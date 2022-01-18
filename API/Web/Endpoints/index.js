const express = require('express');

const MedicineEndpoint = require('./Medicine');

const Router = express.Router();

Router.use('/medicine', MedicineEndpoint);

module.exports = Router;