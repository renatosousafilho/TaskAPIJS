const express = require('express');
const TasksController = require('./controllers/TasksController');
const bodyParser = require('body-parser');

const { StatusCodes } = require('http-status-codes');

const app = express();

app.use(bodyParser.json());

app.use('/tasks', TasksController);

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({ok: true});
});

const PORT = 3000;

app.listen(PORT);