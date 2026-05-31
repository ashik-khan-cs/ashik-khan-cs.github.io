(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll progress bar ── */
  const bar = document.createElement('div');
  bar.id = 'progress';
  document.body.appendChild(bar);

  const setProgress = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? Math.max(0, Math.min(1, window.scrollY / h)) : 0;
    document.documentElement.style.setProperty('--scroll', p.toFixed(3));
  };
  window.addEventListener('scroll', setProgress, { passive: true });
  setProgress();

  /* ── Typewriter for hero title ── */
  const titleEl = document.getElementById('hero-title');
  if (titleEl && !prefersReduced) {
    const target = (titleEl.getAttribute('data-typing') || titleEl.textContent).trim();
    const stored = sessionStorage.getItem('typedTitle');
    if (stored !== target && target && target.length <= 40) {
      titleEl.textContent = '';
      titleEl.classList.add('typing');
      let i = 0;
      const type = () => {
        titleEl.textContent = target.slice(0, i + 1);
        i++;
        if (i < target.length) setTimeout(type, 55);
        else {
          titleEl.classList.remove('typing');
          sessionStorage.setItem('typedTitle', target);
        }
      };
      setTimeout(type, 220);
    } else {
      titleEl.textContent = target;
    }
  }

  /* ── Reveal on scroll ── */
  const revealTargets = document.querySelectorAll(
    '.publication, .research-card, .education-card, .timeline-item, .achievement-card, .section-title, .updates-list li'
  );
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* ── Scroll spy for nav ── */
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const links = new Map(
    Array.from(document.querySelectorAll('.nav-menu a'))
      .map(a => [a.getAttribute('href').replace('#', ''), a])
  );
  const spy = () => {
    let active = sections[0] && sections[0].id;
    const buf = window.innerHeight * 0.25;
    for (const s of sections) {
      if (s.getBoundingClientRect().top - buf <= 0) active = s.id;
    }
    links.forEach((a, id) => a.classList.toggle('active', id === active));
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  /* ── Mobile nav toggle ── */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const spans = navToggle.querySelectorAll('span');
      const open  = navMenu.classList.contains('active');
      spans[0].style.transform = open ? 'rotate(-45deg) translate(-5px, 6px)' : '';
      spans[1].style.opacity   = open ? '0' : '1';
      spans[2].style.transform = open ? 'rotate(45deg) translate(-5px, -6px)' : '';
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '1';
        spans[2].style.transform = '';
      });
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = document.querySelector('.navbar')?.offsetHeight || 0;
        window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
      }
    });
  });

  /* ── Load publications from JSON ── */
  async function loadPublications() {
    try {
      const res = await fetch(`publications.json?v=${Date.now()}`);
      if (!res.ok) throw new Error('failed');
      const data = await res.json();
      renderPublications(data);
    } catch {
      /* fall back to static HTML publications */
    }
  }

  function renderPublications(data) {
    const list = document.querySelector('.publications-list');
    if (!list) return;
    list.innerHTML = '';
    data.publications.forEach(pub => {
      const article = document.createElement('article');
      article.className = 'publication reveal';
      article.innerHTML = `
        <div class="pub-thumb-wrap">
          <div class="pub-thumb-placeholder">${pub.title.slice(0, 40)}…</div>
        </div>
        <div class="pub-content">
          <h3>${pub.title}</h3>
          <p class="pub-authors">${pub.authors}</p>
          ${pub.venue ? `<p class="pub-venue">${pub.venue}</p>` : ''}
          ${pub.citations > 0 ? `<p class="pub-stats"><i class="fas fa-quote-right" aria-hidden="true"></i> Cited by ${pub.citations}</p>` : ''}
          ${pub.abstract ? `<p class="pub-abstract">${pub.abstract.slice(0, 500)}${pub.abstract.length > 500 ? '…' : ''}</p>` : ''}
          <div class="pub-links">
            ${pub.pub_url ? `<a class="pub-link" href="${pub.pub_url}" target="_blank" rel="noopener">Paper</a>` : ''}
            ${pub.scholar_url ? `<a class="pub-link" href="${pub.scholar_url}" target="_blank" rel="noopener">Scholar</a>` : ''}
          </div>
        </div>`;
      list.appendChild(article);
    });

    if (!prefersReduced && 'IntersectionObserver' in window) {
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io2.unobserve(e.target); } });
      }, { threshold: 0.08 });
      list.querySelectorAll('.publication').forEach(el => io2.observe(el));
    } else {
      list.querySelectorAll('.publication').forEach(el => el.classList.add('is-visible'));
    }
  }

  window.addEventListener('load', loadPublications);

  /* ── Alt+1-7 keyboard shortcuts ── */
  const ids = ['about', 'news', 'publications', 'research', 'education', 'experience', 'contact'];
  window.addEventListener('keydown', (e) => {
    if (e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
      const n = parseInt(e.key, 10);
      if (!isNaN(n) && n >= 1 && n <= ids.length) {
        const el = document.getElementById(ids[n - 1]);
        if (el) { el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' }); }
        e.preventDefault();
      }
    }
  });
})();
