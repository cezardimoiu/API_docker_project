class AddMedicineCommand {
    constructor (entry) {
        this.name = entry.name;
        this.producer = entry.producer;
        this.description = entry.description;
        this.price = entry.price;
    }
}

module.exports = {
    AddMedicineCommand
}