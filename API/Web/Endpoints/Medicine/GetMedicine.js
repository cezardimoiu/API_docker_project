const express = require('express');

const GetMedicinesQueryHandler = require('../../Queries/Medicine/Handlers/GetMedicinesQueryHandler.js');

const Router = express.Router();

Router.get('/', async (req, res) => {
    
    try {
        var medicine = await GetMedicinesQueryHandler.QueryAsync();
        res.json(medicine);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;