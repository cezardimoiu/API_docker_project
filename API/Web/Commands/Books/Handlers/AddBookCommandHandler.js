const MessageQueue = require('../../../../Infrastructure/RabbitMQ');

const QUEUE = 'books';

/**
 * 
 * @param {AddBookCommand} bookCommand 
 */
const HandleAsync = async (bookCommand) => {

    await MessageQueue.PublishMessageAsync(QUEUE, bookCommand);
};

module.exports = {
    HandleAsync
}