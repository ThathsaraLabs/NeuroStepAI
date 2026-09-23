/* NeuroStep AI - Main Application Controller */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollProgress();
  initCustomCursor();
  initMagneticButtons();
});

/* 1. Sticky Header Transition */
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* 2. Mobile Navigation Toggle */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (!menuBtn || !mobileNav) return;

  const toggleMenu = (open) => {
    if (open) {
      mobileNav.classList.remove('translate-x-full');
      mobileNav.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.classList.remove('translate-x-0');
      mobileNav.classList.add('translate-x-full');
      document.body.style.overflow = '';
    }
  };

  menuBtn.addEventListener('click', () => toggleMenu(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));

  // Close on nav link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/* 3. Top Page Scroll Progress Bar */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/* 4. Desktop Custom Cursor Context Tag */
function initCustomCursor() {
  // Disable on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  let cursorLabel = document.getElementById('custom-cursor-label');
  if (!cursorLabel) {
    cursorLabel = document.createElement('div');
    cursorLabel.id = 'custom-cursor-label';
    document.body.appendChild(cursorLabel);
  }

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorLabel.style.left = `${mouseX}px`;
    cursorLabel.style.top = `${mouseY}px`;
  }, { passive: true });

  // Attach hover listeners to elements with data-cursor-label
  document.querySelectorAll('[data-cursor-label]').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
      const labelText = element.getAttribute('data-cursor-label');
      if (labelText) {
        cursorLabel.textContent = labelText;
        cursorLabel.classList.add('active');
      }
    });

    element.addEventListener('mouseleave', () => {
      cursorLabel.classList.remove('active');
    });
  });
}

/* 5. Subtle Magnetic CTA Hover Effect */
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  if (window.innerWidth < 1024) return; // Desktop only

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Max 4px movement
      const moveX = (x / rect.width) * 8;
      const moveY = (y / rect.height) * 8;
      
      btn.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}
