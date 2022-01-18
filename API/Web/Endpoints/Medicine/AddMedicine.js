const express = require('express');

const AddBookCommandHandler = require('../../Commands/Books/Handlers/AddBookCommandHandler.js');
const {
    AddBookCommand
} = require ('../../Commands/Books/Models/AddBookCommand.js');

const Router = express.Router();

Router.post('/', async (req, res) => {
    
    const bookCommand = new AddBookCommand(req.body);
    try {
        AddBookCommandHandler.HandleAsync(bookCommand);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;