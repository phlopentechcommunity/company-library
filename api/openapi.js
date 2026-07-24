const { openApiSpec } = require('../src/openapi');

module.exports = (_request, response) => {
  response.status(200).json(openApiSpec);
};
