const { findCompanies } = require('../src/companies');

module.exports = (request, response) => {
  const { q, category } = request.query;
  const results = findCompanies(q, category);
  response.status(200).json({ count: results.length, results });
};
