/* NeuroStep AI - Interactive Product Visual Controller */

document.addEventListener('DOMContentLoaded', () => {
  initInsole3DTilt();
  initExplodedViewToggle();
  initHotspotTooltips();
  initSizeSelector();
});

/* 1. Interactive 3D Tilt Effect on Cursor Move */
function initInsole3DTilt() {
  const container = document.getElementById('insole-hero-container');
  const insoleSvg = document.getElementById('hero-insole-svg');

  if (!container || !insoleSvg || window.innerWidth < 1024) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation angles (Max +- 10 deg)
    const rotateY = (mouseX / (rect.width / 2)) * 10;
    const rotateX = -(mouseY / (rect.height / 2)) * 10;

    insoleSvg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  container.addEventListener('mouseleave', () => {
    insoleSvg.style.transform = 'perspective(1000px) rotateX(4deg) rotateY(-6deg) scale(1)';
  });
}

/* 2. Interactive Exploded View Switcher */
function initExplodedViewToggle() {
  const toggleBtn = document.getElementById('btn-toggle-exploded');
  const container = document.getElementById('exploded-insole-wrapper');

  if (!toggleBtn || !container) return;

  let isExploded = false;

  toggleBtn.addEventListener('click', () => {
    isExploded = !isExploded;
    if (isExploded) {
      container.classList.add('exploded-active');
      toggleBtn.textContent = 'Collapse Layer View';
      toggleBtn.classList.add('bg-teal-600', 'text-white');
      toggleBtn.classList.remove('bg-white', 'text-slate-800');
    } else {
      container.classList.remove('exploded-active');
      toggleBtn.textContent = 'Explode Architecture View';
      toggleBtn.classList.remove('bg-teal-600', 'text-white');
      toggleBtn.classList.add('bg-white', 'text-slate-800');
    }
  });
}

/* 3. Sensor Hotspot Tooltip Interaction */
function initHotspotTooltips() {
  const hotspots = document.querySelectorAll('.sensor-node');
  const modalTitle = document.getElementById('hotspot-modal-title');
  const modalDesc = document.getElementById('hotspot-modal-desc');
  const modalContainer = document.getElementById('hotspot-detail-box');

  if (!hotspots.length) return;

  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      const name = spot.getAttribute('data-sensor-name') || 'Sensor Module';
      const detail = spot.getAttribute('data-sensor-detail') || 'High-accuracy biomechanical sensing node.';

      if (modalTitle) modalTitle.textContent = name;
      if (modalDesc) modalDesc.textContent = detail;
      if (modalContainer) {
        modalContainer.classList.remove('opacity-0', 'pointer-events-none');
        modalContainer.classList.add('opacity-100');
      }
    });
  });

  // Close detail box
  const closeBtn = document.getElementById('close-hotspot-box');
  if (closeBtn && modalContainer) {
    closeBtn.addEventListener('click', () => {
      modalContainer.classList.add('opacity-0', 'pointer-events-none');
      modalContainer.classList.remove('opacity-100');
    });
  }
}

/* 4. Product Size Selector Visual Scaling */
function initSizeSelector() {
  const sizeBtns = document.querySelectorAll('.size-btn');
  const previewInsole = document.getElementById('size-preview-insole');
  const sizeLabel = document.getElementById('selected-size-label');

  if (!sizeBtns.length || !previewInsole) return;

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.getAttribute('data-size');

      // Update Active Styles
      sizeBtns.forEach(b => {
        b.classList.remove('border-blue-600', 'bg-blue-50', 'text-blue-600');
        b.classList.add('border-slate-200', 'text-slate-700');
      });
      btn.classList.add('border-blue-600', 'bg-blue-50', 'text-blue-600');
      btn.classList.remove('border-slate-200');

      // Scale insole graphic
      if (size === 'S') {
        previewInsole.style.transform = 'scale(0.88)';
        if (sizeLabel) sizeLabel.textContent = 'Small Group (Pilot Development)';
      } else if (size === 'M') {
        previewInsole.style.transform = 'scale(1)';
        if (sizeLabel) sizeLabel.textContent = 'Medium Group (Pilot Development)';
      } else if (size === 'L') {
        previewInsole.style.transform = 'scale(1.12)';
        if (sizeLabel) sizeLabel.textContent = 'Large Group (Pilot Development)';
      }
    });
  });
}
