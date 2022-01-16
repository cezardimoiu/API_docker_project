const {
    ExecuteQuery
} = require('../../../../Infrastructure/Database');

const {
    BookView
} = require('../Models/BookView.js');

const QueryAsync = async () => {
    
    const result = await ExecuteQuery('SELECT * FROM books');

    return result.map(x => new BookView(x));
}

module.exports = {
    QueryAsync
}