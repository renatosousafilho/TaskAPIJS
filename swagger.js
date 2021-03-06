const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Tasks API',
    description: 'App para gerenciar tarfas'
  },
  host: 'localhost:3000',
  schemes: ['http'],
  definitions: {
    Task: {
      $name: 'Programar',
      $user: 'Gordinho'
    }
  }
};

const outputFile = './swagger.json';
// const endpointsFiles = ['./controllers/TasksController.js'];
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);