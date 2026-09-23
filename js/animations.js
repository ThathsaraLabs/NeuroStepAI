/* NeuroStep AI - Scroll & Reveal Animations */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initScrollProductStory();
  initStatCounters();
});

/* 1. Reveal Elements on Scroll */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

/* 2. Dynamic Stat Counters Animation */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetValue = parseInt(counter.getAttribute('data-target') || '0', 10);
        animateCounter(counter, targetValue);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
  let current = 0;
  const duration = 1600; // ms
  const stepTime = Math.max(10, Math.floor(duration / Math.max(target, 1)));

  const timer = setInterval(() => {
    current += 1;
    element.textContent = current;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, stepTime);
}

/* 3. Scroll-Pinned Product Story (Wear -> Walk -> Measure -> Understand -> Track) */
function initScrollProductStory() {
  const storyContainer = document.getElementById('story-scroll-container');
  if (!storyContainer) return;

  const stages = document.querySelectorAll('.story-stage');
  const canvasStage = document.getElementById('story-visual-canvas');
  if (!stages.length) return;

  const updateActiveStage = () => {
    const containerRect = storyContainer.getBoundingClientRect();
    const totalHeight = containerRect.height - window.innerHeight;
    
    if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
      const scrollPercentage = Math.abs(containerRect.top) / totalHeight;
      const stageIndex = Math.min(stages.length - 1, Math.floor(scrollPercentage * stages.length));

      stages.forEach((stage, idx) => {
        if (idx === stageIndex) {
          stage.classList.add('opacity-100', 'translate-x-0');
          stage.classList.remove('opacity-30', 'translate-x-4');
        } else {
          stage.classList.remove('opacity-100', 'translate-x-0');
          stage.classList.add('opacity-30', 'translate-x-4');
        }
      });

      if (canvasStage) {
        canvasStage.setAttribute('data-current-stage', stageIndex + 1);
        updateVisualCanvasStage(stageIndex + 1);
      }
    }
  };

  window.addEventListener('scroll', updateActiveStage, { passive: true });
}

/* Visual Canvas Stage Updater */
function updateVisualCanvasStage(stageNum) {
  const visualBadge = document.getElementById('canvas-stage-badge');
  const visualDesc = document.getElementById('canvas-stage-desc');
  const visualHeatmap = document.getElementById('canvas-heatmap-layer');
  const visualWaveform = document.getElementById('canvas-waveform-layer');

  if (!visualBadge) return;

  switch (stageNum) {
    case 1:
      visualBadge.textContent = 'STAGE 01: WEAR';
      visualDesc.textContent = 'Ultra-slim bio-compatible insole integrated into everyday footwear.';
      if (visualHeatmap) visualHeatmap.style.opacity = '0';
      if (visualWaveform) visualWaveform.style.opacity = '0';
      break;
    case 2:
      visualBadge.textContent = 'STAGE 02: WALK';
      visualDesc.textContent = 'Continuous kinetic data collection during natural stride.';
      if (visualHeatmap) visualHeatmap.style.opacity = '0.3';
      if (visualWaveform) visualWaveform.style.opacity = '0';
      break;
    case 3:
      visualBadge.textContent = 'STAGE 03: MEASURE';
      visualDesc.textContent = 'Real-time plantar force mapping & IMU motion vector capturing.';
      if (visualHeatmap) visualHeatmap.style.opacity = '0.8';
      if (visualWaveform) visualWaveform.style.opacity = '0.5';
      break;
    case 4:
      visualBadge.textContent = 'STAGE 04: UNDERSTAND';
      visualDesc.textContent = 'Raw kinetic signals compiled into stance timing and balance metrics.';
      if (visualHeatmap) visualHeatmap.style.opacity = '1';
      if (visualWaveform) visualWaveform.style.opacity = '1';
      break;
    case 5:
      visualBadge.textContent = 'STAGE 05: TRACK';
      visualDesc.textContent = 'Longitudinal trend generation for rehabilitation monitoring.';
      if (visualHeatmap) visualHeatmap.style.opacity = '0.9';
      if (visualWaveform) visualWaveform.style.opacity = '1';
      break;
  }
}
