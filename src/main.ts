// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const btnEl = document.getElementById('mobile-menu-button') as HTMLButtonElement | null;
  const panelEl = document.getElementById('mobile-menu');
  if (!btnEl || !panelEl) return;
  const btn = btnEl;
  const panel = panelEl; // narrowed non-null

  function setOpen(open: boolean) {
    btn.setAttribute('aria-expanded', String(open));
    if (open) {
      // Show immediately, then trigger transition on next frame
      panel.classList.remove('hidden');
      panel.setAttribute('data-open', 'false');
      requestAnimationFrame(() => {
        panel.setAttribute('data-open', 'true');
      });
    } else {
      // Start closing animation, then hide after transition ends
      panel.setAttribute('data-open', 'false');
      const done = () => {
        panel.classList.add('hidden');
        panel.removeEventListener('transitionend', done);
      };
      panel.addEventListener('transitionend', done);
      // Fallback hide in case transitionend doesn't fire
      setTimeout(() => {
        if (panel.getAttribute('data-open') === 'false') panel.classList.add('hidden');
      }, 220);
    }
  }

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    if (!open) return;

    if (e.target instanceof Element && (btn.contains(e.target) || panel.contains(e.target))) return;
    setOpen(false);
  });

  // Close when clicking a menu link
  panel.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setOpen(false));
  });

  // Scroll reveal animations using IntersectionObserver
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    const els = document.querySelectorAll<HTMLElement>('[data-animate]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute('data-in', 'true');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );

    els.forEach((el) => io.observe(el));
  } else {
    // If reduced motion, show all immediately
    document
      .querySelectorAll<HTMLElement>('[data-animate]')
      .forEach((el) => el.setAttribute('data-in', 'true'));
  }
});
