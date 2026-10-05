/**
 * Studio Intro Screen Controller
 * Orchestrates the "OLAI DIGITAL STUDIOS" presentation startup splash
 * according to the visual spec.
 */

export function runStudioIntro(onComplete) {
  const overlay = document.getElementById('startupOverlay');
  const studioScreen = document.getElementById('studioScreen');

  if (!overlay || !studioScreen) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  let isDone = false;
  let autoTimer = null;

  function finishIntro() {
    if (isDone) return;
    isDone = true;
    if (autoTimer) {
      clearTimeout(autoTimer);
      autoTimer = null;
    }

    // Step 1: Slide fade out
    studioScreen.classList.remove('active');

    // Step 2: Overlay dissolve
    setTimeout(() => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';

      // Step 3: Remove from DOM after transition completes
      setTimeout(() => {
        if (overlay && overlay.parentNode) {
          overlay.remove();
        }
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }, 450);
    }, 250);
  }

  // Pointerdown anywhere on the overlay skips immediately
  overlay.addEventListener('pointerdown', finishIntro, { once: true });

  // Auto-advance after 1200ms
  autoTimer = setTimeout(finishIntro, 1200);
}
