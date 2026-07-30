(() => {
  'use strict';

  const body = document.body;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ===== WORK THUMBNAIL LOADING =====
  const workCards = document.querySelectorAll('#work .card:not(.card--placeholder)');
  workCards.forEach((card) => {
    const backgroundValue = window.getComputedStyle(card).backgroundImage;
    const backgroundMatch = backgroundValue.match(/^url\(["']?(.*?)["']?\)$/);

    if (!backgroundMatch) {
      card.classList.add('is-image-loaded');
      return;
    }

    const thumbnail = new Image();
    let revealStarted = false;
    const revealCard = async () => {
      if (revealStarted) return;
      revealStarted = true;

      if (typeof thumbnail.decode === 'function') {
        try {
          await thumbnail.decode();
        } catch (error) {
          // The load event still confirms the thumbnail is downloaded.
        }
      }

      window.requestAnimationFrame(() => card.classList.add('is-image-loaded'));
    };

    thumbnail.addEventListener('load', revealCard, { once: true });
    thumbnail.addEventListener('error', () => card.classList.add('is-image-loaded'), { once: true });
    thumbnail.src = backgroundMatch[1];

    if (thumbnail.complete && thumbnail.naturalWidth > 0) {
      revealCard();
    }
  });

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
    const fadeDuration = 400;
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

  // ===== HEADER SCROLL STATE =====
  const blurredBar = document.getElementById('blurredBar');
  const updateHeaderScrollState = () => {
    const scrollY = Math.max(window.scrollY || 0, 0);
    const isScrolled = scrollY > 0;

    body.classList.toggle('header-compact', isScrolled);
    body.classList.toggle('logo-text-active', isScrolled);

    if (blurredBar) {
      if (scrollY > 10) {
        blurredBar.classList.add('visible');
      } else {
        blurredBar.classList.remove('visible');
      }
    }
  };
  updateHeaderScrollState();
  window.addEventListener('scroll', updateHeaderScrollState, { passive: true });

  // ===== HERO BACKGROUND =====
  const band = document.querySelector('.bg-band');
  if (band) {
    const backgroundSrc = band.dataset.backgroundSrc;
    const revealHeroBackground = () => {
      window.requestAnimationFrame(() => band.classList.add('is-ready'));
    };

    if (backgroundSrc) {
      const backgroundImage = new Image();
      let backgroundRevealed = false;
      const revealLoadedBackground = async () => {
        if (backgroundRevealed) return;
        backgroundRevealed = true;
        if (typeof backgroundImage.decode === 'function') {
          try {
            await backgroundImage.decode();
          } catch (error) {
            // The load event still confirms the image is fully downloaded.
          }
        }
        revealHeroBackground();
      };

      backgroundImage.addEventListener('load', revealLoadedBackground, { once: true });
      backgroundImage.src = backgroundSrc;
      if (backgroundImage.complete && backgroundImage.naturalWidth > 0) {
        revealLoadedBackground();
      }
    } else {
      revealHeroBackground();
    }

    if (!prefersReducedMotion.matches) {
      let parallaxTicking = false;
      const updateHeroParallax = () => {
        const offset = -Math.min(Math.max(window.scrollY || 0, 0) * 0.18, 100);
        band.style.setProperty('--hero-parallax-offset', `${offset}px`);
        parallaxTicking = false;
      };
      const requestHeroParallaxUpdate = () => {
        if (parallaxTicking) return;
        parallaxTicking = true;
        window.requestAnimationFrame(updateHeroParallax);
      };

      requestHeroParallaxUpdate();
      window.addEventListener('scroll', requestHeroParallaxUpdate, { passive: true });
    }
  }

  // ===== COPY EMAIL + TOAST =====
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
