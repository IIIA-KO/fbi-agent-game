const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FBI Agent Game API',
      version: '1.0.0',
      description: 'API for managing FBI agent status and resources',
    },
    servers: [
      {
        url: 'http://localhost:4308',
        description: 'Development server',
      },
    ],
  },
  apis: ['./server.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;