const express = require('express');
const TasksController = require('./controllers/TasksController');
const bodyParser = require('body-parser');

const { StatusCodes } = require('http-status-codes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const app = express();

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));


app.use(bodyParser.json());

app.use('/tasks', TasksController);

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({ok: true});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);