const express = require('express');

const GetMedicineQueryHandler = require('../../Queries/Medicine/Handlers/GetMedicineQueryHandler.js');

const Router = express.Router();

Router.get('/', async (req, res) => {
    
    try {
        var medicine = await GetMedicineQueryHandler.QueryAsync();
        res.json(medicine);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;