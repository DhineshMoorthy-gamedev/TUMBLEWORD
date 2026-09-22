import { GameState } from './core/GameState.js';
import { GameEngine } from './core/GameEngine.js';
import { BoardRenderer } from './rendering/BoardRenderer.js';
import { WordSlotsRenderer } from './rendering/WordSlotsRenderer.js';
import { UIManager } from './ui/UIManager.js';
import { TimelineController } from './ui/TimelineController.js';
import { InputManager } from './input/InputManager.js';
import { generateMoveTimeline } from './simulation/timeline.js';
import { LEVELS } from './levels/levelData.js';
import { soundFX } from './audio/SoundFX.js';
import { NativeBridge } from './platform/nativeBridge.js';
import { setupLifecycle } from './platform/lifecycle.js';
import { TargetConfig } from './config/targetConfig.js';

// DOM Element References
const $ = id => document.getElementById(id);

const elements = {
  board: $('board'),
  grid: $('grid'),
  cards: $('cards'),
  word: $('word'),
  status: $('status'),
  moves: $('moves'),
  streak: $('streak'),
  streakVal: $('streakVal'),
  bestStreak: $('bestStreak'),
  turnrow: $('turnrow'),
  leftBtn: $('left'),
  rightBtn: $('right'),
  undoBtn: $('undo'),
  restartBtn: $('restart'),
  modeToggleBar: document.querySelector('.mode-toggle-bar'),
  playModeBtn: $('playModeBtn'),
  editorModeBtn: $('editorModeBtn'),
  solverBox: $('solverBox'),
  slider: $('timelineSlider'),
  currentMoves: $('tlMoves'),
  totalMoves: $('tlTotalMoves'),
  wordInfo: $('tlWordInfo'),
  stepInfo: $('tlStepInfo'),
  startBtn: $('solveStart'),
  prevBtn: $('solvePrev'),
  playBtn: $('solvePlay'),
  nextBtn: $('solveNext'),
  endBtn: $('solveEnd'),
  victoryOverlay: $('victoryOverlay'),
  victoryMoves: $('victoryMoves'),
  victoryBest: $('victoryBest'),
  playAgainBtn: $('playAgainBtn'),
  soundToggleBtn: $('soundToggleBtn'),
  fullscreenBtn: $('fullscreenBtn'),
  desktopLegend: $('desktopLegend')
};

// Instantiate Subsystems
const state = new GameState();
const boardRenderer = new BoardRenderer(elements.board, elements.grid, elements.cards);
const slotsRenderer = new WordSlotsRenderer(elements.word);
const uiManager = new UIManager(elements);

// Initialize Native Bridge with Action Handlers
const nativeBridge = new NativeBridge({
  isVictoryOpen: () => elements.victoryOverlay && !elements.victoryOverlay.hidden,
  closeVictory: () => {
    if (elements.victoryOverlay) elements.victoryOverlay.hidden = true;
    engine.startInteractiveRun();
  },
  isPlayingTimeline: () => timelineController && timelineController.isPlaying,
  pauseTimeline: () => {
    if (timelineController) timelineController.pause();
  },
  isEditorMode: () => state.mode === 'editor',
  setPlayMode: () => setAppMode('play')
});

const engine = new GameEngine(
  state,
  boardRenderer,
  slotsRenderer,
  uiManager,
  soundFX,
  nativeBridge
);

let fullTimeline = [];
let totalTimelineMoves = 0;

const timelineController = new TimelineController(elements, {
  onGoToStep: (stepIdx, animate) => {
    timelineController.setStep(stepIdx);
    const snap = fullTimeline[timelineController.currentStep];
    if (snap) {
      engine.applyTimelineSnapshot(snap, animate);
    }
  },
  onPlaybackStateChange: isPlaying => {
    uiManager.updateStats(state, isPlaying);
  }
});

function setAppMode(mode) {
  // If auto solver is not enabled for this target, strictly force play mode
  if (mode === 'editor' && !TargetConfig.features.enableAutoSolver) {
    return;
  }

  timelineController.pause();

  if (mode === 'play') {
    if (elements.playModeBtn) elements.playModeBtn.classList.add('active');
    if (elements.editorModeBtn) elements.editorModeBtn.classList.remove('active');
    if (elements.turnrow) elements.turnrow.style.display = 'flex';
    if (elements.solverBox) elements.solverBox.style.display = 'none';
    engine.startInteractiveRun();
  } else {
    if (elements.playModeBtn) elements.playModeBtn.classList.remove('active');
    if (elements.editorModeBtn) elements.editorModeBtn.classList.add('active');
    if (elements.turnrow) elements.turnrow.style.display = 'none';
    if (elements.solverBox) elements.solverBox.style.display = 'flex';

    boardRenderer.initGrid();
    const res = generateMoveTimeline(LEVELS);
    fullTimeline = res.timeline;
    totalTimelineMoves = res.totalMoves;
    timelineController.loadTimeline(fullTimeline, totalTimelineMoves);

    if (fullTimeline.length > 0) {
      engine.applyTimelineSnapshot(fullTimeline[0], false);
      timelineController.setStep(0);
    }
  }
}

// Audio UI handling
function updateSoundButton() {
  if (elements.soundToggleBtn) {
    elements.soundToggleBtn.textContent = soundFX.isMuted() ? '🔇' : '🔊';
    elements.soundToggleBtn.title = soundFX.isMuted()
      ? 'Unmute Sound (M)'
      : 'Mute Sound (M)';
  }
}
updateSoundButton();

if (elements.soundToggleBtn) {
  elements.soundToggleBtn.addEventListener('click', () => {
    soundFX.toggleMute();
    updateSoundButton();
    if (!soundFX.isMuted()) soundFX.playClick();
  });
}

// Fullscreen UI handling
if (elements.fullscreenBtn) {
  elements.fullscreenBtn.addEventListener('click', () => {
    soundFX.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  });
}

// Feature Gating based on TargetConfig
if (!TargetConfig.features.showDesktopKeyLegend && elements.desktopLegend) {
  elements.desktopLegend.style.display = 'none';
}
if (!TargetConfig.features.enableFullscreenAPI && elements.fullscreenBtn) {
  elements.fullscreenBtn.style.display = 'none';
}
if (!TargetConfig.features.showEditorToggle) {
  if (elements.modeToggleBar) elements.modeToggleBar.style.display = 'none';
  if (elements.solverBox) elements.solverBox.style.display = 'none';
}

// Setup Platform Lifecycle (PWA caching & pause on background)
setupLifecycle({
  onAppBackground: () => {
    if (timelineController && timelineController.isPlaying) {
      timelineController.pause();
    }
  },
  onAppForeground: () => {
    // Refresh board dimensions if needed
  }
});

// Setup Input Management & Keyboard Routing
new InputManager(elements, {
  onSetMode: mode => {
    if (TargetConfig.features.enableAutoSolver) {
      setAppMode(mode);
    }
  },
  onTurn: dir => {
    if (state.mode === 'play') engine.turn(dir);
  },
  onUndo: () => {
    if (state.mode === 'play') engine.undo();
  },
  onRestart: () => {
    if (state.mode === 'play' || !TargetConfig.features.enableAutoSolver) {
      engine.startInteractiveRun();
    } else {
      setAppMode('editor');
    }
  },
  onKeyDown: e => {
    // Global hotkeys
    if (e.key === 'm' || e.key === 'M') {
      soundFX.toggleMute();
      updateSoundButton();
      return;
    }
    if (e.key === 'f' || e.key === 'F') {
      if (TargetConfig.features.enableFullscreenAPI) {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
        }
      }
      return;
    }

    if (state.mode === 'play' || !TargetConfig.features.enableAutoSolver) {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        engine.turn(-1);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        engine.turn(1);
      } else if (e.key === 'z' || e.key === 'Z' || e.key === 'Backspace') {
        engine.undo();
      } else if (e.key === 'r' || e.key === 'R') {
        engine.startInteractiveRun();
      }
    } else {
      if (e.key === ' ' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        timelineController.togglePlay();
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        timelineController.pause();
        const nextStep = timelineController.currentStep - 1;
        timelineController.setStep(nextStep);
        if (fullTimeline[timelineController.currentStep]) {
          engine.applyTimelineSnapshot(fullTimeline[timelineController.currentStep], true);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        timelineController.pause();
        const nextStep = timelineController.currentStep + 1;
        timelineController.setStep(nextStep);
        if (fullTimeline[timelineController.currentStep]) {
          engine.applyTimelineSnapshot(fullTimeline[timelineController.currentStep], true);
        }
      } else if (e.key === 'r' || e.key === 'R') {
        setAppMode('editor');
      }
    }
  }
});

// Boot into target default mode
if (TargetConfig.features.autoOpenEditor) {
  setAppMode('editor');
} else {
  setAppMode('play');
}
