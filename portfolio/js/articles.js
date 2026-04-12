const SEED=[{id:'1',title:'Building a Playwright + Java Hybrid Automation Framework from Scratch',category:'Test Automation',tags:['Playwright','Java','CI/CD','SDET'],author:'Tapash Sutradhar',readTime:'8 min',date:'2025-03-15',content:'## Introduction\n\nAutomation testing is no longer optional in modern software delivery. This article covers the complete architecture of the Playwright + Java hybrid framework I built at Seap Infotech.\n\n## Architecture\n\nThe framework consists of three layers:\n\n1. Test Layer — BDD-style Java test cases\n2. Driver Layer — Playwright browser and mobile abstraction\n3. Reporting Layer — Allure Reports with screenshots\n\n## Results\n\nAfter 3 months: 60% reduction in manual regression testing time across web and Android/iOS platforms.'},{id:'2',title:'Machine Learning for Electricity Demand Forecasting — A Practical Guide',category:'Data Analytics',tags:['Machine Learning','Python','Power BI','Forecasting'],author:'Tapash Sutradhar',readTime:'10 min',date:'2025-01-20',content:'## Background\n\nAt WBSETCL, I built ML-based forecasting solutions for electricity demand.\n\n## Approach\n\nCompared ARIMA, Random Forest, XGBoost, and LSTM. XGBoost with feature engineering gave the best accuracy — 20–25% improvement over baseline.\n\n## Key Insight\n\nFor time-series forecasting in utility domains, feature engineering matters more than model complexity.'},{id:'3',title:'API Testing Best Practices with Postman and Newman',category:'Software Engineering',tags:['API Testing','Postman','Newman','QA'],author:'Tapash Sutradhar',readTime:'6 min',date:'2024-11-10',content:'## Why API Testing Matters\n\nFor SaaS applications serving international clients, API reliability is non-negotiable.\n\n## Key Patterns\n\n1. Schema validation — always validate response structure\n2. Request chaining — pass auth tokens via variables\n3. Negative testing — test edge cases and error codes\n\n## Results\n\nWith this approach, we expanded test coverage by 40%.'}];

const KEY = 'ts_articles_v2';
let articles = (() => { try { const s=localStorage.getItem(KEY); return s?JSON.parse(s):SEED; } catch { return SEED; } })();
const saveArticles = () => { try { localStorage.setItem(KEY, JSON.stringify(articles)); } catch {} };
let adminMode = false;
let editingId = null;

function mdToHtml(md) {
  return md.split('\n').map(line => {
    if(line.startsWith('## ')) return `<h3 style="font-family:'Playfair Display',serif;font-size:1.125rem;font-weight:500;color:var(--t1);margin-top:24px;margin-bottom:8px">${line.slice(3)}</h3>`;
    if(line.match(/^\d+\. /)) return `<p style="display:flex;gap:10px;margin-bottom:6px;color:var(--t2)"><span style="color:var(--t4);flex-shrink:0">—</span>${line.replace(/^\d+\. /,'')}</p>`;
    if(line.trim()==='') return '<div style="height:8px"></div>';
    return `<p class="t-body" style="margin-bottom:6px">${line}</p>`;
  }).join('');
}

function renderArticles(filter='') {
  const list = filter ? articles.filter(a=>a.title.toLowerCase().includes(filter)||a.category.toLowerCase().includes(filter)||a.tags.some(t=>t.toLowerCase().includes(filter))) : articles;
  const el = document.getElementById('articles-list');
  if (!el) return;
  el.innerHTML = list.length ? list.map(a=>`
    <div class="article-row reveal">
      <div><p class="t-label mb-xs">${a.category}</p><p class="t-small">${fmtDate(a.date)}</p><p class="t-small" style="color:var(--t4)">${a.readTime}</p></div>
      <div>
        <p class="t-title mb-sm" style="line-height:1.3;cursor:pointer" onclick="openReader('${a.id}')">${a.title}</p>
        <p class="t-body mb-md" style="font-size:.875rem">${a.content.replace(/##.+\n/g,'').trim().substring(0,120)}…</p>
        <div class="flex flex-wrap gap-sm">${chips(a.tags)}</div>
      </div>
      <div class="article-actions">
        <button class="article-btn" title="Read" onclick="openReader('${a.id}')"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
        ${adminMode ? `
        <button class="article-btn" title="Edit" onclick="openForm('${a.id}')"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
        <button class="article-btn del" title="Delete" onclick="delArticle('${a.id}')"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>` : ''}
      </div>
    </div>`).join('') : '<p class="t-body" style="color:var(--t4);padding-top:48px">No articles found.</p>';
  setTimeout(initReveals, 50);
}

window.openReader = id => {
  const a = articles.find(x=>x.id===id);
  if (!a) return;
  document.getElementById('reader-content').innerHTML = `
    <p class="t-label mb-md">${a.category} · ${a.readTime} read · ${fmtDate(a.date)}</p>
    <h1 style="font-family:'Playfair Display',serif;font-size:clamp(1.5rem,4vw,2.5rem);font-weight:500;line-height:1.15;letter-spacing:-.025em;color:var(--t1);margin-bottom:20px">${a.title}</h1>
    <p class="t-small mb-lg" style="padding-bottom:32px;border-bottom:1px solid var(--b1)">By ${a.author}</p>
    <div>${mdToHtml(a.content)}</div>
    <div class="flex flex-wrap gap-sm mt-xl" style="padding-top:32px;border-top:1px solid var(--b1)">${chips(a.tags)}</div>`;
  document.getElementById('reader').classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.openForm = id => {
  editingId = id || null;
  const a = id ? articles.find(x=>x.id===id) : null;
  document.getElementById('f-mode').textContent = a ? 'Edit article' : 'New article';
  document.getElementById('f-title').value = a ? a.title : '';
  document.getElementById('f-category').value = a ? a.category : 'Software Engineering';
  document.getElementById('f-readtime').value = a ? a.readTime : '5 min';
  document.getElementById('f-tags').value = a ? a.tags.join(', ') : '';
  document.getElementById('f-content').value = a ? a.content : '';
  document.getElementById('art-form').classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.delArticle = id => {
  if (!confirm('Delete this article?')) return;
  articles = articles.filter(a=>a.id!==id);
  saveArticles();
  renderArticles(document.getElementById('art-search').value.toLowerCase());
  toast('Article deleted');
};

document.getElementById('page-content').innerHTML = `
  <div class="page-top"><div class="wrap">
    <p class="kicker" style="animation:fadeUp .6s ease both">Writing</p>
    <h1 class="t-headline" style="animation:fadeUp .6s .08s ease both">Articles</h1>
    <p class="t-body" style="max-width:480px;margin-top:10px;animation:fadeUp .6s .16s ease both">Technical writing on software engineering, test automation, and data analytics.</p>
  </div></div>
  <section class="section"><div class="wrap">
    <div class="flex flex-wrap gap-md items-center mb-lg" style="flex-wrap:wrap">
      <div class="search-wrap"><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"/></svg><input class="search-input" id="art-search" placeholder="Search articles…"></div>
      <button class="btn btn-outline" id="admin-btn" style="font-size:.75rem;padding:8px 14px">🔐 Admin</button>
      <button class="btn btn-dark" id="new-btn" style="font-size:.75rem;padding:8px 14px;display:none">+ New Article</button>
    </div>
    <div id="admin-bar" style="display:none" class="admin-bar">⚠ Admin mode on — you can add, edit and delete articles</div>
    <div id="articles-list"></div>
  </div></section>

  <!-- Reader overlay -->
  <div id="reader">
    <div class="reader-inner">
      <button class="reader-close" id="reader-close">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        Close
      </button>
      <div id="reader-content"></div>
    </div>
  </div>

  <!-- Article form overlay -->
  <div id="art-form">
    <div class="reader-inner">
      <button class="reader-close" id="form-close">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        Cancel
      </button>
      <p class="kicker mb-lg" id="f-mode">New article</p>
      <div style="display:flex;flex-direction:column;gap:16px">
        <div><p class="t-label mb-sm">Title *</p><input class="input" id="f-title" placeholder="Article title…"></div>
        <div class="form-cols">
          <div><p class="t-label mb-sm">Category</p><select class="input" id="f-category"><option>Software Engineering</option><option>Test Automation</option><option>Data Analytics</option><option>Machine Learning</option><option>DevOps</option><option>General</option></select></div>
          <div><p class="t-label mb-sm">Read Time</p><input class="input" id="f-readtime" placeholder="5 min"></div>
        </div>
        <div><p class="t-label mb-sm">Tags (comma-separated)</p><input class="input" id="f-tags" placeholder="React, Testing, Python…"></div>
        <div><p class="t-label mb-sm">Content (use ## for headings)</p><textarea class="input" id="f-content" rows="14" placeholder="Write your article here…" style="resize:vertical;line-height:1.6;font-family:'JetBrains Mono',monospace;font-size:.8125rem"></textarea></div>
        <button class="btn btn-dark" id="f-save">Save Article</button>
      </div>
    </div>
  </div>`;

renderArticles();
initShared('articles', '../');

document.getElementById('art-search').addEventListener('input', e => renderArticles(e.target.value.toLowerCase()));
document.getElementById('admin-btn').addEventListener('click', () => {
  adminMode = !adminMode;
  document.getElementById('admin-btn').textContent = adminMode ? '🔓 Admin on' : '🔐 Admin';
  document.getElementById('new-btn').style.display = adminMode ? 'inline-flex' : 'none';
  document.getElementById('admin-bar').style.display = adminMode ? 'flex' : 'none';
  renderArticles(document.getElementById('art-search').value.toLowerCase());
});
document.getElementById('new-btn').addEventListener('click', () => openForm(null));
document.getElementById('reader-close').addEventListener('click', () => { document.getElementById('reader').classList.remove('open'); document.body.style.overflow = ''; });
document.getElementById('form-close').addEventListener('click', () => { document.getElementById('art-form').classList.remove('open'); document.body.style.overflow = ''; editingId = null; });
document.getElementById('f-save').addEventListener('click', () => {
  const title = document.getElementById('f-title').value.trim();
  const content = document.getElementById('f-content').value.trim();
  if (!title || !content) { toast('Title and content are required', 'err'); return; }
  const data = { title, content, category: document.getElementById('f-category').value, readTime: document.getElementById('f-readtime').value||'5 min', tags: document.getElementById('f-tags').value.split(',').map(t=>t.trim()).filter(Boolean), author:'Tapash Sutradhar', date: new Date().toISOString().split('T')[0] };
  if (editingId) { articles = articles.map(a=>a.id===editingId?{...a,...data}:a); toast('Article updated'); }
  else { articles = [{...data,id:Date.now().toString()},...articles]; toast('Article published'); }
  saveArticles();
  document.getElementById('art-form').classList.remove('open');
  document.body.style.overflow = '';
  editingId = null;
  renderArticles(document.getElementById('art-search').value.toLowerCase());
});
