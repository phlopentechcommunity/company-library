const grid = document.querySelector('#company-grid');
const count = document.querySelector('#count');
const form = document.querySelector('#search-form');

function companyCard(company) {
  return `<article class="card">
    <div class="card-top"><h3>${company.name}</h3><span class="pill">${company.category}</span></div>
    <p>${company.description}</p>
    <dl>
      <div><dt>HQ</dt><dd>${company.headquarters}</dd></div>
      <div><dt>Founded</dt><dd>${company.founded}</dd></div>
      <div><dt>Library</dt><dd>${company.netboxLibrary ? 'NetBox-style vendor' : 'API-only profile'}</dd></div>
    </dl>
    <div class="tags">${company.tags.map((tag) => `<span class="tag">#${tag}</span>`).join('')}</div>
    <a href="${company.website}" target="_blank" rel="noreferrer">Visit website →</a>
  </article>`;
}

async function loadCompanies(params = new URLSearchParams()) {
  const response = await fetch(`/api/companies?${params.toString()}`);
  const data = await response.json();
  count.textContent = `${data.count} company records`;
  grid.innerHTML = data.results.length ? data.results.map(companyCard).join('') : '<p>No companies found.</p>';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const params = new URLSearchParams(new FormData(form));
  loadCompanies(params);
});

loadCompanies();
