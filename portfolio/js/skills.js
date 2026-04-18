const SKILLS = {
  'Programming Languages':[{n:"Java",l:90},{n:"Python",l:85},{n:"JavaScript",l:80},{n:"SQL",l:85},{n:"C# / .NET",l:70},{n:"TypeScript",l:68}],
  'Frontend & Backend':[{n:"React.js",l:80},{n:"Node.js",l:78},{n:"Next.js",l:70},{n:"Express.js",l:75},{n:"HTML / CSS",l:82},{n:"REST APIs",l:88},{n:"MERN Stack",l:78},{n:"Spring Boot",l:72}],
  'Testing & QA':[{n:"Playwright",l:88},{n:"Selenium",l:82},{n:"Appium",l:75},{n:"Postman",l:90},{n:"Manual Testing",l:90},{n:"JUnit / TestNG",l:80}],
  'Data & Analytics':[{n:"Power BI",l:85},{n:"Pandas",l:82},{n:"Machine Learning",l:72},{n:"Tableau",l:75},{n:"ETL / ELT",l:78},{n:"Excel / VBA",l:80}],
  'Tools & DevOps':[{n:"Jira",l:88},{n:"GitHub",l:80},{n:"MongoDB",l:78},{n:"SQL Server",l:82},{n:"Docker",l:62},{n:"Agile / Scrum",l:88}]
};

function buildSkills() {
  const el = document.getElementById('page-content');
  const groups = Object.entries(SKILLS).map(([title, items]) => `
    <div class="skill-group reveal">
      <p class="kicker" style="margin-bottom:20px">${title}</p>
      ${items.map(s=>`
        <div class="skill-row">
          <span class="t-body" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.n}</span>
          <div class="bar-track"><div class="bar-fill" data-w="${s.l}"></div></div>
          <span class="t-small" style="text-align:right;flex-shrink:0">${s.l}%</span>
        </div>`).join('')}
    </div>`).join('');

  const allChips = Object.values(SKILLS).flat().map(s=>chip(s.n)).join(' ');

  el.innerHTML = `
    <div class="page-top"><div class="wrap">
      <p class="kicker" style="animation:fadeUp .6s ease both">Technical Proficiency</p>
      <h1 class="t-headline" style="animation:fadeUp .6s .08s ease both">Skills</h1>
      <p class="t-body" style="max-width:480px;margin-top:10px;animation:fadeUp .6s .16s ease both">Languages, frameworks, testing tools, data technologies, and engineering practices.</p>
    </div></div>
    <section class="section"><div class="wrap">
      <div class="skills-cols">${groups}</div>
      <div style="border-top:1px solid var(--b1);padding-top:48px" class="reveal">
        <p class="kicker" style="margin-bottom:20px">All technologies</p>
        <div class="flex flex-wrap gap-sm">${allChips}</div>
      </div>
    </div></section>`;
}

function animateBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.querySelectorAll('.bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.skill-group').forEach(g => obs.observe(g));
}

buildSkills();
initShared('skills', '../');
setTimeout(() => { initReveals(); animateBars(); }, 100);
