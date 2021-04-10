const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/actors', require('./controllers/actors-router'));
app.use('/api/v1/studios', require('./controllers/studios-router'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
