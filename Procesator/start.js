require('dotenv').config()

var amqp = require('amqplib/callback_api');

const {
    ExecuteQuery
} = require('./Database');

const QUEUE = 'medicine';

amqp.connect(process.env.AMQPURL, (error0, connection) => {
    if (error0) {
        throw error0;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(QUEUE, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", QUEUE);

        channel.consume(QUEUE, async (msg) => {
            console.log(" [x] Received %s", msg.content.toString());

            if (msg !== null) {
                const jsonPayload = JSON.parse(msg.content);
                try {
                    await ExecuteQuery("INSERT INTO medicine (name, description, producer, price, inserted_at) VALUES ($1, $2, $3, $4, $5)", [jsonPayload.name, jsonPayload.description, jsonPayload.producer, jsonPayload.price, new Date()]);
                } catch (err) {
                    console.error(err);
                }
            }

            channel.ack(msg);
        });
    });
});