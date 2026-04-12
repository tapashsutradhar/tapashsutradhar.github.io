const RESEARCH=[{title:"Hybrid Automation Framework Design for Cross-Platform Testing in Enterprise SaaS Applications",abstract:"Architectural design and implementation of a Playwright + Java hybrid automation framework integrated with GitHub Actions. Discusses strategies achieving 60% reduction in regression testing time across web and mobile platforms.",authors:["Tapash Sutradhar"],status:"In Progress",year:2025,tags:["Test Automation","Playwright","CI/CD","SDET"]},{title:"Machine Learning Models for Electricity Demand Forecasting and Anomaly Detection in Power Grid Systems",abstract:"ML-based approach to electricity demand forecasting using WBSETCL historical data. ARIMA and ensemble methods achieving 20–25% improvement in forecasting accuracy.",authors:["Tapash Sutradhar"],status:"In Progress",year:2025,tags:["Machine Learning","ARIMA","Power Grid","Forecasting"]},{title:"ETL Pipeline Architecture for Big Data E-Commerce Analytics at Scale",abstract:"ETL pipeline design patterns for 10M+ record e-commerce datasets. SQL indexing optimisation, transformation strategies, and automated Power BI reporting with 85% forecasting accuracy.",authors:["Tapash Sutradhar"],status:"Draft",year:2025,tags:["ETL","Big Data","SQL","Power BI"]}];

function renderPapers(filter='') {
  const list = filter ? RESEARCH.filter(p=>p.title.toLowerCase().includes(filter)||p.abstract.toLowerCase().includes(filter)||p.tags.some(t=>t.toLowerCase().includes(filter))) : RESEARCH;
  const el = document.getElementById('papers-list');
  if (!el) return;
  el.innerHTML = list.length ? list.map((p,i)=>`
    <div class="paper-row reveal" style="transition-delay:${i*.07}s">
      <div><p class="t-label mb-xs">${p.year}</p><span class="chip">${p.status}</span></div>
      <div>
        <p class="t-title mb-md" style="line-height:1.35">${p.title}</p>
        <p class="t-small mb-xs">${p.authors.join(', ')}</p>
        <p class="t-body mb-lg">${p.abstract}</p>
        <div class="flex flex-wrap gap-sm">${chips(p.tags)}</div>
      </div>
    </div>`).join('') : '<p class="t-body" style="color:var(--t4);padding-top:48px">No papers match your search.</p>';
  setTimeout(initReveals, 50);
}

document.getElementById('page-content').innerHTML = `
  <div class="page-top"><div class="wrap">
    <p class="kicker" style="animation:fadeUp .6s ease both">Research</p>
    <h1 class="t-headline" style="animation:fadeUp .6s .08s ease both">Research Papers</h1>
    <p class="t-body" style="max-width:540px;margin-top:10px;animation:fadeUp .6s .16s ease both">Technical research in software engineering, test automation, ML forecasting, and data pipeline architecture.</p>
  </div></div>
  <section class="section"><div class="wrap">
    <div class="search-wrap">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"/></svg>
      <input class="search-input" id="research-search" placeholder="Search papers…">
    </div>
    <div id="papers-list"></div>
  </div></section>`;

renderPapers();
initShared('research', '../');
document.getElementById('research-search').addEventListener('input', e => renderPapers(e.target.value.toLowerCase()));
