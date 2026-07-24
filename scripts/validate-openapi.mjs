import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { openApiSpec } = require('../src/openapi');

const requiredTopLevelKeys = ['openapi', 'info', 'paths', 'components'];
const missingKeys = requiredTopLevelKeys.filter((key) => !openApiSpec[key]);

if (missingKeys.length > 0) {
  console.error(`OpenAPI spec is missing: ${missingKeys.join(', ')}`);
  process.exit(1);
}

console.log(`Validated ${Object.keys(openApiSpec.paths).length} OpenAPI paths.`);
