const express = require('express');

const AddMedicineEndpoint = require('./AddMedicine.js');
const GetMedicinesEndpoint = require('./GetMedicine.js');

const Router = express.Router();

Router.use('/', AddMedicineEndpoint);
Router.use('/', GetMedicineEndpoint);

module.exports = Router;