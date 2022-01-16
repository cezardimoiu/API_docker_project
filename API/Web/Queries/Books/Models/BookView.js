class BookView {
    constructor (entry) {
        this.name = entry.name;
        this.author = entry.author;
        this.description = entry.description;
        this.price = entry.price;
        this.insertedAt = entry.inserted_at;
    }
}

module.exports = {
    BookView
}