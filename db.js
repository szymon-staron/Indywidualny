const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToDB = () => {
  mongoose.connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.once('open', () => {
    console.log('connected to the database');
  });
  db.on('error', (err) => console.log('Error' + err));
};

module.exports = connectToDB;
