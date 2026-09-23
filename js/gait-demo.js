/* NeuroStep AI - Interactive Gait Data Simulator & Canvas */

document.addEventListener('DOMContentLoaded', () => {
  initHeatmapCanvas();
  initLiveWaveformCanvas();
  initReportTabSwitcher();
  initDemoSessionModal();
});

/* 1. Interactive Plantar Pressure Heatmap Canvas with 2.jpeg Background */
function initHeatmapCanvas() {
  const canvas = document.getElementById('heatmap-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Crisp dimensions matching 2.jpeg (gait-heatmap-feet.jpg) aspect ratio
  const width = canvas.width = 359;
  const height = canvas.height = 337;

  // Load 2.jpeg background image
  const heatmapImg = new Image();
  heatmapImg.src = 'assets/images/gait-heatmap-feet.jpg';
  let isImageLoaded = false;

  heatmapImg.onload = () => {
    isImageLoaded = true;
  };

  // Anatomical Pressure Zones mapped to left & right feet in 2.jpeg
  const zones = {
    forefoot: [
      { name: 'Left Metatarsals', x: 105, y: 125, r: 35 },
      { name: 'Right Metatarsals', x: 255, y: 125, r: 35 }
    ],
    midfoot: [
      { name: 'Left Arch', x: 115, y: 195, r: 28 },
      { name: 'Right Arch', x: 245, y: 195, r: 28 }
    ],
    heel: [
      { name: 'Left Rearfoot', x: 125, y: 270, r: 32 },
      { name: 'Right Rearfoot', x: 235, y: 270, r: 32 }
    ],
    toes: [
      { name: 'Left Hallux', x: 95, y: 65, r: 24 },
      { name: 'Right Hallux', x: 265, y: 65, r: 24 }
    ]
  };

  const zoneKeys = ['forefoot', 'midfoot', 'heel', 'toes'];
  let activeZone = 'forefoot';
  let isUserHovering = false;
  let autoCycleTimer = 0;
  let pulseTimer = 0;
  let scanlineY = 0;

  const statusText = document.getElementById('zone-status-text');

  function drawHeatmap() {
    ctx.clearRect(0, 0, width, height);

    // 1. Render 2.jpeg image as canvas base
    if (isImageLoaded) {
      ctx.drawImage(heatmapImg, 0, 0, width, height);
    } else {
      ctx.fillStyle = '#0B1F33';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#64748B';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Loading Plantar Heatmap...', width / 2, height / 2);
    }

    pulseTimer += 0.05;
    scanlineY = (scanlineY + 1.2) % height;

    // 2. Auto-cycle active pressure zone when user is idle
    if (!isUserHovering) {
      autoCycleTimer += 0.016;
      if (autoCycleTimer > 2.5) {
        autoCycleTimer = 0;
        const currentIdx = zoneKeys.indexOf(activeZone);
        activeZone = zoneKeys[(currentIdx + 1) % zoneKeys.length];
      }
    }

    if (statusText) {
      const lang = (window.i18n && window.i18n.currentLang) ? window.i18n.currentLang : 'en';
      const displayNames = {
        en: {
          forefoot: 'FOREFOOT LOAD: 78 kPa',
          midfoot: 'MIDFOOT BALANCE: 50% L / 50% R',
          heel: 'HEEL STRIKE: 92 kPa',
          toes: 'PROPULSION: 64 kPa'
        },
        ko: {
          forefoot: '전족부 하중: 78 kPa',
          midfoot: '중족부 균형: 50% 좌 / 50% 우',
          heel: '후족부 접지: 92 kPa',
          toes: '추진력: 64 kPa'
        },
        si: {
          forefoot: 'පෙර පාදයේ භාරය: 78 kPa',
          midfoot: 'මැද පාදයේ සමබරතාව: 50% වම් / 50% දකුණු',
          heel: 'පතුල් පහර (Heel Strike): 92 kPa',
          toes: 'ඉදිරි තල්ලුව (Propulsion): 64 kPa'
        }
      };
      const langMap = displayNames[lang] || displayNames.en;
      statusText.textContent = langMap[activeZone] || activeZone.toUpperCase();
    }

    // 3. Render animated pressure glowing hotspots overlaying 2.jpeg
    zoneKeys.forEach(zoneKey => {
      const isSelected = (zoneKey === activeZone);
      const spots = zones[zoneKey];

      spots.forEach(spot => {
        const pulse = Math.sin(pulseTimer * 3.5 + spot.x * 0.1) * 0.15;
        const currentRadius = spot.r * (isSelected ? (1.18 + pulse) : (0.9 + pulse * 0.5));
        const alpha = isSelected ? (0.8 + Math.sin(pulseTimer * 4) * 0.15) : 0.3;

        // Dynamic Radial Gradient Overlay
        const grad = ctx.createRadialGradient(spot.x, spot.y, 2, spot.x, spot.y, currentRadius);
        if (isSelected) {
          grad.addColorStop(0, `rgba(239, 68, 68, ${alpha})`);       // High Pressure Red
          grad.addColorStop(0.4, `rgba(245, 158, 11, ${alpha * 0.85})`); // Mid Pressure Orange
          grad.addColorStop(0.75, `rgba(34, 184, 209, ${alpha * 0.4})`); // Cyan Glow
          grad.addColorStop(1, 'rgba(34, 184, 209, 0)');
        } else {
          grad.addColorStop(0, `rgba(15, 157, 141, ${alpha})`);
          grad.addColorStop(0.7, `rgba(37, 99, 235, ${alpha * 0.25})`);
          grad.addColorStop(1, 'rgba(37, 99, 235, 0)');
        }

        ctx.beginPath();
        ctx.arc(spot.x, spot.y, currentRadius, 0, 2 * Math.PI);
        ctx.fillStyle = grad;
        ctx.fill();

        // Target HUD Reticle & Pulsing Aura for active zone
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(spot.x, spot.y, currentRadius + 5, 0, 2 * Math.PI);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Crosshair lines
          ctx.strokeStyle = '#22B8CF';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(spot.x - currentRadius - 8, spot.y);
          ctx.lineTo(spot.x - currentRadius + 2, spot.y);
          ctx.moveTo(spot.x + currentRadius - 2, spot.y);
          ctx.lineTo(spot.x + currentRadius + 8, spot.y);
          ctx.moveTo(spot.x, spot.y - currentRadius - 8);
          ctx.lineTo(spot.x, spot.y - currentRadius + 2);
          ctx.moveTo(spot.x, spot.y + currentRadius - 2);
          ctx.lineTo(spot.x, spot.y + currentRadius + 8);
          ctx.stroke();
        }
      });
    });

    // 4. Real-time Animated HUD Scanline Sweep
    const scanGrad = ctx.createLinearGradient(0, scanlineY - 14, 0, scanlineY + 14);
    scanGrad.addColorStop(0, 'rgba(34, 184, 209, 0)');
    scanGrad.addColorStop(0.5, 'rgba(34, 184, 209, 0.35)');
    scanGrad.addColorStop(1, 'rgba(34, 184, 209, 0)');

    ctx.fillStyle = scanGrad;
    ctx.fillRect(0, scanlineY - 14, width, 28);

    ctx.beginPath();
    ctx.moveTo(0, scanlineY);
    ctx.lineTo(width, scanlineY);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 1;
    ctx.stroke();

    requestAnimationFrame(drawHeatmap);
  }

  drawHeatmap();

  // Attach hover events to right-side metric elements
  document.querySelectorAll('.metric-hover-trigger').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      isUserHovering = true;
      const targetZone = btn.getAttribute('data-zone');
      if (targetZone && zones[targetZone]) {
        activeZone = targetZone;
      }
    });

    btn.addEventListener('mouseleave', () => {
      isUserHovering = false;
      autoCycleTimer = 0;
    });
  });
}

/* 2. Live Gait Waveform Canvas Generator */
function initLiveWaveformCanvas() {
  const canvas = document.getElementById('gait-waveform-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width = canvas.parentElement.clientWidth || 600;
  const height = canvas.height = 120;

  let step = 0;

  function renderWaveform() {
    ctx.clearRect(0, 0, width, height);

    // Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Waveform Curve
    ctx.beginPath();
    ctx.strokeStyle = '#22B8CF';
    ctx.lineWidth = 2.5;

    for (let x = 0; x < width; x += 2) {
      const y = height / 2 + 
        Math.sin((x + step) * 0.04) * 25 + 
        Math.cos((x + step * 1.5) * 0.08) * 10;
      
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.stroke();
    step += 2;

    requestAnimationFrame(renderWaveform);
  }

  renderWaveform();
}

/* 3. Report Preview Tab Switcher */
function initReportTabSwitcher() {
  const tabs = document.querySelectorAll('.report-tab-btn');
  const panels = document.querySelectorAll('.report-tab-panel');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanel = tab.getAttribute('data-tab');

      tabs.forEach(t => {
        t.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
        t.classList.add('bg-white', 'text-slate-600');
      });

      tab.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
      tab.classList.remove('bg-white', 'text-slate-600');

      panels.forEach(p => {
        if (p.id === `report-panel-${targetPanel}`) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });
}

/* 4. Interactive Sample Gait Session Modal */
function initDemoSessionModal() {
  const triggerBtn = document.getElementById('btn-open-demo-modal');
  const modal = document.getElementById('demo-session-modal');
  const closeBtn = document.getElementById('btn-close-demo-modal');

  if (!triggerBtn || !modal) return;

  triggerBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}
