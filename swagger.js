const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
// const endpointsFiles = ['./controllers/TasksController.js'];
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles);