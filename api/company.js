const { findCompanyBySlug } = require('../src/companies');

module.exports = (request, response) => {
  const company = findCompanyBySlug(request.query.slug);
  if (!company) {
    response.status(404).json({ error: 'Company not found' });
    return;
  }
  response.status(200).json(company);
};
