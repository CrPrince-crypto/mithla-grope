const commonsFile = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const members = [
  { name: 'Santosh Kumar Roy', village: 'Kariyaut' },
  { name: 'Raushan Kumar Ray', village: 'Ladniya' },
  { name: 'Ram Kumar Ray', village: 'Mahdeva' },
  { name: 'Dipak Kumar Ray', village: 'Khushiyalpatti' },
  { name: 'Manish Kumar Roy', village: 'Kariyaut' },
  { name: 'Dharmendr Kumar Ray', village: 'Kariyaut' },
  { name: 'Sidhant Kumar Ray', village: 'Kariyaut' },
  { name: 'Ram Kumar Ray (Kaila)', village: 'Kariyaut' },
  { name: 'Jitender Kumar Ray', village: 'Kariyaut' },
  { name: 'Nagender Kumar Ray', village: 'Kariyaut' },
  { name: 'Shiv Kumar Ray (Premi)', village: 'Kariyaut' },
  { name: 'Sanjay Kumar Ray', village: 'Kariyaut' },
  { name: 'Dinesh Kumar Ray', village: 'Kariyaut' },
  { name: 'Rampukar Ray', village: 'Kariyaut' },
  { name: 'Shiv Kumar Ray', village: 'Ladniya' },
  { name: 'Nitish Kumar Ray', village: 'Ladniya' },
  { name: 'Satish Kumar Ray', village: 'Ladniya' },
  { name: 'Sanjit Kumar Ray', village: 'Ladniya' },
  { name: 'Abhinandan (Santosh2)', village: 'Nepal (Kariot)' },
  { name: 'Govind Kumar Ray', village: 'Kadampura' },
  { name: 'Sanjiv Kumar Ray', village: 'Tharuwahi' },
  { name: 'Ranjit Kumar Ray', village: 'Tharuwahi' },
  { name: 'Ganga Ram Ray', village: 'Mahdeva' },
  { name: 'Ganesh Ray', village: 'Mahdeva' },
  { name: 'Ramnath Ray', village: 'Mahdeva' },
  { name: 'Shyam Narayan Ray', village: 'Mahdeva' },
  { name: 'Laxman Ray', village: 'Jauhari' },
  { name: 'Chandkumar Ray', village: 'Khushiyalpatti' },
  { name: 'Kishan Mohan Tiwari', village: 'Jhanjharpur' },
  { name: 'Sunil Sothi Parjapti', village: 'Aajamgarh (UP)' },
  { name: 'Umar Farooq', village: 'Madhubani' },
];

const stats = [
  { label: 'Total Members', value: '31', icon: '👥', tone: 'blue' },
  { label: 'Monthly Contribution per Member', value: '₹1000', icon: '₹', tone: 'violet' },
  { label: 'Monthly Collection', value: '₹31,000', icon: '💳', tone: 'emerald' },
  { label: 'Active Community', value: '100%', icon: '↗', tone: 'rose' },
];

const culturalImages = [
  {
    title: 'Madhubani Painting',
    file: 'Madhubani painting.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Madhubani_painting.jpg',
  },
  {
    title: 'Mithila Painting Artist',
    file: 'Dilli Haat Madhubani Mithila Painting Artist.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Dilli_Haat_Madhubani_Mithila_Painting_Artist.jpg',
  },
  {
    title: 'Madhubani Paintings',
    file: 'Madhubani paintings or Milithila Painting -IMG 0028.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Madhubani_paintings_or_Milithila_Painting_-IMG_0028.jpg',
  },
  {
    title: 'Mithila at Patna Junction',
    file: 'Mithila Painting at Patna Junction.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Mithila_Painting_at_Patna_Junction.jpg',
  },
  {
    title: 'Madhubani Exhibition',
    file: 'Madhubani Painting Exhibition.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Madhubani_Painting_Exhibition.jpg',
  },
  {
    title: 'Traditional Madhubani Motifs',
    file: 'Madhubani.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Madhubani.jpg',
  },
];

const storyPillars = [
  ['Unity', 'One circle where every member feels seen, respected, and supported.'],
  ['Trust', 'Clear monthly contribution habits create confidence across families and villages.'],
  ['Saving Culture', 'A disciplined ₹1000 ritual turns small action into collective strength.'],
  ['Heritage', 'Mithila identity brings warmth, color, memory, and pride into a modern system.'],
];

const dashboardActions = [
  ['Add member', '+'],
  ['Remove member', '−'],
  ['Update payment', '✓'],
  ['View report', '▣'],
  ['Export data', '⇩'],
];

const icon = (symbol, label = '') => `<span class="icon" aria-hidden="true">${symbol}</span>${label ? `<span>${label}</span>` : ''}`;
const imageUrl = (image, width = 1200) => commonsFile(image.file, width);

function divider(label) {
  return `
    <div class="mithila-divider reveal" aria-hidden="true">
      <span></span><i>✦</i><b>${label}</b><i>✦</i><span></span>
    </div>
  `;
}

function section({ eyebrow, title, body, id = '', className = '' }) {
  return `
    <section ${id ? `id="${id}"` : ''} class="section ${className} reveal">
      <div class="section-heading">
        ${eyebrow ? `<p class="eyebrow">${icon('✦', eyebrow)}</p>` : ''}
        <h2>${title}</h2>
      </div>
      ${body}
    </section>
  `;
}

function memberCard(member, index) {
  const spotlight = index % 7 === 0 ? ' spotlight' : '';
  return `
    <article class="member-card glass-card reveal${spotlight}" style="--delay:${(index % 8) * 0.035}s">
      <div class="member-topline">
        <div class="avatar">${member.name.charAt(0)}</div>
        <span class="status"><i></i> Active</span>
      </div>
      <h3>${member.name}</h3>
      <p>Village: ${member.village}</p>
      <div class="contribution-box">
        <span>Contribution</span>
        <strong>₹1000</strong>
      </div>
    </article>
  `;
}

function galleryCard(image, index) {
  return `
    <article class="gallery-card glass-card reveal ${index % 3 === 0 ? 'tall' : ''}" style="--delay:${index * 0.06}s">
      <img src="${imageUrl(image, 1100)}" alt="${image.title}" loading="lazy" />
      <div class="gallery-overlay">
        <span>Culture frame ${String(index + 1).padStart(2, '0')}</span>
        <h3>${image.title}</h3>
      </div>
    </article>
  `;
}

function render() {
  const doubledMembers = [...members, ...members];
  const heroImage = imageUrl(culturalImages[0], 1600);
  const storyImage = imageUrl(culturalImages[1], 1400);

  document.body.insertAdjacentHTML('afterbegin', '<div class="cursor-glow" aria-hidden="true"></div><div class="cursor-trail" aria-hidden="true"></div>');
  document.querySelector('.background-orbs').innerHTML = Array.from({ length: 26 }, (_, index) => (
    `<span class="particle" style="--x:${(index * 17) % 96}%;--y:${8 + ((index * 29) % 84)}%;--delay:${index * 0.38}s"></span>`
  )).join('');

  document.querySelector('#top').innerHTML = `
    <div class="developer-credit reveal visible" aria-label="Developer credit">
      <span class="credit-orb" aria-hidden="true"></span>
      <p>Developed by <strong>Ghanshyam Roy</strong></p>
      <span class="credit-spark" aria-hidden="true">✦</span>
    </div>

    <header class="hero" style="--hero-art:url('${heroImage}')">
      <span class="light-streak streak-one" aria-hidden="true"></span>
      <span class="light-streak streak-two" aria-hidden="true"></span>
      <div class="cultural-halo halo-one" aria-hidden="true"></div>
      <div class="cultural-halo halo-two" aria-hidden="true"></div>
      <div class="hero-art-card art-card-one glass-card" aria-hidden="true"><img src="${imageUrl(culturalImages[2], 640)}" alt="" /></div>
      <div class="hero-art-card art-card-two glass-card" aria-hidden="true"><img src="${imageUrl(culturalImages[5], 540)}" alt="" /></div>
      <div class="hero-panel glass-card reveal visible">
        <div class="hero-copy">
          <p class="trust-pill">${icon('✓', 'Mithila heritage meets modern collective finance')}</p>
          <h1><span>Mithila</span> Society Group</h1>
          <p class="subtitle">Together We Save, Together We Grow — a premium savings circle inspired by trust, culture, and community pride.</p>
          <div class="hero-actions">
            <a class="btn primary magnetic" href="#members">Join Group <span>→</span></a>
            <a class="btn ghost magnetic" href="#dashboard">Member Login</a>
          </div>
          <div class="hero-metrics" aria-label="Community highlights">
            <span><b>31</b> members</span>
            <span><b>₹31K</b> monthly circle</span>
            <span><b>100%</b> active</span>
          </div>
        </div>
        <aside class="founder-card glass-card" aria-label="Founder spotlight">
          <div class="founder-topline">
            <div class="crown">♛</div>
            <span>Founder</span>
          </div>
          <p class="overline">Founder Spotlight</p>
          <h2>Santosh Kumar Roy</h2>
          <p>Guiding the group with discipline, transparency, and a shared vision for stronger monthly savings rooted in Mithila values.</p>
          <div class="verified">${icon('✓', 'Premium verified community leader')}</div>
        </aside>
      </div>
    </header>

    ${divider('Mithila • Trust • Growth')}

    ${section({
      eyebrow: 'Live statistics',
      title: 'Transparent numbers, wrapped in a premium cultural glow.',
      body: `<div class="stats-grid">${stats.map((stat, index) => `
        <article class="stat-card glass-card tone-${stat.tone}" style="--delay:${index * 0.08}s">
          <div class="stat-icon">${stat.icon}</div>
          <strong data-count="${stat.value}">${stat.value}</strong>
          <span>${stat.label}</span>
        </article>
      `).join('')}</div>`,
    })}

    ${divider('Members')}

    ${section({
      id: 'members',
      eyebrow: 'Member showcase',
      title: 'A cinematic member carousel — the living heart of the society.',
      className: 'members-section',
      body: `
        <div class="member-stage glass-card">
          <div class="stage-art" style="background-image:url('${imageUrl(culturalImages[3], 1200)}')"></div>
          <div class="member-slider" aria-label="Auto sliding member showcase">
            <div class="edge left"></div>
            <div class="edge right"></div>
            <div class="member-track">${doubledMembers.map(memberCard).join('')}</div>
          </div>
          <div class="slider-dots" aria-hidden="true"><span></span><i></i><i></i><i></i></div>
        </div>
      `,
    })}

    ${divider('Saving Ritual')}

    ${section({
      eyebrow: 'Contribution status',
      title: 'Monthly saving culture, made simple and beautiful.',
      body: `
        <div class="contribution-grid">
          <div class="glass-card contribution-summary">
            <article class="paid"><span>Paid</span><strong>28 members</strong></article>
            <article class="pending"><span>Pending</span><strong>3 members</strong></article>
            <article class="total"><span>Total collected</span><strong>₹31,000</strong></article>
          </div>
          <div class="glass-card timeline">
            ${['Contribution window opens', 'Members submit ₹1000', 'Treasurer verifies payment', 'Monthly report shared'].map((item, index) => `
              <div class="timeline-row">
                <b>${index + 1}</b>
                <div><h3>${item}</h3><p>Simple, visible, and easy to understand for every member.</p></div>
              </div>
            `).join('')}
          </div>
        </div>
      `,
    })}

    ${divider('Story')}

    ${section({
      eyebrow: 'Mithila story',
      title: 'Where heritage becomes a modern promise of growth.',
      className: 'story-section',
      body: `
        <div class="story-split">
          <div class="story-image glass-card parallax-card">
            <img src="${storyImage}" alt="Mithila painting artist creating Madhubani art" loading="lazy" />
            <div class="quote-card glass-card">“Every contribution is a promise — every promise becomes shared strength.”</div>
          </div>
          <div class="story-copy">
            <p>Mithila Society Group brings families, villages, and friends into one disciplined circle of support. The design celebrates Madhubani linework and Bihar's cultural warmth while keeping the clarity of a modern startup dashboard.</p>
            <div class="pillar-grid">
              ${storyPillars.map(([title, text]) => `<article class="glass-card"><h3>${title}</h3><p>${text}</p></article>`).join('')}
            </div>
          </div>
        </div>
      `,
    })}

    ${divider('Moments')}

    ${section({
      eyebrow: 'Premium gallery',
      title: 'Immersive cultural frames with modern glass depth.',
      className: 'gallery-section',
      body: `<div class="gallery-grid">${culturalImages.map(galleryCard).join('')}</div>`,
    })}

    ${divider('Admin')}

    ${section({
      id: 'dashboard',
      eyebrow: 'Admin dashboard preview',
      title: 'Future-ready controls for simple management.',
      body: `<div class="dashboard-card glass-card">${dashboardActions.map(([label, symbol]) => `<button class="magnetic" type="button"><b>${symbol}</b><span>${label}</span></button>`).join('')}</div>`,
    })}

    <footer class="footer">
      <div class="glow-line"></div>
      <div>
        <div>
          <h2>Mithila Society Group</h2>
          <p>Contact: +91 XXXXX XXXXX · mithilasociety@example.com</p>
          <p class="credits">Cultural imagery sourced from <a href="https://commons.wikimedia.org/wiki/Category:Madhubani_painting" target="_blank" rel="noreferrer">Wikimedia Commons Madhubani painting collection</a>.</p>
        </div>
        <nav aria-label="Social links">
          <a class="magnetic" href="#top">✉</a>
          <a class="magnetic" href="#members">👥</a>
          <a class="magnetic" href="#dashboard">✦</a>
        </nav>
      </div>
    </footer>
  `;
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal, .stat-card, .member-card, .gallery-card, .dashboard-card button, .pillar-grid article');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((element) => observer.observe(element));
}

function attachInteractiveLighting() {
  const cursorGlow = document.querySelector('.cursor-glow');
  const cursorTrail = document.querySelector('.cursor-trail');
  const tiltCards = document.querySelectorAll('.glass-card');
  const magneticItems = document.querySelectorAll('.magnetic');

  window.addEventListener('pointermove', (event) => {
    const { clientX, clientY } = event;
    document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
    cursorGlow.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    cursorTrail.animate(
      { transform: `translate3d(${clientX}px, ${clientY}px, 0)` },
      { duration: 650, fill: 'forwards', easing: 'cubic-bezier(.2,.8,.2,1)' },
    );
  }, { passive: true });

  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -7;
      const ry = ((x / rect.width) - 0.5) * 7;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      card.style.setProperty('--rx', `${rx}deg`);
      card.style.setProperty('--ry', `${ry}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });

  magneticItems.forEach((item) => {
    item.addEventListener('pointermove', (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
      item.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    });

    item.addEventListener('pointerleave', () => {
      item.style.transform = '';
    });
  });
}

render();
revealOnScroll();
attachInteractiveLighting();
