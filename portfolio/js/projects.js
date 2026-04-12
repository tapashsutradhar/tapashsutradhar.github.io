const PROJECTS = [
  {title:"Asset Management SaaS Platform",description:"High-performance MERN and FastAPI architecture for USA Public clients. Optimised SQL indexing and backend logic to improve system throughput by 35%. Includes geospatial asset tracking via Google Maps API.",tech:["MERN Stack","FastAPI","SQL Server","Google Maps API","C#",".NET"],type:"SaaS · Enterprise",metric:"35% throughput improvement",github:"https://github.com/tapashsutradhar",live:null,image:"../images/project-asset.jpg"},
  {title:"Enterprise Automation Framework",description:"Playwright and Java hybrid framework integrated with GitHub Actions CI/CD. Reduced manual testing overhead by 60% across web and mobile (Android/iOS) platforms.",tech:["Playwright","Java","GitHub Actions","CI/CD","Appium"],type:"Test Automation",metric:"60% reduction in manual testing",github:"https://github.com/tapashsutradhar",live:null,image:"../images/project-automation.jpg"},
  {title:"E-Commerce Big Data & Forecasting",description:"ETL pipeline for 10M+ records using SQL and ARIMA models. Achieved 85% forecasting accuracy with automated KPI reporting via Power BI.",tech:["Python","SQL","ARIMA","Power BI","ETL","Pandas"],type:"Data Engineering",metric:"85% forecasting accuracy",github:"https://github.com/tapashsutradhar",live:null,image:"../images/project-ecommerce.jpg"},
  {title:"Airport Analytics System",description:"Forecasting models for airport operational analytics, improving prediction accuracy by 25%. Real-time dashboards for KPI monitoring.",tech:["Python","Machine Learning","SQL","Power BI"],type:"Analytics",metric:"25% prediction accuracy boost",github:"https://github.com/tapashsutradhar",live:null,image:"../images/project-airport.jpg"}
];

function buildProjects() {
  const el = document.getElementById('page-content');
  const rows = PROJECTS.map((p,i) => {
    const even = i % 2 === 0;
    return `
      <div class="project-row reveal" style="transition-delay:${i*.07}s">
        <div class="project-img" style="order:${even?0:1}">
          <img src="${p.image}" alt="${p.title}" loading="lazy"
            onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;background:var(--bg3)\\'><p class=\\'t-label\\'>${p.type}</p></div>'">
        </div>
        <div class="project-content" style="order:${even?1:0}">
          <p class="t-label mb-sm">${p.type}</p>
          <h2 class="t-title mb-md">${p.title}</h2>
          <p class="t-body mb-lg">${p.description}</p>
          <div class="project-metric"><span class="t-label">Result</span><span class="t-small" style="color:var(--t1)">${p.metric}</span></div>
          <div class="flex flex-wrap gap-sm mb-lg">${chips(p.tech)}</div>
          <div class="flex flex-wrap gap-md">
            <a class="btn btn-outline" href="${p.github}" target="_blank" rel="noopener" style="font-size:.75rem;padding:8px 16px">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              Code
            </a>
            ${p.live ? `<a class="btn btn-dark" href="${p.live}" target="_blank" rel="noopener" style="font-size:.75rem;padding:8px 16px">Live</a>` : ''}
          </div>
        </div>
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="page-top"><div class="wrap">
      <p class="kicker" style="animation:fadeUp .6s ease both">Portfolio</p>
      <h1 class="t-headline" style="animation:fadeUp .6s .08s ease both">Projects</h1>
      <p class="t-body" style="max-width:480px;margin-top:10px;animation:fadeUp .6s .16s ease both">Enterprise SaaS platforms, automation frameworks, and data engineering systems.</p>
    </div></div>
    <section class="section"><div class="wrap">${rows}</div></section>`;
}

buildProjects();
initShared('projects', '../');
setTimeout(initReveals, 100);
