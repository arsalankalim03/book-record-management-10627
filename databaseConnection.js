const mongoose = require('mongoose');

function dbConnection() {
    const db_URL = process.env.MONGO_URI;

    mongoose.connect(db_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, "connection error"));
    db.once("open", function () {
        console.log("db connected...")
    });

}

module.exports = dbConnection;