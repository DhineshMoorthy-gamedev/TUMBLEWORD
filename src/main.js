import { GameState } from './core/GameState.js';
import { GameEngine } from './core/GameEngine.js';
import { BoardRenderer } from './rendering/BoardRenderer.js';
import { WordSlotsRenderer } from './rendering/WordSlotsRenderer.js';
import { UIManager } from './ui/UIManager.js';
import { TimelineController } from './ui/TimelineController.js';
import { InputManager } from './input/InputManager.js';
import { generateMoveTimeline } from './simulation/timeline.js';
import { CAMPAIGN_LEVELS } from './levels/campaignLevels.js';
import { soundFX } from './audio/SoundFX.js';
import { NativeBridge } from './platform/nativeBridge.js';
import { setupLifecycle } from './platform/lifecycle.js';
import { TargetConfig } from './config/targetConfig.js';
import { initTheme, toggleTheme, applyTheme, getSavedTheme } from './utils/theme.js';
import { dailyManager } from './simulation/dailyManager.js';
import { solveBFS } from './simulation/solver.js';
import {
  simulateEndlessSeed,
  runBatchSeedBenchmark,
  buildEndlessTimelineSnapshots
} from './simulation/endlessSimulator.js';
import { getEndlessWalls } from './data/endlessWalls.js';
import {
  loadVibrateEnabled,
  saveVibrateEnabled,
  clearAllGameData,
  getTotalStarsEarned
} from './utils/storage.js';

// DOM Element References
const $ = id => document.getElementById(id);

const elements = {
  homeScreen: $('homeScreen'),
  gameScreen: $('gameScreen'),
  levelGrid: $('levelGrid'),
  levelsDrawerSection: $('levelsDrawerSection'),
  browseLevelsBtn: $('browseLevelsBtn'),
  levelsProgressCount: $('levelsProgressCount'),
  dailyStreakBadge: $('dailyStreakBadge'),
  dailyCardTitle: $('dailyCardTitle'),
  dailyCountdownText: $('dailyCountdownText'),
  dailyCalendarBtn: $('dailyCalendarBtn'),
  dailyPlayBtn: $('dailyPlayBtn'),
  endlessModeCard: $('endlessModeCard'),
  endlessStreakBadge: $('endlessStreakBadge'),
  endlessBestStreakVal: $('endlessBestStreakVal'),
  endlessPlayBtn: $('endlessPlayBtn'),
  endlessBenchmarkBox: $('endlessBenchmarkBox'),
  benchmarkSeedInput: $('benchmarkSeedInput'),
  runSingleSeedBtn: $('runSingleSeedBtn'),
  runBatchSeedsBtn: $('runBatchSeedsBtn'),
  previewEndlessVictoryBtn: $('previewEndlessVictoryBtn'),
  bmMaxStreak: $('bmMaxStreak'),
  bmTotalMoves: $('bmTotalMoves'),
  bmAvgMoves: $('bmAvgMoves'),
  benchmarkLog: $('benchmarkLog'),
  heroEyebrow: $('heroEyebrow'),
  heroLevelTitle: $('heroLevelTitle'),
  heroLevelSub: $('heroLevelSub'),
  heroPlayBtn: $('heroPlayBtn'),
  backToLevelsBtn: $('backToLevelsBtn'),
  currentLevelName: $('currentLevelName'),
  currentSeedBadge: $('currentSeedBadge'),
  currentLevelMeta: $('currentLevelMeta'),
  emptyCellsBadge: $('emptyCellsBadge'),
  emptyCellsCount: $('emptyCellsCount'),
  wordProgress: $('wordProgress'),
  wordProgressLabel: $('wordProgressLabel'),
  wordProgressPill: $('wordProgressPill'),
  movesLabel: $('movesLabel'),
  movesPill: $('movesPill'),
  moveBudgetGauge: $('moveBudgetGauge'),
  tier3Chip: $('tier3Chip'),
  tier3Label: $('tier3Label'),
  tier2Chip: $('tier2Chip'),
  tier2Label: $('tier2Label'),
  tier1Chip: $('tier1Chip'),
  tier1Label: $('tier1Label'),
  gaugeFillBar: $('gaugeFillBar'),
  pinOpt: $('pinOpt'),
  pinTwo: $('pinTwo'),
  gaugeTierStatus: $('gaugeTierStatus'),
  gaugeMovesRem: $('gaugeMovesRem'),
  board: $('board'),
  grid: $('grid'),
  cards: $('cards'),
  word: $('word'),
  status: $('status'),
  moves: $('moves'),
  streak: $('streak'),
  bestStreak: $('bestStreak'),
  turnrow: $('turnrow'),
  leftBtn: $('left'),
  rightBtn: $('right'),
  undoBtn: $('undo'),
  hintBtn: $('hintBtn'),
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
  victoryStarsRow: $('victoryStarsRow'),
  victoryStar1: $('victoryStar1'),
  victoryStar2: $('victoryStar2'),
  victoryStar3: $('victoryStar3'),
  victoryTitle: $('victoryTitle'),
  victorySubtitle: $('victorySubtitle'),
  victoryScore: $('victoryScore'),
  victoryMoves: $('victoryMoves'),
  victoryOptimal: $('victoryOptimal'),
  victoryRatingPill: $('victoryRatingPill'),
  victoryBest: $('victoryBest'),
  nextLevelBtn: $('nextLevelBtn'),
  replayLevelBtn: $('replayLevelBtn'),
  victoryHomeBtn: $('victoryHomeBtn'),
  outOfMovesModal: $('outOfMovesModal'),
  outOfMovesWords: $('outOfMovesWords'),
  outOfMovesCount: $('outOfMovesCount'),
  outOfMovesUndoBtn: $('outOfMovesUndoBtn'),
  outOfMovesRestartBtn: $('outOfMovesRestartBtn'),
  outOfMovesHomeBtn: $('outOfMovesHomeBtn'),
  starGoalsTracker: $('starGoalsTracker'),
  starIcon1: $('starIcon1'),
  starIcon2: $('starIcon2'),
  starIcon3: $('starIcon3'),
  trackerNote: $('trackerNote'),
  soundToggleBtn: $('soundToggleBtn'),
  fullscreenBtn: $('fullscreenBtn'),
  desktopLegend: $('desktopLegend'),
  homeThemeToggleBtn: $('homeThemeToggleBtn'),
  themeIcon: $('themeIcon'),
  themeLabel: $('themeLabel'),
  homeAchievementsBtn: $('homeAchievementsBtn'),
  homeHelpBtn: $('homeHelpBtn'),
  homeSettingsBtn: $('homeSettingsBtn'),
  homeFullscreenBtn: $('homeFullscreenBtn'),
  achievementsModal: $('achievementsModal'),
  statsTotalStars: $('statsTotalStars'),
  statsBestStreak: $('statsBestStreak'),
  statsDailyStreak: $('statsDailyStreak'),
  statsCampaignCleared: $('statsCampaignCleared'),
  statsTotalWords: $('statsTotalWords'),
  helpModal: $('helpModal'),
  settingsScreen: $('settingsScreen'),
  settingsBackBtn: $('settingsBackBtn'),
  settingsTitle: $('settingsTitle'),
  settingsCloseBtn: $('settingsCloseBtn'),
  settingsBody: $('settingsBody'),
  settingsMainView: $('settingsMainView'),
  settingsThemeObsidianBtn: $('settingsThemeObsidianBtn'),
  settingsThemeVellumBtn: $('settingsThemeVellumBtn'),
  settingsSoundToggle: $('settingsSoundToggle'),
  settingsVibrateToggle: $('settingsVibrateToggle'),
  vibrateUnavailableBadge: $('vibrateUnavailableBadge'),
  settingsReminderToggle: $('settingsReminderToggle'),
  settingsRemoveAdsRow: $('settingsRemoveAdsRow'),
  settingsRemoveAdsBtn: $('settingsRemoveAdsBtn'),
  rateAppBtn: $('rateAppBtn'),
  contactSupportBtn: $('contactSupportBtn'),
  sendFeedbackBtn: $('sendFeedbackBtn'),
  privacyPolicyBtn: $('privacyPolicyBtn'),
  aboutCreditsBtn: $('aboutCreditsBtn'),
  settingsSubview: $('settingsSubview'),
  subviewPrivacyPolicy: $('subviewPrivacyPolicy'),
  subviewAboutCredits: $('subviewAboutCredits'),
  checkForUpdatesBtn: $('checkForUpdatesBtn'),
  moreGamesBtn: $('moreGamesBtn'),
  calendarModal: $('calendarModal'),
  calPrevMonthBtn: $('calPrevMonthBtn'),
  calMonthYearTitle: $('calMonthYearTitle'),
  calNextMonthBtn: $('calNextMonthBtn'),
  calStatThisMonth: $('calStatThisMonth'),
  calStatLiveStreak: $('calStatLiveStreak'),
  calStatAllTime: $('calStatAllTime'),
  calendarDaysGrid: $('calendarDaysGrid')
};

// Calendar Viewing State
let calViewYear = new Date().getFullYear();
let calViewMonth = new Date().getMonth();

// Instantiate Subsystems
let state = new GameState();
const boardRenderer = new BoardRenderer(elements.board, elements.grid, elements.cards);
const slotsRenderer = new WordSlotsRenderer(elements.word);
const uiManager = new UIManager(elements);

// Initialize Native Bridge with Action Handlers
const nativeBridge = new NativeBridge({
  isSettingsSubviewOpen: () => uiManager.isSettingsSubviewOpen(),
  closeSettingsSubview: () => uiManager.closeSettingsSubview(),
  isSettingsOpen: () => uiManager.isSettingsOpen(),
  closeSettings: () => closeSettingsScreen(),
  isOutOfMovesOpen: () => elements.outOfMovesModal && !elements.outOfMovesModal.hidden,
  closeOutOfMoves: () => {
    engine.undo();
  },
  isModalOpen: () => !!uiManager.getActiveModal(),
  closeModal: () => uiManager.closeAllModals(),
  isVictoryOpen: () => elements.victoryOverlay && !elements.victoryOverlay.hidden,
  closeVictory: () => {
    uiManager.hideVictory();
    goToHomeScreen();
  },
  isPlayingTimeline: () => timelineController && timelineController.isPlaying,
  pauseTimeline: () => {
    if (timelineController) timelineController.pause();
  },
  isGameScreen: () => state.screen === 'game',
  goToHome: () => goToHomeScreen(),
  isEditorMode: () => state.mode === 'editor',
  setPlayMode: () => setAppMode('play')
});

// Settings Screen Open / Close helpers
function openSettingsScreen() {
  uiManager.showSettingsScreen(state.screen);
  updateThemeUI();
  updateSoundButtons();
  checkVibrateSupport();
}

function closeSettingsScreen() {
  const prev = uiManager.hideSettingsScreen();
  if (prev === 'game') {
    uiManager.showGameScreen();
  } else {
    goToHomeScreen();
  }
}

function checkVibrateSupport() {
  const hasVibrate = !!(navigator.vibrate || (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()));
  uiManager.setVibrationSupport(hasVibrate);
  if (hasVibrate && elements.settingsVibrateToggle) {
    elements.settingsVibrateToggle.checked = loadVibrateEnabled();
  }
}

// Initialize Theme & UI
initTheme(nativeBridge);
updateThemeUI();

function updateThemeUI(theme) {
  const current = theme || getSavedTheme();
  uiManager.updateSettingsThemePills(current);
}

window.addEventListener('tumbleword:themechange', e => {
  if (e.detail && e.detail.theme) {
    updateThemeUI(e.detail.theme);
  }
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

function loadLevelTimeline(level) {
  if (state.isEndless || (level && level.isEndless)) {
    const seed = state.endlessSeed || (level && level.seed) || 42;
    const res = simulateEndlessSeed(seed, 100);
    const endlessTl = buildEndlessTimelineSnapshots(seed, Math.min(100, Math.max(1, res.streak)));
    if (endlessTl.timeline.length > 0) {
      state.isEndless = true;
      state.endlessSeed = seed;
      state.level = {
        id: '∞',
        name: "Endless Arcade",
        isEndless: true,
        seed,
        n: 6,
        walls: getEndlessWalls(seed),
        words: endlessTl.words
      };
      boardRenderer.initGrid(state.level.n, state.level.walls);
      fullTimeline = endlessTl.timeline;
      totalTimelineMoves = endlessTl.totalMoves;
      timelineController.loadTimeline(fullTimeline, totalTimelineMoves);
      engine.applyTimelineSnapshot(fullTimeline[0], false);
      timelineController.setStep(0);
    }
    return;
  }

  const res = generateMoveTimeline(level);
  fullTimeline = res.timeline;
  totalTimelineMoves = res.totalMoves;
  timelineController.loadTimeline(fullTimeline, totalTimelineMoves);

  if (fullTimeline.length > 0) {
    engine.applyTimelineSnapshot(fullTimeline[0], false);
    timelineController.setStep(0);
  }
}

function startLevel(levelOrId) {
  state.screen = 'game';
  uiManager.showGameScreen();
  state.setLevel(levelOrId);
  engine.startLevel(state.level);
  uiManager.updateLevelHeader(state.level);

  if (state.mode === 'editor') {
    loadLevelTimeline(state.level);
  }
}

function goToHomeScreen() {
  state.screen = 'home';
  timelineController.pause();
  uiManager.showHomeScreen();

  const heroLevel = CAMPAIGN_LEVELS.find(l => l.id === state.unlockedLevel) || CAMPAIGN_LEVELS[0];
  const isContinue = state.moves > 0 && !state.runCompleted;
  const heroStars = state.getLevelStars(heroLevel.id);
  uiManager.renderCampaignHero(heroLevel, isContinue, heroStars);
  uiManager.renderHomeScreen(CAMPAIGN_LEVELS, onSelectLevel, state.currentLevelId, state.completedLevels, state.levelStars);
  uiManager.startCountdownTimer(dailyManager);

  // Update Endless Arcade best streak
  const bestEndless = localStorage.getItem('tumbleword_endless_best') || '0';
  if (elements.endlessBestStreakVal) {
    elements.endlessBestStreakVal.textContent = bestEndless;
  }
}

function onSelectLevel(levelId) {
  if (soundFX) soundFX.playClick();
  startLevel(levelId);
}

function setAppMode(mode) {
  if (mode === 'editor' && !TargetConfig.features.enableAutoSolver) {
    return;
  }

  timelineController.pause();
  state.mode = mode;

  if (mode === 'play') {
    if (elements.playModeBtn) elements.playModeBtn.classList.add('active');
    if (elements.editorModeBtn) elements.editorModeBtn.classList.remove('active');
    if (elements.turnrow) elements.turnrow.style.display = 'flex';
    if (elements.solverBox) elements.solverBox.style.display = 'none';
    if (elements.endlessBenchmarkBox) elements.endlessBenchmarkBox.style.display = 'none';
    if (state.screen === 'game') {
      if (state.isEndless) {
        engine.startEndlessMode(state.endlessSeed || Date.now());
      } else {
        engine.startLevel(state.level);
      }
    }
  } else {
    if (elements.playModeBtn) elements.playModeBtn.classList.remove('active');
    if (elements.editorModeBtn) elements.editorModeBtn.classList.add('active');
    if (elements.turnrow) elements.turnrow.style.display = 'none';
    if (elements.solverBox) elements.solverBox.style.display = 'flex';
    if (elements.endlessBenchmarkBox) elements.endlessBenchmarkBox.style.display = 'flex';

    if (state.screen === 'game') {
      boardRenderer.initGrid(state.n, state.walls);
      loadLevelTimeline(state.level);
    }
  }
}

// Audio UI handling
function updateSoundButtons() {
  const isMuted = soundFX.isMuted();
  const icon = isMuted ? '🔇' : '🔊';
  const title = isMuted ? 'Unmute Sound (M)' : 'Mute Sound (M)';
  if (elements.soundToggleBtn) {
    elements.soundToggleBtn.textContent = icon;
    elements.soundToggleBtn.title = title;
  }
  if (elements.settingsSoundToggle) {
    elements.settingsSoundToggle.checked = !isMuted;
  }
}
updateSoundButtons();

if (elements.soundToggleBtn) {
  elements.soundToggleBtn.addEventListener('click', () => {
    soundFX.toggleMute();
    updateSoundButtons();
    if (!soundFX.isMuted()) soundFX.playClick();
  });
}

// Fullscreen UI handling
function toggleFullscreen() {
  if (soundFX) soundFX.playClick();
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
}
if (elements.fullscreenBtn) elements.fullscreenBtn.addEventListener('click', toggleFullscreen);
if (elements.homeFullscreenBtn) elements.homeFullscreenBtn.addEventListener('click', toggleFullscreen);

// Header Navigation & Victory Actions
if (elements.backToLevelsBtn) {
  elements.backToLevelsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    goToHomeScreen();
  });
}

if (elements.nextLevelBtn) {
  elements.nextLevelBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (state.isEndless || (state.level && state.level.isEndless)) {
      const seed = Math.floor(1000 + Math.random() * 90000);
      engine.startEndlessMode(seed);
      return;
    }
    if (state.level && state.level.isDaily) {
      goToHomeScreen();
      return;
    }
    const nextId = state.currentLevelId < CAMPAIGN_LEVELS.length
      ? state.currentLevelId + 1
      : 1;
    startLevel(nextId);
  });
}

if (elements.replayLevelBtn) {
  elements.replayLevelBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (state.isEndless || (state.level && state.level.isEndless)) {
      const seed = state.endlessSeed || Math.floor(1000 + Math.random() * 90000);
      engine.startEndlessMode(seed);
      return;
    }
    startLevel(state.level);
  });
}

if (elements.victoryHomeBtn) {
  elements.victoryHomeBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    goToHomeScreen();
  });
}

// Endless Mode Play Launch
if (elements.endlessPlayBtn) {
  elements.endlessPlayBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    state.screen = 'game';
    const seed = Math.floor(1000 + Math.random() * 90000);
    engine.startEndlessMode(seed);
  });
}

// Editor Mode Seed Benchmark Controls
if (elements.runSingleSeedBtn) {
  elements.runSingleSeedBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    const seed = parseInt(elements.benchmarkSeedInput ? elements.benchmarkSeedInput.value : '42', 10) || 42;
    if (elements.benchmarkLog) elements.benchmarkLog.textContent = `Simulating Seed #${seed}...`;

    setTimeout(() => {
      const res = simulateEndlessSeed(seed, 100);
      if (elements.bmMaxStreak) elements.bmMaxStreak.textContent = `${res.streak}w`;
      if (elements.bmTotalMoves) elements.bmTotalMoves.textContent = `${res.totalMoves}`;
      if (elements.bmAvgMoves) elements.bmAvgMoves.textContent = `${res.avgMoves}`;
      if (elements.benchmarkLog) {
        elements.benchmarkLog.innerHTML = `<strong>Seed #${seed}:</strong> Reached streak of <b>${res.streak} words</b> in ${res.totalMoves} moves (avg ${res.avgMoves} m/w).<br><span style="opacity:0.85;">${res.reason}</span>`;
      }

      // Load into timeline controller so developer can step through move-by-move
      const endlessTl = buildEndlessTimelineSnapshots(seed, Math.min(100, Math.max(1, res.streak)));
      if (endlessTl.timeline.length > 0) {
        state.isEndless = true;
        state.endlessSeed = seed;
        state.level = {
          id: '∞',
          name: "Endless Arcade",
          isEndless: true,
          seed,
          n: 6,
          walls: getEndlessWalls(seed),
          words: endlessTl.words
        };
        boardRenderer.initGrid(state.level.n, state.level.walls);
        fullTimeline = endlessTl.timeline;
        totalTimelineMoves = endlessTl.totalMoves;
        timelineController.loadTimeline(fullTimeline, totalTimelineMoves);
        engine.applyTimelineSnapshot(fullTimeline[0], false);
        timelineController.setStep(0);
      }
    }, 10);
  });
}

if (elements.runBatchSeedsBtn) {
  elements.runBatchSeedsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (elements.benchmarkLog) elements.benchmarkLog.textContent = `Running Monte Carlo benchmark on Seeds 1 to 25...`;

    setTimeout(() => {
      const batch = runBatchSeedBenchmark(1, 25, 100);
      if (elements.bmMaxStreak) elements.bmMaxStreak.textContent = `Avg ${batch.avgStreak}w`;
      if (elements.bmTotalMoves) elements.bmTotalMoves.textContent = `Max ${batch.maxStreak}w`;
      if (elements.bmAvgMoves) elements.bmAvgMoves.textContent = `Min ${batch.minStreak}w`;

      const sample = batch.results.slice(0, 12).map(r => `Seed #${r.seed}: ${r.streak}w`).join(' • ');
      if (elements.benchmarkLog) {
        elements.benchmarkLog.innerHTML = `<strong>Batch (Seeds 1–25):</strong> Avg <b>${batch.avgStreak}w</b> | Max <b>${batch.maxStreak}w</b> (Seed #${batch.maxSeed}) | Min <b>${batch.minStreak}w</b> (Seed #${batch.minSeed}).<br><span style="font-size:9.5px; opacity:0.8;">${sample}...</span>`;
      }
    }, 10);
  });
}

// Preview Endless Mode Full Victory Screen (Editor Mode tool)
if (elements.previewEndlessVictoryBtn) {
  elements.previewEndlessVictoryBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playVictory();
    if (nativeBridge) nativeBridge.triggerHaptic('success');
    const seed = parseInt(elements.benchmarkSeedInput ? elements.benchmarkSeedInput.value : '42', 10) || 42;
    uiManager.showVictory(
      state.moves > 0 ? state.moves : 542,
      1200,
      {
        name: 'Endless Arcade',
        isEndless: true,
        seed,
        totalWords: 1200,
        difficultyScore: 9999
      },
      3,
      soundFX
    );
  });
}

// Topbar Navigation & Quick Actions
if (elements.homeThemeToggleBtn) {
  elements.homeThemeToggleBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');
    const nextTheme = toggleTheme(nativeBridge);
    updateThemeUI(nextTheme);
  });
}

if (elements.homeAchievementsBtn) {
  elements.homeAchievementsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.renderAchievements({
      bestStreak: state.bestStreak,
      dailyStreak: dailyManager.getStreak(),
      completedLevelsCount: state.completedLevels.length,
      totalCampaignLevels: CAMPAIGN_LEVELS.length,
      totalWords: state.totalWords,
      totalStars: getTotalStarsEarned()
    });
    uiManager.openModal('achievementsModal');
  });
}

// Out of Moves Action Handlers
if (elements.outOfMovesUndoBtn) {
  elements.outOfMovesUndoBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    engine.undo();
  });
}

if (elements.outOfMovesRestartBtn) {
  elements.outOfMovesRestartBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    engine.startInteractiveRun();
  });
}

if (elements.outOfMovesHomeBtn) {
  elements.outOfMovesHomeBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.hideOutOfMoves();
    goToHomeScreen();
  });
}

if (elements.homeHelpBtn) {
  elements.homeHelpBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.openModal('helpModal');
  });
}

if (elements.homeSettingsBtn) {
  elements.homeSettingsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    openSettingsScreen();
  });
}

// Fullscreen Settings Actions
if (elements.settingsCloseBtn) {
  elements.settingsCloseBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    closeSettingsScreen();
  });
}

if (elements.settingsBackBtn) {
  elements.settingsBackBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.closeSettingsSubview();
  });
}

// Segmented Theme Control
if (elements.settingsThemeObsidianBtn) {
  elements.settingsThemeObsidianBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');
    applyTheme('obsidian', nativeBridge);
    updateThemeUI('obsidian');
  });
}

if (elements.settingsThemeVellumBtn) {
  elements.settingsThemeVellumBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');
    applyTheme('vellum', nativeBridge);
    updateThemeUI('vellum');
  });
}

// Settings Preference Toggles
if (elements.settingsSoundToggle) {
  elements.settingsSoundToggle.addEventListener('change', e => {
    if (soundFX.isMuted() === e.target.checked) {
      soundFX.toggleMute();
    }
    updateSoundButtons();
  });
}

if (elements.settingsVibrateToggle) {
  elements.settingsVibrateToggle.addEventListener('change', e => {
    saveVibrateEnabled(e.target.checked);
    if (e.target.checked) {
      nativeBridge.triggerHaptic('light');
    }
  });
}

if (elements.settingsReminderToggle) {
  elements.settingsReminderToggle.addEventListener('change', () => {
    if (soundFX) soundFX.playClick();
  });
}

if (elements.settingsRemoveAdsBtn) {
  elements.settingsRemoveAdsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    alert('You have the complete ad-free premium version of Tumbleword!');
  });
}

// Support & About Navigation Rows
if (elements.rateAppBtn) {
  elements.rateAppBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    window.open('https://olaimediagroup.com', '_blank');
  });
}

if (elements.contactSupportBtn) {
  elements.contactSupportBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    window.location.href = 'mailto:support@olaimediagroup.com?subject=Tumbleword%20Support';
  });
}

if (elements.sendFeedbackBtn) {
  elements.sendFeedbackBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    window.location.href = 'mailto:feedback@olaimediagroup.com?subject=Tumbleword%20Feedback';
  });
}

if (elements.privacyPolicyBtn) {
  elements.privacyPolicyBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.openSettingsSubview('subviewPrivacyPolicy', 'PRIVACY POLICY');
  });
}

if (elements.aboutCreditsBtn) {
  elements.aboutCreditsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.openSettingsSubview('subviewAboutCredits', 'ABOUT');
  });
}

if (elements.checkForUpdatesBtn) {
  elements.checkForUpdatesBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    alert('TUMBLEWORD is currently on the latest version (v0.0.1) — All systems up to date!');
  });
}

if (elements.moreGamesBtn) {
  elements.moreGamesBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    window.open('https://olaimediagroup.com', '_blank');
  });
}

// Daily Challenge & Calendar Modal Actions
function openCalendarModal() {
  const now = new Date();
  calViewYear = now.getFullYear();
  calViewMonth = now.getMonth();
  refreshCalendarView();
  uiManager.openModal('calendarModal');
}

function refreshCalendarView() {
  uiManager.renderCalendarModal(
    dailyManager,
    selectedDateKey => {
      const dailyLevel = dailyManager.generateDailyLevel(selectedDateKey);
      startLevel(dailyLevel);
    },
    calViewYear,
    calViewMonth
  );
}

if (elements.calPrevMonthBtn) {
  elements.calPrevMonthBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    calViewMonth--;
    if (calViewMonth < 0) {
      calViewMonth = 11;
      calViewYear--;
    }
    refreshCalendarView();
  });
}

if (elements.calNextMonthBtn) {
  elements.calNextMonthBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    calViewMonth++;
    if (calViewMonth > 11) {
      calViewMonth = 0;
      calViewYear++;
    }
    refreshCalendarView();
  });
}

if (elements.dailyPlayBtn) {
  elements.dailyPlayBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    const todayKey = dailyManager.getTodayDateKey();
    const dailyLevel = dailyManager.generateDailyLevel(todayKey);
    startLevel(dailyLevel);
  });
}

if (elements.dailyCalendarBtn) {
  elements.dailyCalendarBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    openCalendarModal();
  });
}

// Campaign Hero Actions
if (elements.heroPlayBtn) {
  elements.heroPlayBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    const heroLevel = CAMPAIGN_LEVELS.find(l => l.id === state.unlockedLevel) || CAMPAIGN_LEVELS[0];
    startLevel(heroLevel.id);
  });
}

if (elements.browseLevelsBtn) {
  elements.browseLevelsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.toggleLevelsDrawer();
  });
}

// Modal Dismiss Handlers
document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.closeAllModals();
  });
});

document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      if (soundFX) soundFX.playClick();
      uiManager.closeAllModals();
    }
  });
});

// Feature Gating based on TargetConfig
if (!TargetConfig.features.showCampaignLevelCards) {
  if (elements.browseLevelsBtn) elements.browseLevelsBtn.style.display = 'none';
  if (elements.levelsDrawerSection) elements.levelsDrawerSection.style.display = 'none';
} else {
  // In editor mode, show the campaign levels list directly for quick developer navigation
  if (elements.browseLevelsBtn) elements.browseLevelsBtn.style.display = 'flex';
  if (elements.levelsDrawerSection) elements.levelsDrawerSection.hidden = false;
}

if (!TargetConfig.features.showDesktopKeyLegend && elements.desktopLegend) {
  elements.desktopLegend.style.display = 'none';
}
if (!TargetConfig.features.enableFullscreenAPI) {
  if (elements.fullscreenBtn) elements.fullscreenBtn.style.display = 'none';
  if (elements.homeFullscreenBtn) elements.homeFullscreenBtn.style.display = 'none';
}
if (!TargetConfig.features.showEditorToggle) {
  if (elements.modeToggleBar) elements.modeToggleBar.style.display = 'none';
  if (elements.solverBox) elements.solverBox.style.display = 'none';
  if (elements.endlessBenchmarkBox) elements.endlessBenchmarkBox.style.display = 'none';
}

function giveHint() {
  if (state.screen !== 'game' || state.mode !== 'play' || state.locked) return;
  if (!state.currentWord || !state.cards || !state.level) return;

  const path = solveBFS(
    state.currentWord,
    {
      r: state.r,
      cards: state.cards,
      n: state.level.n,
      walls: state.level.walls
    },
    14,
    state.level.n,
    state.level.walls
  );

  if (soundFX) soundFX.playClick();

  if (path && path.length > 0) {
    const nextDir = path[0]; // -1 for left, 1 for right
    uiManager.highlightHint(nextDir);
    const dirName = nextDir === -1 ? 'Turn Left ↺' : 'Turn Right ↻';
    uiManager.setStatus(`💡 <strong>Hint:</strong> ${dirName}`);
  } else {
    uiManager.setStatus(`💡 <strong>Hint:</strong> No path found from current position. Try <strong>Undo</strong> or <strong>Restart</strong>!`);
  }
}

// Setup Platform Lifecycle (PWA caching & pause on background)
setupLifecycle({
  onAppBackground: () => {
    if (timelineController && timelineController.isPlaying) {
      timelineController.pause();
    }
  },
  onAppForeground: () => {}
});

// Setup Input Management & Keyboard Routing
new InputManager(elements, {
  onSetMode: mode => {
    if (TargetConfig.features.enableAutoSolver) {
      setAppMode(mode);
    }
  },
  onTurn: dir => {
    uiManager.clearHintHighlight();
    if (state.screen === 'game' && state.mode === 'play') engine.turn(dir);
  },
  onUndo: () => {
    uiManager.clearHintHighlight();
    if (state.screen === 'game' && state.mode === 'play') engine.undo();
  },
  onHint: () => {
    giveHint();
  },
  onRestart: () => {
    uiManager.clearHintHighlight();
    if (state.screen === 'game') {
      if (state.mode === 'play' || !TargetConfig.features.enableAutoSolver) {
        engine.startInteractiveRun();
      } else {
        setAppMode('editor');
      }
    }
  },
  onKeyDown: e => {
    // 1. Settings subview Esc handling
    if (e.key === 'Escape') {
      if (uiManager.isSettingsSubviewOpen()) {
        uiManager.closeSettingsSubview();
        return;
      }
      if (uiManager.isSettingsOpen()) {
        closeSettingsScreen();
        return;
      }
      const openModal = uiManager.getActiveModal();
      if (openModal) {
        uiManager.closeAllModals();
        return;
      }
      if (elements.outOfMovesModal && !elements.outOfMovesModal.hidden) {
        engine.undo();
        return;
      }
      if (elements.victoryOverlay && !elements.victoryOverlay.hidden) {
        uiManager.hideVictory();
        goToHomeScreen();
        return;
      }
      if (state.screen === 'game') {
        goToHomeScreen();
        return;
      }
    }

    // Global hotkeys
    if (e.key === 'm' || e.key === 'M') {
      soundFX.toggleMute();
      updateSoundButtons();
      return;
    }
    if (e.key === 'f' || e.key === 'F') {
      if (TargetConfig.features.enableFullscreenAPI) {
        toggleFullscreen();
      }
      return;
    }

    if (state.screen === 'game') {
      if (state.mode === 'play' || !TargetConfig.features.enableAutoSolver) {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          engine.turn(-1);
        } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
          e.preventDefault();
          engine.turn(1);
        } else if (e.key === 'h' || e.key === 'H') {
          e.preventDefault();
          giveHint();
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
  }
});

// Boot into Home Screen with 3-tier Grid Leap Hub Layout
goToHomeScreen();

// If editor target mode is enabled, auto open editor solver tools
if (TargetConfig.features.autoOpenEditor) {
  setAppMode('editor');
}
