const SERVICES = [
  {icon:"01",title:"Software Development",description:"End-to-end application engineering using modern stacks — React, Node.js, C#/.NET. REST API design, SaaS platform modules, and database-driven backends.",areas:["Full-Stack Web Apps","REST API Design","SaaS Module Development","Database Architecture"],tech:["React","Node.js","C#",".NET","MongoDB","SQL Server"]},
  {icon:"02",title:"Test Automation & SDET",description:"Hybrid automation frameworks from the ground up. Playwright + Java, Selenium, Appium for web and mobile. CI/CD integration with GitHub Actions.",areas:["Playwright + Java Frameworks","Web & Mobile Automation","API Testing (Postman/Newman)","CI/CD Pipeline Integration"],tech:["Playwright","Java","Selenium","Appium","Postman","GitHub Actions"]},
  {icon:"03",title:"Data Analytics & BI",description:"From ETL pipelines to ML forecasting models and Power BI dashboards. Transform raw data into operational intelligence.",areas:["Power BI Dashboards","ETL Pipeline Design","ML Forecasting Models","SQL & Python Analytics"],tech:["Python","Power BI","SQL","Pandas","Machine Learning","Tableau"]},
  {icon:"04",title:"Quality Assurance",description:"End-to-end QA strategy — test planning, defect lifecycle management, Agile/Scrum QA integration. Zero defect leakage track record.",areas:["Test Strategy & Planning","Manual Testing (UAT, Smoke)","Defect Lifecycle (Jira)","Agile QA Integration"],tech:["Jira","TestNG","JUnit","BDD","Agile","Scrum"]}
];

function buildServices() {
  const el = document.getElementById('page-content');
  const rows = SERVICES.map((s,i) => `
    <div class="service-row reveal" style="transition-delay:${i*.07}s">
      <p class="serif" style="font-size:clamp(1.75rem,4vw,2.5rem);font-weight:400;color:var(--b2);line-height:1">${s.icon}</p>
      <div>
        <p class="t-title mb-md">${s.title}</p>
        <p class="t-body">${s.description}</p>
      </div>
      <div>
        <p class="t-label mb-md">Areas</p>
        <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:9px;margin-bottom:20px">
          ${s.areas.map(a=>`<li style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--t4);font-size:.5rem;margin-top:5px;flex-shrink:0">—</span><p class="t-body">${a}</p></li>`).join('')}
        </ul>
        <div class="flex flex-wrap gap-sm">${chips(s.tech)}</div>
      </div>
    </div>`).join('');

  el.innerHTML = `
    <div class="page-top"><div class="wrap">
      <p class="kicker" style="animation:fadeUp .6s ease both">What I offer</p>
      <h1 class="t-headline" style="animation:fadeUp .6s .08s ease both">Services</h1>
      <p class="t-body" style="max-width:520px;margin-top:10px;animation:fadeUp .6s .16s ease both">Full software lifecycle — building, testing, analysing, and deploying. Available for full-time, contract, and freelance.</p>
    </div></div>
    <section class="section"><div class="wrap">${rows}</div></section>
    <hr class="rule">
    <section class="section"><div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:48px">
      <div class="reveal"><p class="kicker">Engagement models</p>${['Full-time employment','Contract (6–12 months)','Freelance / Project-based','Consulting & advisory'].map(m=>`<div style="padding:14px 0;border-bottom:1px solid var(--b1)"><p class="t-body">${m}</p></div>`).join('')}</div>
      <div class="reveal"><p class="kicker">Domain expertise</p>${['Banking & Finance','Asset Management (SaaS)','Power Grid & Utilities','E-Commerce Analytics','Enterprise QA'].map(d=>`<div style="padding:14px 0;border-bottom:1px solid var(--b1)"><p class="t-body">${d}</p></div>`).join('')}</div>
      <div class="reveal"><p class="kicker" style="margin-bottom:20px">Ready to work together?</p><p class="t-body mb-lg">Let's discuss how I can contribute. I respond within 24 hours.</p><a class="btn btn-dark" href="contact.html">Get in touch</a></div>
    </div></section>`;
}

buildServices();
initShared('services', '../');
setTimeout(initReveals, 100);
