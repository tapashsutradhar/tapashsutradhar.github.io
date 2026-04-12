document.getElementById('page-content').innerHTML = `
  <div class="page-top"><div class="wrap">
    <p class="kicker" style="animation:fadeUp .6s ease both">Documents</p>
    <h1 class="t-headline" style="animation:fadeUp .6s .08s ease both">Resume</h1>
    <p class="t-body" style="max-width:480px;margin-top:10px;animation:fadeUp .6s .16s ease both">Download or view my resume and LinkedIn profile document.</p>
  </div></div>
  <section class="section"><div class="wrap">
    <div class="resume-grid">
      <div class="resume-card reveal"><p class="t-label mb-md">PDF Document</p><p class="t-title mb-sm">Resume / CV</p><p class="t-body mb-md">Full resume with experience, skills, and education.</p><p class="t-mono t-small mb-lg">Tapash_Sutradhar_Resume.pdf</p><div class="flex gap-md"><a class="btn btn-dark" href="../resume/Tapash_Sutradhar_Resume.pdf" download><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> Download</a><a class="btn btn-outline" href="../resume/Tapash_Sutradhar_Resume.pdf" target="_blank">Open</a></div></div>
      <div class="resume-card reveal"><p class="t-label mb-md">PDF Document</p><p class="t-title mb-sm">LinkedIn Profile</p><p class="t-body mb-md">Exported LinkedIn profile document.</p><p class="t-mono t-small mb-lg">Profile.pdf</p><div class="flex gap-md"><a class="btn btn-dark" href="../resume/Profile.pdf" download><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> Download</a><a class="btn btn-outline" href="../resume/Profile.pdf" target="_blank">Open</a></div></div>
    </div>
    <div style="border-top:1px solid var(--b1);padding-top:48px"><p class="kicker mb-md">Also available on</p><a class="btn btn-outline" href="https://www.linkedin.com/in/tapashsutradhar" target="_blank" rel="noopener">LinkedIn Profile</a></div>
  </div></section>`;

initShared('resume', '../');
setTimeout(initReveals, 100);
