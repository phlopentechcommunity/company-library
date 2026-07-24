const openApiSpec = {
  openapi: '3.0.3',
  info: {
    title: 'Company Library API',
    version: '1.0.0',
    description: 'Searchable CompanyFinder API inspired by NetBox device type library patterns.'
  },
  servers: [{ url: '/' }],
  paths: {
    '/api/companies': {
      get: {
        summary: 'List companies',
        parameters: [
          { name: 'q', in: 'query', schema: { type: 'string' }, description: 'Search name, tags, category, headquarters, or description.' },
          { name: 'category', in: 'query', schema: { type: 'string' }, description: 'Filter by category.' }
        ],
        responses: { '200': { description: 'Company list.', content: { 'application/json': { schema: { $ref: '#/components/schemas/CompanyList' } } } } }
      }
    },
    '/api/companies/{slug}': {
      get: {
        summary: 'Get company by slug',
        parameters: [{ name: 'slug', in: 'path', required: true, schema: { type: 'string' } }],
        responses: {
          '200': { description: 'Company detail.', content: { 'application/json': { schema: { $ref: '#/components/schemas/Company' } } } },
          '404': { description: 'Company not found.' }
        }
      }
    }
  },
  components: {
    schemas: {
      Company: {
        type: 'object',
        required: ['slug', 'name', 'category', 'website', 'headquarters', 'founded', 'description', 'tags', 'netboxLibrary'],
        properties: {
          slug: { type: 'string' },
          name: { type: 'string' },
          category: { type: 'string' },
          website: { type: 'string', format: 'uri' },
          headquarters: { type: 'string' },
          founded: { type: 'integer' },
          description: { type: 'string' },
          tags: { type: 'array', items: { type: 'string' } },
          netboxLibrary: { type: 'boolean' }
        }
      },
      CompanyList: {
        type: 'object',
        properties: {
          count: { type: 'integer' },
          results: { type: 'array', items: { $ref: '#/components/schemas/Company' } }
        }
      }
    }
  }
};

module.exports = { openApiSpec };
