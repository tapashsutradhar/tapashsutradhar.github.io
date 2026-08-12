const EXP = [
//  {shortName:"InnoByte Services",role:"Data & Business Analyst",type:"Internship",start:"Feb 2024",end:"May 2024",current:false,location:"New Delhi, India",domain:"Business Intelligence · Reporting",achievements:["Analysed complex datasets with Python and SQL, improving reporting efficiency by 25%.","Built automated Tableau dashboards converting raw business metrics into actionable insights."],tech:["Python","SQL","Tableau","Business Intelligence"]},
  {shortName:"Seap Infotech",role:"Software Developer & QA Engineer",type:"Full-time",start:"Sept 2025",end:"Present",current:true,location:"Kolkata, India",domain:"SaaS · Asset Management · USA Public Clients",
    achievements:[
      "Translated functional business requirements into production-ready web features, working with cross-functional Agile teams to reduce sprint delivery cycles by 15%.",
      "Developed modular React frontend components integrated with C#/.NET and Java (Spring Boot) REST APIs, cutting average page-load latency by 200ms and improving UI responsiveness by 25%.",
      "Built automated integration tests for web components and backend APIs to validate interface stability under peak user loads, and optimized SQL queries to keep data flow stable under heavy traffic.",
      "Architected a modular automated test framework from scratch using Java, Playwright and TestNG, reducing nightly regression execution time to under 15 minutes via parallel execution.",
      "Integrated E2E and REST API test suites into GitHub Actions CI/CD pipelines, cutting deployment defects by 20%.",
      "Implemented a robust logging and reporting mechanism for test failures, enabling faster root cause analysis and reducing bug resolution time by 30%.",
      "Scripted automated mobile test suites (Appium, Android/iOS) maintaining a 98%+ pass rate.",
      "Designed SQL validation queries to verify backend state changes and data consistency after automated workflow runs."
    ],
      tech:["C#",".NET","SQL Server","JS","TS","Playwright","Java","Postman","Jira","API"]},
  {shortName:"WBSETCL",role:"Data & Analytics Analyst",type:"Full-time",start:"Jan 2024",end:"Aug 2025",current:false,location:"Kolkata, India",domain:"Power Grid · Demand Forecasting · ML",
    achievements:[
      "Wrote advanced SQL queries and Excel reconciliation models, automating schema-verification checks and cutting manual audit effort by 60%.",
      "Built Power BI dashboards for grid performance, reducing manual reporting turnaround time by 40%.",
      "Developed Python (Pandas) and dbt validation scripts to audit ETL pipelines, maintaining 100% data integrity across MySQL and cloud databases.",
      "Led User Acceptance Testing (UAT) and mapped business process flows, bridging communication between operations stakeholders and engineering teams.",
      "Built interactive Power BI and Tableau dashboards for executive leadership, cutting reporting turnaround time by 40%."
    ],
    tech:["Python","Pandas","SQL","Power BI","Machine Learning","Excel"]},
  {shortName:"Zidio Development",role:"Software Development Engineer",type:"Internship",start:"Aug 2023",end:"Jan 2024",current:false,location:"Bengaluru, India",domain:"MERN Stack · Full-Stack",
    achievements:[
      "Wrote and executed automated Java and Python unit test suites, reducing pre-production bugs by 30%.",
      "Developed responsive web UI modules (JavaScript, HTML5, CSS3), completing 100% of assigned Jira user stories on time."
    ],
    tech:["MongoDB","Express","React","Node.js","REST APIs","JavaScript","HTML","CSS","Python","SQL","Tableau"]},
];

function buildExperience() {
  const el = document.getElementById('page-content');
  const items = EXP.map((e,i) => `
    <div class="timeline-item reveal" style="transition-delay:${i*.09}s">
      <div class="timeline-dot"></div>
      <div class="exp-row">
        <div>
          <p class="t-label mb-xs">${e.start} — ${e.end}</p>
          ${e.current ? '<span class="chip" style="display:inline-block;margin-bottom:8px">Current</span>' : ''}
          <p class="t-small mt-xs">${e.location}</p>
          <p class="t-small" style="color:var(--t4);margin-top:2px">${e.type}</p>
        </div>
        <div>
          <p class="t-title mb-xs">${e.role}</p>
          <p style="font-size:.9375rem;color:var(--t2);margin-bottom:2px;font-weight:500">${e.shortName}</p>
          <p class="t-small mb-lg" style="color:var(--t4)">${e.domain}</p>
          <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:10px">
            ${e.achievements.map(a=>`<li style="display:flex;gap:12px;align-items:flex-start"><span style="color:var(--t4);font-size:.5rem;margin-top:5px;flex-shrink:0">—</span><p class="t-body">${a}</p></li>`).join('')}
          </ul>
          <div class="flex flex-wrap gap-sm mt-lg">${chips(e.tech)}</div>
        </div>
      </div>
    </div>`).join('');

  el.innerHTML = `
    <div class="page-top"><div class="wrap">
      <p class="kicker" style="animation:fadeUp .6s ease both">Career</p>
      <h1 class="t-headline" style="animation:fadeUp .6s .08s ease both">Experience</h1>
      <p class="t-body" style="max-width:480px;margin-top:10px;animation:fadeUp .6s .16s ease both">Software development, test automation, and data analytics across product companies and enterprise clients.</p>
    </div></div>
    <section class="section"><div class="wrap">
      <div class="timeline"><div class="timeline-line"></div>${items}</div>
    </div></section>`;
}

buildExperience();
initShared('experience', '../');
setTimeout(initReveals, 100);
