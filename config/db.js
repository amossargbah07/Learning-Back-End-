const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Do not exit the process here so the dev server (nodemon) doesn't crash hard.
    // The app will continue running; handle DB-dependent routes gracefully in runtime.
  }
};

module.exports = connectDB;
