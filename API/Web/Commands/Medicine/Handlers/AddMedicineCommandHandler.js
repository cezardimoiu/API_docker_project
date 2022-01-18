const MessageQueue = require('../../../../Infrastructure/RabbitMQ');

const QUEUE = 'medicine';

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