/**
 * Jared's Leads — UI Components
 * Each function returns an HTML string for a reusable section.
 * Call renderPage() to mount everything, or use individual
 * render*() functions to inject sections on demand.
 */

/* =====================
   NAV
===================== */
function renderNav() {
  return `
  <nav class="jl-nav">
    <div class="jl-logo">
      <img src="logo.png" alt="Jared's Leads Logo" class="jl-logo-img">
    </div>
    <ul class="jl-nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Solutions</a></li>
      <li><a href="#">Industries</a></li>
      <li><a href="#">How It Works</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="jl-nav-right">
      <span class="jl-phone">📞 866-532-3788</span>
      <button class="jl-btn-primary">Build Your List</button>
    </div>
  </nav>`;
}

/* =====================
   HERO
===================== */
function renderHero() {
  const checks = [
    '98%+ Deliverability',
    'No Minimums',
    'No Contracts'
  ].map(label => `
    <div class="jl-hero-check">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="7" fill="#22C55E"/>
        <path d="M4 7l2 2 4-4" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <span>${label}</span>
    </div>`).join('');

  return `
  <section class="jl-hero">
    <div style="position:absolute;top:0;right:0;width:50%;height:100%;background:radial-gradient(ellipse at 80% 30%,rgba(232,83,42,.08) 0%,transparent 65%);pointer-events:none;"></div>
    <div class="jl-hero-grid">
      <div class="jl-hero-content">
        <div class="jl-hero-eyebrow">Data-Driven Lead Generation</div>
        <h1 class="jl-hero-h1">
          Targeted Mailing Lists,<br>
          Email Lists, and<br>
          Sales Leads <span class="accent">Built<br>for Your Business</span>
        </h1>
        <p class="jl-hero-sub">
          Since 2007, Jared's Leads has helped businesses connect with the right prospects using verified data.
          Business lists, consumer lists, email lists, telemarketing, and direct mail — all in one place.
        </p>
        <div class="jl-hero-ctas">
          <button class="jl-cta-hero">Build Your List</button>
          <button class="jl-cta-secondary">Get a Free Quote</button>
        </div>
        <div class="jl-hero-checks">${checks}</div>
      </div>
      <div class="jl-hero-img-col">
        <div class="jl-hero-person">
          <img src="Hero.png" alt="Hero Image" class="jl-hero-img">
        </div>
        <div class="jl-hero-badge">
          <div class="jl-hero-badge-icon">📊</div>
          <div class="jl-hero-badge-text">
            <strong>22M+</strong>
            <span>Business Records</span>
          </div>
        </div>
        <div class="jl-hero-badge2">
          <strong>200M+</strong>
          <span>Consumer Records</span>
        </div>
      </div>
    </div>
  </section>`;
}

/* =====================
   STATS BAR
===================== */
function renderStats() {
  const stats = [
    { icon: '📈', num: '4X',  label: 'Business Growth' },
    { icon: '🏆', num: '17+', label: 'Years of Experience' },
    { icon: '✅', num: 'A+',  label: 'Data Accuracy' },
    { icon: '💬', num: '24/7',label: 'Support' },
  ];

  const items = stats.map(s => `
    <div class="jl-stat-item">
      <div class="jl-stat-icon">${s.icon}</div>
      <div>
        <div class="jl-stat-num">${s.num}</div>
        <div class="jl-stat-label">${s.label}</div>
      </div>
    </div>`).join('');

  return `
  <div class="jl-stats">
    <div class="jl-stats-inner">${items}</div>
  </div>`;
}

/* =====================
   CATEGORY STRIP
===================== */
function renderCategoryStrip() {
  const categories = [
    { icon: '📬', title: 'Mailing Lists',       desc: 'Target verified B2B & B2C audiences by industry, location, and demographics.', link: 'View Mailing Lists →',   active: true  },
    { icon: '📧', title: 'Email Lists',          desc: 'Reach inboxes with opt-in, high-deliverability email databases.',              link: 'Browse Email Lists →',  active: false },
    { icon: '📞', title: 'Telemarketing Lists',  desc: 'Connect faster using phone-verified, DNC-compliant contact data.',             link: 'Explore Call Lists →',  active: false },
    { icon: '🔧', title: 'Data Services',        desc: 'Clean, enhance, and validate your data with professional services.',           link: 'View Data Services →',  active: false },
    { icon: '✉️', title: 'Direct Mail',          desc: 'Full-service direct mail campaigns from design to delivery.',                  link: 'Start Direct Mail →',   active: false },
    { icon: '📚', title: 'Resources',            desc: 'Guides, insights, and strategies to improve your lead generation ROI.',       link: 'Explore Resources →',   active: false },
  ];

  const items = categories.map(c => `
    <div class="jl-category-item${c.active ? ' active' : ''}">
      <div class="jl-cat-icon">${c.icon}</div>
      <div class="jl-cat-title">${c.title}</div>
      <p class="jl-cat-desc">${c.desc}</p>
      <a href="#" class="jl-cat-link">${c.link}</a>
    </div>`).join('');

  return `
  <section class="jl-category-strip">
    <div class="jl-category-inner">${items}</div>
  </section>`;
}

/* =====================
   PRODUCTS
===================== */
function renderProducts() {
  const products = [
    { num: '01', icon: '📬', title: 'Business Mailing Lists',  desc: 'Target B2B prospects by industry, SIC/NAICS code, employee size, and geography. Access 22M+ verified business records.', featured: true  },
    { num: '02', icon: '🏠', title: 'Consumer Mailing Lists',  desc: 'Reach households by demographics — age, income, homeownership, zip code. 200M+ consumer records nationwide.',           featured: false },
    { num: '03', icon: '📧', title: 'Email Lists',             desc: 'Targeted B2B and B2C email lists for digital campaigns. Verified, opt-in data with strong deliverability rates.',          featured: false },
    { num: '04', icon: '📞', title: 'Telemarketing Lists',     desc: 'Phone-verified lists for outbound calling campaigns. DNC-scrubbed and TCPA-compliant for worry-free outreach.',            featured: false },
    { num: '05', icon: '🔧', title: 'Data Services',           desc: 'CASS certification, NCOA processing, data appending, deduplication, and email verification to keep your lists clean.',    featured: false },
    { num: '06', icon: '✉️', title: 'Direct Mail Services',   desc: 'End-to-end direct mail — from design and print to delivery. Full-service campaigns that get results.',                    featured: false },
  ];

  const cards = products.map(p => `
    <div class="jl-product-card${p.featured ? ' featured' : ''}">
      <div class="jl-product-num">${p.num}</div>
      <div class="jl-product-icon">${p.icon}</div>
      <div class="jl-product-title">${p.title}</div>
      <div class="jl-product-desc">${p.desc}</div>
      <a href="#" class="jl-product-link">Explore →</a>
    </div>`).join('');

  return `
  <section class="jl-products">
    <div class="jl-section-header">
      <div class="jl-eyebrow-sm">Our Data Solutions</div>
      <h2 class="jl-section-h2">Everything You Need to<br>Reach the Right Audience</h2>
      <p class="jl-section-sub">Six core product categories built for businesses that need better data and better buyers.</p>
    </div>
    <div class="jl-products-grid">${cards}</div>
  </section>`;
}

/* =====================
   HOW IT WORKS
===================== */
function renderHowItWorks() {
  const steps = [
    { num: '01', icon: '🎯', title: 'Tell Us Your Target Audience', desc: 'Define your ideal customer by industry, location, demographics, or behavior.' },
    { num: '02', icon: '⚙️', title: 'We Build Your Custom List',    desc: 'Our experts compile and verify data from trusted sources with full hygiene.' },
    { num: '03', icon: '📥', title: 'Receive Verified Data',        desc: 'Download ready-to-use, deliverable lists in CSV, Excel, or mailing formats.' },
  ];

  const stepHTML = steps.map(s => `
    <div class="jl-how2-step">
      <div class="jl-how2-num">${s.num}</div>
      <div class="jl-how2-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join('');

  return `
  <section class="jl-how2">
    <div class="jl-how2-inner">
      <div class="jl-how2-header">
        <div class="jl-how2-eyebrow">Simple 3-Step Process</div>
        <h2 class="jl-how2-title">How It Works</h2>
        <p class="jl-how2-sub">Get your targeted list in 24–48 hours. No complexity, no long setup.</p>
      </div>
      <div class="jl-how2-steps">${stepHTML}</div>
      <div class="jl-how2-cta">
        <button class="jl-cta-main">Build Your List</button>
      </div>
    </div>
  </section>`;
}

/* =====================
   WHY SECTION
===================== */
function renderWhy() {
  const items = [
    { icon: '🏆', title: 'Inc. 5000 Recognized',           desc: "One of America's fastest-growing private companies — a third-party credibility marker that speaks for itself." },
    { icon: '🛡️', title: '98%+ Deliverability Guarantee',  desc: 'Multi-source verification, CASS certification, and regular data hygiene ensure clean, deliverable lists every time.' },
    { icon: '👤', title: 'Dedicated Account Manager',       desc: 'A real person who knows your business, available 24/7. Not a chatbot, not a ticket queue.' },
    { icon: '🔓', title: 'No Minimums, No Contracts',       desc: 'Start small or go big. Flexible list building with self-service and full-service options to match any budget.' },
  ];

  const itemsHTML = items.map(i => `
    <div class="jl-why-item">
      <div class="jl-why-item-icon">${i.icon}</div>
      <div>
        <div class="jl-why-item-title">${i.title}</div>
        <div class="jl-why-item-desc">${i.desc}</div>
      </div>
    </div>`).join('');

  return `
  <section class="jl-why">
    <div class="jl-why-grid">
      <div class="jl-why-img">
        <div class="jl-why-photo">
          <img src="About.jpg" alt="About Jared's Leads">
        </div>
        <div class="jl-why-float">
          <div class="jl-why-float-icon">✅</div>
          <div>
            <strong>98%+ Deliverability</strong>
            <span>Guaranteed on every list</span>
          </div>
        </div>
      </div>
      <div class="jl-why-content">
        <div class="jl-section-header">
          <div class="jl-eyebrow-sm">Why Choose Us</div>
          <h2 class="jl-section-h2">17 Years of Data<br>Expertise Behind<br>Every List</h2>
          <p class="jl-section-sub">We're not a data portal with a ticket number. We're a team of experts dedicated to your results.</p>
        </div>
        <div class="jl-why-items">${itemsHTML}</div>
      </div>
    </div>
  </section>`;
}

/* =====================
   TESTIMONIALS
===================== */
function renderTestimonials() {
  const testimonials = [
    { initials: 'MF', color: '#05306D', name: 'Michael F.',  role: 'VP Marketing, Private Financial Group',  text: '"Jared\'s Leads delivered exactly what they promised — a targeted, verified list that drove a 40% increase in direct mail response rate. The account support was exceptional."' },
    { initials: 'ST', color: '#185FA5', name: 'Sandra T.',   role: 'Owner, General Remodeling',              text: '"We\'ve used three other list providers over the years. None of them come close to the data quality Jared\'s delivers. The custom list building was fast and they truly understood our niche."' },
    { initials: 'DK', color: '#0F6E56', name: 'David K.',    role: 'Director, Southeast Insurance Partners',  text: '"As insurance agents, we invest in targeted lists constantly. Jared\'s consistently outperforms everyone else. They\'re the best data providers delivering the best ROI in the space."' },
  ];

  const cards = testimonials.map(t => `
    <div class="jl-testi-card">
      <div class="jl-testi-stars">★★★★★</div>
      <div class="jl-testi-text">${t.text}</div>
      <div class="jl-testi-author">
        <div class="jl-testi-avatar" style="background:${t.color};">${t.initials}</div>
        <div>
          <div class="jl-testi-name">${t.name}</div>
          <div class="jl-testi-role">${t.role}</div>
        </div>
      </div>
    </div>`).join('');

  return `
  <section class="jl-testimonials">
    <div class="jl-section-header">
      <div class="jl-hero-eyebrow">Client Feedback</div>
      <h2 class="jl-section-h2">What Our Clients Say</h2>
      <p class="jl-section-sub">Real results from businesses who trust Jared's Leads for their prospect data.</p>
    </div>
    <div class="jl-testi-grid">${cards}</div>
    <div style="text-align:center;margin-top:36px;">
      <button style="background:rgba(255,255,255,0.08);color:white;border:1px solid rgba(255,255,255,0.15);padding:11px 24px;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;cursor:pointer;">
        Read All Testimonials →
      </button>
    </div>
  </section>`;
}

/* =====================
   FAQ
===================== */
function renderFaq() {
  const faqs = [
    { q: 'What is a mailing list?',                                   a: 'A mailing list is a collection of contact data such as names, addresses, or emails used for marketing campaigns like direct mail, email outreach, and telemarketing.' },
    { q: 'How much does a mailing list cost?',                        a: 'Pricing varies by list type, targeting criteria, and volume. Costs typically range from a few cents to several dollars per record depending on quality and specificity.' },
    { q: 'What types of mailing lists are available?',                a: 'We offer business mailing lists, consumer mailing lists, email lists, telemarketing lists, direct mail services, and custom-built targeted data.' },
    { q: 'How do I buy a targeted email list?',                       a: 'You can request a custom list by defining your audience criteria such as industry, job title, location, or demographics. Our team builds and verifies your list before delivery.' },
    { q: 'What is the difference between a mailing list and an email list?', a: 'A mailing list contains physical postal addresses for direct mail campaigns, while an email list contains verified email addresses for digital marketing outreach.' },
    { q: 'How often is your data updated?',                           a: 'Our data is continuously updated through multiple source feeds, NCOA processing, and regular hygiene cycles to ensure maximum accuracy and deliverability.' },
    { q: 'Do you offer data hygiene and list cleaning services?',     a: 'Yes. Our Data Services include CASS certification, NCOA processing, deduplication, email verification, and data appending.' },
    { q: 'Can I get a sample list before purchasing?',                a: 'Yes — contact us to request a sample. We want you to be confident in the data quality before you commit.' },
  ];

  const items = faqs.map(f => `
    <div class="jl-faq-item">
      <div class="jl-faq-q">${f.q}</div>
      <div class="jl-faq-a">${f.a}</div>
    </div>`).join('');

  return `
  <section class="jl-faq">
    <div class="jl-section-header">
      <div class="jl-eyebrow-sm">Common Questions</div>
      <h2 class="jl-section-h2">Mailing List &amp; Data FAQs</h2>
      <p class="jl-section-sub">Everything you need to know about mailing lists, pricing, and data quality.</p>
    </div>
    <div class="jl-faq-grid">${items}</div>
  </section>`;
}

/* =====================
   BLOG
===================== */
function renderBlog() {
  const posts = [
    { img: '1st.png', tag: 'Direct Mail',   title: 'How to Build a High-Converting Direct Mail Campaign with a Targeted Mailing List', excerpt: 'The difference between a 1% response rate and a 5% response rate often comes down to list quality.', meta: 'March 2024 · 6 min read', bg: '#0B1628' },
    { img: '2nd.png', tag: 'Data Strategy', title: 'B2B vs. B2C Mailing Lists: What\'s the Difference and Which Do You Need?',         excerpt: 'Business and consumer lists are fundamentally different in how they\'re compiled, maintained, and structured.',  meta: 'February 2024 · 5 min read', bg: '#132035' },
    { img: '3rd.png', tag: 'Insurance',     title: 'The 7 Most Profitable Lead Types for Insurance Agents in 2024',                    excerpt: 'Insurance agents who invest in targeted leads consistently outperform those relying on referrals alone.',       meta: 'January 2024 · 7 min read', bg: '#1a2a1a' },
  ];

  const cards = posts.map(p => `
    <div class="jl-blog-card">
      <div class="jl-blog-img" style="background:${p.bg};">
        <img src="${p.img}" alt="${p.title}">
        <div class="jl-blog-tag">${p.tag}</div>
      </div>
      <div class="jl-blog-body">
        <div class="jl-blog-title">${p.title}</div>
        <div class="jl-blog-excerpt">${p.excerpt}</div>
        <div class="jl-blog-meta">${p.meta}</div>
      </div>
    </div>`).join('');

  return `
  <section class="jl-blog">
    <div class="jl-section-header">
      <div class="jl-eyebrow-sm">From the Blog</div>
      <h2 class="jl-section-h2">Lead Generation Insights</h2>
      <p class="jl-section-sub">Practical guides, industry data, and expert strategies to help you get more from your lists.</p>
    </div>
    <div class="jl-blog-grid">${cards}</div>
    <div style="text-align:center;margin-top:36px;">
      <button style="background:transparent;color:var(--coral);border:2px solid var(--coral);padding:12px 28px;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:14.5px;font-weight:600;cursor:pointer;">
        Explore All Resources →
      </button>
    </div>
  </section>`;
}

/* =====================
   TRUST BAR
===================== */
function renderTrustBar() {
  const badges = [
    '🏆 Inc. 5000 Honoree',
    '⭐ BBB A+ Rated',
    '✅ 98% Data Accuracy',
    '🔒 TCPA & CAN-SPAM Compliant',
  ];

  const badgesHTML = badges.map(b => `<div class="jl-trust-item">${b}</div>`).join('');
  const logosHTML  = ['BrandOne', 'BrandTwo', 'BrandThree'].map(l => `<div class="jl-dummy-logo">${l}</div>`).join('');

  return `
  <section class="jl-trust-bar">
    <div class="jl-trust-inner">
      <div class="jl-trust-label">Trusted &amp; Recognized</div>
      <div class="jl-trust-items">
        ${badgesHTML}
        <div class="jl-trust-logos">${logosHTML}</div>
      </div>
    </div>
  </section>`;
}

/* =====================
   CTA FOOTER
===================== */
function renderCtaFooter() {
  return `
  <section class="jl-cta-footer">
    <div style="position:absolute;top:-40px;right:-40px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.06);pointer-events:none;"></div>
    <div style="position:absolute;bottom:-60px;left:-30px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.04);pointer-events:none;"></div>
    <div class="jl-cta-footer-inner">
      <div>
        <h2 class="jl-cta-footer-h2">Ready to Build<br>Your List?</h2>
        <p class="jl-cta-footer-sub">Start reaching your ideal customers today. No minimums, no contracts.</p>
      </div>
      <div class="jl-cta-footer-btns">
        <button class="jl-btn-white">Get a Free Quote</button>
        <button class="jl-btn-outline-white">Build Your List</button>
      </div>
    </div>
  </section>`;
}

/* =====================
   FOOTER
===================== */
function renderFooter() {
  return `
  <footer class="jl-footer">
    <div class="jl-footer-grid">
      <div class="jl-footer-brand">
        <div class="jl-logo">
          <img src="logo.png" alt="Jared's Leads Logo" class="jl-logo-img">
        </div>
        <p>17+ years of data expertise helping businesses reach the right prospects with verified mailing lists and sales leads.</p>
      </div>
      <div>
        <div class="jl-footer-col-title">Solutions</div>
        <ul class="jl-footer-links">
          <li><a href="#">Mailing Lists</a></li>
          <li><a href="#">Consumer Lists</a></li>
          <li><a href="#">Email Lists</a></li>
          <li><a href="#">Telemarketing Lists</a></li>
          <li><a href="#">Direct Mail</a></li>
        </ul>
      </div>
      <div>
        <div class="jl-footer-col-title">Data Services</div>
        <ul class="jl-footer-links">
          <li><a href="#">List Hygiene</a></li>
          <li><a href="#">Data Appending</a></li>
          <li><a href="#">NCOA Processing</a></li>
          <li><a href="#">CASS Certification</a></li>
        </ul>
      </div>
      <div>
        <div class="jl-footer-col-title">Company</div>
        <ul class="jl-footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div>
        <div class="jl-footer-col-title">Legal</div>
        <ul class="jl-footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </div>
    </div>
    <div class="jl-footer-bottom">
      <p>© 2026 Jared's Leads Inc. All rights reserved.</p>
      <div class="jl-footer-legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>`;
}

/* =====================
   PAGE ASSEMBLER
   Renders all sections into #app (or any root element).
===================== */
function renderPage(rootSelector = '#app') {
  const root = document.querySelector(rootSelector);
  if (!root) { console.error(`renderPage: element "${rootSelector}" not found`); return; }

  root.innerHTML = `
  <div class="jl-page">
    ${renderNav()}
    ${renderHero()}
    ${renderStats()}
    ${renderCategoryStrip()}
    ${renderProducts()}
    ${renderHowItWorks()}
    ${renderWhy()}
    ${renderTestimonials()}
    ${renderFaq()}
    ${renderBlog()}
    ${renderTrustBar()}
    ${renderCtaFooter()}
    ${renderFooter()}
  </div>`;
}

/* =====================
   CATEGORY STRIP INTERACTIVITY
===================== */
function initCategoryStrip() {
  document.querySelectorAll('.jl-category-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.jl-category-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/* Auto-init on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
  renderPage('#app');
  initCategoryStrip();
});