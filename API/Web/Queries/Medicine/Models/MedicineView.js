class MedicineView {
    constructor (entry) {
        this.name = entry.name;
        this.producer = entry.producer;
        this.description = entry.description;
        this.price = entry.price;
        this.insertedAt = entry.inserted_at;
    }
}

module.exports = {
    MedicineView
}