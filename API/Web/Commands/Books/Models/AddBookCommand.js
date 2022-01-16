class AddBookCommand {
    constructor (entry) {
        this.name = entry.name;
        this.author = entry.author;
        this.description = entry.description;
        this.price = entry.price;
    }
}

module.exports = {
    AddBookCommand
}