(() => {
  'use strict';

  const body = document.body;
  if (body) body.classList.remove('no-js');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ===== REVEAL ON SCROLL =====
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      revealEls.forEach((el) => observer.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('show'));
    }
  }

  // ===== YEAR =====
  const yearEl = document.getElementById('y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== SIDEPANEL =====
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const panel = document.getElementById('sidepanel');
  const overlay = document.getElementById('overlay');

  if (panel?.hasAttribute('data-init-hidden')) {
    requestAnimationFrame(() => {
      panel.style.removeProperty('transform');
      if (!panel.getAttribute('style')) {
        panel.removeAttribute('style');
      }
      panel.removeAttribute('data-init-hidden');
    });
  }

  const openMenu = () => {
    if (!panel) return;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    menuBtn?.setAttribute('aria-expanded', 'true');
    if (overlay) {
      overlay.classList.add('show');
      overlay.hidden = false;
    }
  };

  const closeMenu = () => {
    if (!panel) return;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    menuBtn?.setAttribute('aria-expanded', 'false');
    if (overlay) {
      overlay.classList.remove('show');
      overlay.hidden = true;
    }
  };

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  if (panel) {
    panel.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href') || '';
        if (href === '#top') {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMenu();
      });
    });
  }

  // ===== NAV HIGHLIGHT =====
  const sidepanelNav = document.querySelector('.sidepanel nav');
  const navHighlight = document.getElementById('sidepanelNavHighlight');
  if (sidepanelNav && navHighlight) {
    const moveHighlightTo = (link) => {
      navHighlight.style.top = `${link.offsetTop}px`;
      navHighlight.style.height = `${link.offsetHeight}px`;
      navHighlight.classList.add('visible');
    };
    const hideHighlight = () => navHighlight.classList.remove('visible');
    sidepanelNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseenter', () => moveHighlightTo(link));
      link.addEventListener('focus', () => moveHighlightTo(link));
      link.addEventListener('mouseleave', hideHighlight);
      link.addEventListener('blur', hideHighlight);
    });
  }

  // ===== SMOOTH SCROLL TOP =====
  const logoLink = document.querySelector('.logo');
  if (logoLink) {
    logoLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== PAGE FADE TRANSITION =====
  const galleryLinks = document.querySelectorAll('#work .card[href]');
  if (galleryLinks.length && !prefersReducedMotion.matches) {
    const fadeDuration = 220;
    galleryLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        if (
          event.defaultPrevented ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0 ||
          link.target === '_blank'
        ) {
          return;
        }

        const href = link.href;
        if (!href) return;

        event.preventDefault();

        if (body.classList.contains('page-transition--active')) {
          return;
        }

        body.classList.add('page-transition');
        window.requestAnimationFrame(() => {
          body.classList.add('page-transition--active');
        });

        window.setTimeout(() => {
          window.location.href = href;
        }, fadeDuration);
      });
    });
  }

  // ===== HEADER BLUR =====
  const blurredBar = document.getElementById('blurredBar');
  if (blurredBar) {
    const toggleHeaderBlur = () => {
      if (window.scrollY > 10) {
        blurredBar.classList.add('visible');
      } else {
        blurredBar.classList.remove('visible');
      }
    };
    toggleHeaderBlur();
    window.addEventListener('scroll', toggleHeaderBlur, { passive: true });
  }

  // ===== HERO PARALLAX =====
  const band = document.querySelector('.bg-band');
  if (band) {
    window.requestAnimationFrame(() => band.classList.add('is-ready'));
    if (!prefersReducedMotion.matches) {
      let bandTicking = false;
      const updateBand = () => {
        bandTicking = false;
        const y = window.scrollY || 0;
        const offset = Math.round(-y * 0.6);
        band.style.setProperty('--bg-offset', `${offset}px`);
      };
      const requestBandUpdate = () => {
        if (!bandTicking) {
          bandTicking = true;
          requestAnimationFrame(updateBand);
        }
      };
      requestBandUpdate();
      window.addEventListener('scroll', requestBandUpdate, { passive: true });
    }
  }

  // ===== COPY EMAIL + TOAST =====
  const heroText = document.querySelector('.hero__text');
  if (heroText) {
    const revealHeroCopy = () => heroText.classList.remove('hero__text--hidden');
    if (window.innerWidth <= 640) {
      const onScrollReveal = () => {
        if (window.scrollY > 24) {
          revealHeroCopy();
          window.removeEventListener('scroll', onScrollReveal);
        }
      };
      window.addEventListener('scroll', onScrollReveal, { passive: true });
    } else {
      revealHeroCopy();
    }
  }

  const showToast = (msg) => {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  };

  const emailLink = document.querySelector('a[href^="mailto:hello@rarebonesstudio.com"]');
  if (emailLink) {
    emailLink.addEventListener('click', async (event) => {
      try {
        event.preventDefault();
        await navigator.clipboard.writeText('hello@rarebonesstudio.com');
        showToast('Email copied');
      } catch (error) {
        window.location.href = emailLink.href;
      }
    });
  }
})();
