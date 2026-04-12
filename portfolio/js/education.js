const EDU=[{institution:"Bengal Institute of Technology & Management",short:"BITM, Santiniketan",degree:"Bachelor of Technology",field:"Electrical & Computer Science Engineering",start:"Jun 2019",end:"Jul 2023",gpa:"9.17 / 10",note:"First Class with Distinction (Honours)"},{institution:"West Bengal University of Technology",short:"WBUT, Kolkata",degree:"Diploma of Education",field:"Electrical, Electronics & Communications Engineering",start:"Jul 2016",end:"Jul 2019",gpa:"8.17 / 10",note:"First Class with Distinction"}];
const CERTS=[["EF SET English Certificate 75/100 (C2 Proficient)","EF Education First"],["Data Analytics Professional","IBM & Google"],["Python for Everybody Specialization","University of Michigan"],["Project Management Professional (Agile & SCRUM)","Google & Microsoft"],["McKinsey.org Learning Program","McKinsey"], ["Full-Stack Software Developer","Udemy"]];
const COURSES=[{title:"Full Stack Development",provider:"Udemy",detail:"React · Java · Spring Boot · SQL"},{title:"Google Advanced Data Analytics",provider:"Google / Coursera",detail:"Python · R · Statistics"},{title:"Machine Learning Specialization",provider:"DeepLearning.ai",detail:"Supervised & Unsupervised ML"},{title:"Software Testing: QA to Expert",provider:"Udemy",detail:"Manual & Automation Testing"},{title:"IBM Business Analysis & Data Science",provider:"IBM / Coursera",detail:"Data Science Workflows"},{title:"Data Analytics Professional",provider:"IBM & Google",detail:"Python · R · Power BI"},{title:"Python for Everybody",provider:"University of Michigan",detail:"Python · Data Structures"},{title:"Project Management Professional",provider:"Google & Microsoft",detail:"Agile · SCRUM"}];

document.getElementById('page-content').innerHTML = `
  <div class="page-top"><div class="wrap">
    <p class="kicker" style="animation:fadeUp .6s ease both">Background</p>
    <h1 class="t-headline" style="animation:fadeUp .6s .08s ease both">Education</h1>
    <p class="t-body" style="max-width:480px;margin-top:10px;animation:fadeUp .6s .16s ease both">Academic degrees, professional certifications, and continuing education.</p>
  </div></div>
  <section class="section"><div class="wrap">
    <p class="kicker" style="margin-bottom:24px">Degrees</p>
    ${EDU.map((e,i)=>`<div class="edu-row reveal" style="transition-delay:${i*.1}s"><div><p class="t-label mb-xs">${e.start} — ${e.end}</p><p class="t-small">${e.short}</p></div><div><p class="t-title mb-xs">${e.degree}</p><p class="t-body mb-xs">${e.field}</p><p class="t-small">${e.institution}</p>${e.gpa?`<p class="t-small mt-sm">GPA — <strong style="color:var(--t1)">${e.gpa}</strong>${e.note?` <span style="color:var(--t4);margin-left:6px">${e.note}</span>`:''}</p>`:''}</div></div>`).join('')}
    <hr class="rule" style="margin:48px 0">
    <p class="kicker" style="margin-bottom:24px">Certifications</p>
    <div class="cert-grid reveal" style="margin-bottom:48px">${CERTS.map(([t,p])=>`<div class="cert-card"><p class="t-body" style="font-weight:500;color:var(--t1);margin-bottom:4px">${t}</p><p class="t-small">${p}</p></div>`).join('')}</div>
    <hr class="rule" style="margin-bottom:48px">
    <p class="kicker" style="margin-bottom:24px">Courses & Training</p>
    ${COURSES.map((c,i)=>`<div class="course-row reveal" style="transition-delay:${i*.04}s"><p class="t-body" style="font-weight:500">${c.title}</p><p class="t-small">${c.detail}</p><p class="t-small" style="text-align:right">${c.provider}</p></div>`).join('')}
  </div></section>`;

initShared('education', '../');
setTimeout(initReveals, 100);
