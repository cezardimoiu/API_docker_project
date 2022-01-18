const MessageQueue = require('../../../../Infrastructure/RabbitMQ');

const QUEUE = 'medicine';

/**
 * 
 * @param {AddMedicineCommand} medicineCommand 
 */
const HandleAsync = async (medicineCommand) => {

    await MessageQueue.PublishMessageAsync(QUEUE, medicineCommand);
};

module.exports = {
    HandleAsync
}