/* NeuroStep AI - Video Player Interactive Controller */

document.addEventListener('DOMContentLoaded', () => {
  initNeuroStepVideoPlayer();
});

function initNeuroStepVideoPlayer() {
  const video = document.getElementById('neurostep-main-video');
  const playOverlay = document.getElementById('video-play-overlay');
  const playBtn = document.getElementById('video-control-play');
  const muteBtn = document.getElementById('video-control-mute');
  const fullscreenBtn = document.getElementById('video-control-fullscreen');
  const progressBar = document.getElementById('video-progress-bar');
  const progressFill = document.getElementById('video-progress-fill');
  const currentTimeEl = document.getElementById('video-current-time');
  const durationEl = document.getElementById('video-duration');

  if (!video) return;

  // 1. Play / Pause logic
  const togglePlay = () => {
    if (video.paused || video.ended) {
      video.play().then(() => {
        if (playOverlay) playOverlay.classList.add('opacity-0', 'pointer-events-none');
        updatePlayBtnState(true);
      }).catch(err => {
        console.warn("Autoplay / play failed:", err);
      });
    } else {
      video.pause();
      if (playOverlay) playOverlay.classList.remove('opacity-0', 'pointer-events-none');
      updatePlayBtnState(false);
    }
  };

  function updatePlayBtnState(isPlaying) {
    if (!playBtn) return;
    if (isPlaying) {
      playBtn.innerHTML = `
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/>
        </svg>
      `;
      playBtn.setAttribute('aria-label', 'Pause Video');
    } else {
      playBtn.innerHTML = `
        <svg class="w-5 h-5 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      `;
      playBtn.setAttribute('aria-label', 'Play Video');
    }
  }

  // Click on video canvas or overlay to toggle play
  if (playOverlay) {
    playOverlay.addEventListener('click', togglePlay);
  }
  if (playBtn) {
    playBtn.addEventListener('click', togglePlay);
  }

  // Click on video tag directly
  video.addEventListener('click', togglePlay);

  // 2. Mute / Unmute
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (video.muted) {
        muteBtn.innerHTML = `
          <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        `;
      } else {
        muteBtn.innerHTML = `
          <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        `;
      }
    });
  }

  // 3. Time formatting & Progress updates
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  video.addEventListener('loadedmetadata', () => {
    if (durationEl) durationEl.textContent = formatTime(video.duration);
  });

  video.addEventListener('timeupdate', () => {
    if (currentTimeEl) currentTimeEl.textContent = formatTime(video.currentTime);
    if (progressFill && video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      progressFill.style.width = `${pct}%`;
    }
  });

  // 4. Progress bar scrubbing
  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      if (video.duration) {
        video.currentTime = clickPos * video.duration;
      }
    });
  }

  // 5. Fullscreen toggle
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      const container = document.getElementById('neurostep-video-container') || video;
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
        else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen(); // iOS Safari fallback
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  // 6. Interactive Feature Badges / Timestamp triggers
  document.querySelectorAll('[data-video-time]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTime = parseFloat(btn.getAttribute('data-video-time'));
      if (!isNaN(targetTime)) {
        video.currentTime = targetTime;
        if (video.paused) {
          video.play().then(() => {
            if (playOverlay) playOverlay.classList.add('opacity-0', 'pointer-events-none');
            updatePlayBtnState(true);
          }).catch(err => console.warn(err));
        }
      }
    });
  });

  // 7. Language-aware Video Switcher (English vs Korean vs Sinhala)
  const updateVideoSourceForLanguage = (lang) => {
    let targetSrc = 'assets/videos/V_01.mp4';
    if (lang === 'ko') {
      targetSrc = 'assets/videos/V_1_Korean.mp4';
    } else if (lang === 'si') {
      targetSrc = 'assets/videos/V_1_Sinhala.mp4';
    }

    const videoSourceEl = video.querySelector('source');
    const currentSrc = (videoSourceEl ? videoSourceEl.getAttribute('src') : video.getAttribute('src')) || '';

    if (!currentSrc.includes(targetSrc)) {
      const isCurrentlyPlaying = !video.paused;

      if (videoSourceEl) {
        videoSourceEl.setAttribute('src', targetSrc);
      }
      video.setAttribute('src', targetSrc);
      video.load();

      if (progressFill) progressFill.style.width = '0%';
      if (currentTimeEl) currentTimeEl.textContent = '0:00';

      if (isCurrentlyPlaying) {
        video.play().then(() => {
          if (playOverlay) playOverlay.classList.add('opacity-0', 'pointer-events-none');
          updatePlayBtnState(true);
        }).catch(err => console.warn("Video playback after language switch failed:", err));
      } else {
        if (playOverlay) playOverlay.classList.remove('opacity-0', 'pointer-events-none');
        updatePlayBtnState(false);
      }
    }
  };

  // Initial check on load
  const initialLang = localStorage.getItem('neurostep_lang') || 'en';
  updateVideoSourceForLanguage(initialLang);

  // Listen for languageChanged event from i18n
  window.addEventListener('languageChanged', (e) => {
    if (e.detail && e.detail.lang) {
      updateVideoSourceForLanguage(e.detail.lang);
    }
  });
}
