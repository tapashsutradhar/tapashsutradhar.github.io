const EXP = [
  {shortName:"Seap Infotech",role:"Software Development Engineer",type:"Full-time",start:"Oct 2025",end:"Present",current:true,location:"Kolkata, India",domain:"SaaS · Asset Management · USA Public Clients",achievements:["Executed end-to-end API validation and cross-platform mobile testing (Android/iOS), expanding test coverage by 40% for international client modules.","Designed and deployed core modules for a scalable SaaS Asset Management platform using C#, .NET, and SQL Server.","Developed RESTful APIs and Google Maps API integration for geospatial asset tracking.","Led Manual Testing cycles (Functional, UAT, Smoke) with zero defect leakage to production.","Built a Playwright + Java hybrid automation framework, cutting regression testing time by 60%."],tech:["C#",".NET","SQL Server","Playwright","Java","Postman","Jira","Google Maps API"]},
  {shortName:"WBSETCL",role:"Data & Analytics Analyst",type:"Full-time",start:"Jun 2024",end:"Aug 2025",current:false,location:"Kolkata, India",domain:"Power Grid · Demand Forecasting · ML",achievements:["Developed ML forecasting solutions for electricity demand, improving accuracy by 20–25%.","Automated data cleaning and transformation workflows in Python and SQL, improving reliability by 30%.","Built Power BI dashboards for grid performance, reducing manual reporting time by 15 hrs/week.","Deployed anomaly detection models for proactive operational decisions."],tech:["Python","Pandas","SQL","Power BI","Machine Learning","Excel"]},
  {shortName:"InnoByte Services",role:"Data & Business Analyst",type:"Internship",start:"Feb 2024",end:"May 2024",current:false,location:"New Delhi, India",domain:"Business Intelligence · Reporting",achievements:["Analysed complex datasets with Python and SQL, improving reporting efficiency by 25%.","Built automated Tableau dashboards converting raw business metrics into actionable insights."],tech:["Python","SQL","Tableau","Business Intelligence"]},
  {shortName:"Zidio Development",role:"Software Development Engineer",type:"Internship",start:"Nov 2023",end:"Jan 2024",current:false,location:"Bengaluru, India",domain:"MERN Stack · Full-Stack",achievements:["Built MERN stack features end-to-end, implementing RESTful APIs.","Integrated unit tests ensuring 95% code reliability across core modules."],tech:["MongoDB","Express","React","Node.js","REST APIs"]}
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
