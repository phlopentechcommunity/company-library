const companies = [
  { slug: 'cisco', name: 'Cisco', category: 'Networking', website: 'https://www.cisco.com', headquarters: 'San Jose, California, United States', founded: 1984, description: 'Enterprise networking, collaboration, routing, switching, and security hardware.', tags: ['routers', 'switches', 'wireless', 'firewalls'], netboxLibrary: true },
  { slug: 'juniper-networks', name: 'Juniper Networks', category: 'Networking', website: 'https://www.juniper.net', headquarters: 'Sunnyvale, California, United States', founded: 1996, description: 'High-performance networking, routing, switching, and data center infrastructure.', tags: ['routers', 'switches', 'mist-ai', 'automation'], netboxLibrary: true },
  { slug: 'arista-networks', name: 'Arista Networks', category: 'Networking', website: 'https://www.arista.com', headquarters: 'Santa Clara, California, United States', founded: 2004, description: 'Cloud networking platforms for large data center and campus environments.', tags: ['cloud-networking', 'switches', 'eos'], netboxLibrary: true },
  { slug: 'fortinet', name: 'Fortinet', category: 'Security', website: 'https://www.fortinet.com', headquarters: 'Sunnyvale, California, United States', founded: 2000, description: 'Security appliances, firewalls, SD-WAN, and security operations products.', tags: ['firewalls', 'sd-wan', 'security'], netboxLibrary: true },
  { slug: 'dell-technologies', name: 'Dell Technologies', category: 'Compute', website: 'https://www.dell.com', headquarters: 'Round Rock, Texas, United States', founded: 1984, description: 'Servers, storage, endpoints, and enterprise infrastructure solutions.', tags: ['servers', 'storage', 'racks'], netboxLibrary: true },
  { slug: 'amazon-web-services', name: 'Amazon Web Services', category: 'Cloud', website: 'https://aws.amazon.com', headquarters: 'Seattle, Washington, United States', founded: 2006, description: 'Cloud computing platform with infrastructure, managed services, and developer APIs.', tags: ['cloud', 'iaas', 'apis'], netboxLibrary: false }
];

function findCompanies(query, category) {
  const q = String(query || '').trim().toLowerCase();
  const c = String(category || '').trim().toLowerCase();
  return companies.filter((company) => {
    const searchable = [company.name, company.description, company.headquarters, company.category, ...company.tags].join(' ').toLowerCase();
    return (!q || searchable.includes(q)) && (!c || company.category.toLowerCase() === c);
  });
}

function findCompanyBySlug(slug) {
  return companies.find((company) => company.slug === slug);
}

module.exports = { companies, findCompanies, findCompanyBySlug };
