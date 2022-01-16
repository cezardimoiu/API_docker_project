const express = require('express');

const GetBooksQueryHandler = require('../../Queries/Books/Handlers/GetBooksQueryHandler.js');

const Router = express.Router();

Router.get('/', async (req, res) => {
    
    try {
        var books = await GetBooksQueryHandler.QueryAsync();
        res.json(books);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;