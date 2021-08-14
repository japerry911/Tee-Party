const express = require('express');
const cors = require('cors');

const app = express();

const corsOption = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

module.exports = app;