const {
    ExecuteQuery
} = require('../../../../Infrastructure/Database');

const {
    MedicineView
} = require('../Models/MedicineView.js');

const QueryAsync = async () => {
    
    const result = await ExecuteQuery('SELECT * FROM medicine');

    return result.map(x => new MedicineView(x));
}

module.exports = {
    QueryAsync
}