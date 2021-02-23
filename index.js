const express = require('express');
const TasksController = require('./controllers/TasksController');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/tasks', TasksController);

app.get('/', (req, res) => {
  res.status(200).json({ok: true})
})

app.listen(3000);