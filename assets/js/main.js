/**
 * Gellyball & Low-Impact Tactical Gaming Arena
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. Dark/Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Check saved theme
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
    }
  }

  // 2.1 RTL/LTR Toggle
  const rtlToggles = document.querySelectorAll('#rtl-toggle, #rtl-toggle-mobile');
  const htmlElement = document.documentElement;
  
  if (rtlToggles.length > 0) {
    rtlToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const isRTL = htmlElement.getAttribute('dir') === 'rtl';
        const newDir = isRTL ? 'ltr' : 'rtl';
        const newText = isRTL ? 'RTL' : 'LTR';
        
        htmlElement.setAttribute('dir', newDir);
        localStorage.setItem('dir', newDir);
        
        // Update all buttons
        rtlToggles.forEach(b => b.innerHTML = newText);
      });
    });

    // Check saved direction
    if (localStorage.getItem('dir') === 'rtl') {
      htmlElement.setAttribute('dir', 'rtl');
      rtlToggles.forEach(b => b.innerHTML = 'LTR');
    }
  }

  // 3. Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });

  // 4. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 5. Animated Counters
  const counters = document.querySelectorAll('.counter');
  const counterOptions = { threshold: 0.5 };
  
  const startCounter = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          current += step;
          if (current < target) {
            entry.target.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.innerText = target;
          }
        };
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  }, counterOptions);

  counters.forEach(counter => {
    startCounter.observe(counter);
  });
});
