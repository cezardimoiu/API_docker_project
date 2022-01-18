const express = require('express');

const AddMedicineCommandHandler = require('../../Commands/Medicine/Handlers/AddMedicineCommandHandler.js');
const {
    AddMedicineCommand
} = require ('../../Commands/Medicine/Models/AddMedicineCommand.js');

const Router = express.Router();

Router.post('/', async (req, res) => {
    
    const medicineCommand = new AddMedicineCommand(req.body);
    try {
        AddMedicineCommandHandler.HandleAsync(medicineCommand);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;