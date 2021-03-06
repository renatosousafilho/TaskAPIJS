const express = require('express');
const TasksController = require('./controllers/TasksController');
const LoginController = require('./controllers/LoginController');
const SignUpController = require('./controllers/SignUpController');

const { validateAuthorization } = require('./middlewares/AuthMiddleware');
const bodyParser = require('body-parser');

const { StatusCodes } = require('http-status-codes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const app = express();

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
app.use('/signup', SignUpController);
app.use('/login', LoginController);
app.use('/tasks', TasksController);

app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send(`Rodando no proceso ${process.pid}`);
});


app.post('/foo', validateAuthorization, (req, res) => {
  /*  #swagger.parameters['authorization'] = {
                 in: 'header',
                 type: "string",
                 description: "Token JWT"
  } */
  

  res.status(StatusCodes.OK).json({ok: true});
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App rodando no processo ${process.pid}`));