const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongooseExpressErrorHandler = require('mongoose-express-error-handler');

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.MONGO_PORT}/${process.env.DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(mongooseExpressErrorHandler);
