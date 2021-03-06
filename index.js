const express = require('express');
const TasksController = require('./controllers/TasksController');
const bodyParser = require('body-parser');
const createToken = require('./auth/createToken');
const validateToken = require('./auth/validateToken');

const { StatusCodes } = require('http-status-codes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const app = express();

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));


app.use(bodyParser.json());

app.use('/tasks', TasksController);

app.post('/foo', (req, res) => {
  /*  #swagger.parameters['authorization'] = {
                 in: 'header',
                 type: "string",
                 description: "Token JWT"
  } */
  const { authorization: token } = req.headers;

  if (!token) 
    return res.status(StatusCodes.FORBIDDEN).json({message: 'Token é obrigatório'});

  const payload = validateToken(token);

  if (!payload) 
    return res.status(StatusCodes.FORBIDDEN).json({message: 'Não autorizado'});

  res.status(StatusCodes.OK).json({ok: true});
});

app.post('/login', (req, res) => {
  const token = createToken({user: 'renato'});

  res.status(StatusCodes.OK).json({ token });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);