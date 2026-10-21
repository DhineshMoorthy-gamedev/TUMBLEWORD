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
import { NativeBridge, isHapticsSupported } from './platform/nativeBridge.js';
import { setupLifecycle } from './platform/lifecycle.js';
import { Capacitor } from '@capacitor/core';
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
import { TutorialManager } from './tutorial/tutorialManager.js';
import { Level1TourController } from './tutorial/level1Tour.js';
import { notificationManager } from './platform/notificationManager.js';
import { appUpdateManager } from './platform/appUpdateManager.js';
import { inAppPurchaseManager } from './platform/inAppPurchaseManager.js';
import { admobManager } from './platform/admobManager.js';
import { hintManager } from './platform/hintManager.js';
import { achievementManager } from './achievements/achievementManager.js';
import { runStudioIntro } from './ui/studioIntro.js';
import {
  loadVibrateEnabled,
  saveVibrateEnabled,
  loadReminderEnabled,
  saveReminderEnabled,
  clearAllGameData,
  getTotalStarsEarned,
  loadHintCount,
  consumeHint,
  addHints,
  updateAchievementStat
} from './utils/storage.js';

// DOM Element References
const $ = id => document.getElementById(id);

const elements = {
  homeScreen: $('homeScreen'),
  gameScreen: $('gameScreen'),
  levelGrid: $('levelGrid'),
  levelsDrawerSection: $('levelsDrawerSection'),
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
  campaignLevelSelectBtn: $('campaignLevelSelectBtn'),
  campaignLevelsModal: $('campaignLevelsModal'),
  modalLevelGrid: $('modalLevelGrid'),
  levelsTabsBar: $('levelsTabsBar'),
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
  victoryDailyEmblem: $('victoryDailyEmblem'),
  victoryCampaignStats: $('victoryCampaignStats'),
  victoryDailyStats: $('victoryDailyStats'),
  victoryDailyMoves: $('victoryDailyMoves'),
  victoryDailyStreak: $('victoryDailyStreak'),
  victoryDailyNav: $('victoryDailyNav'),
  victoryDailyPrevBtn: $('victoryDailyPrevBtn'),
  victoryDailyCalBtn: $('victoryDailyCalBtn'),
  victoryDailyNextBtn: $('victoryDailyNextBtn'),
  victoryCampaignActions: $('victoryCampaignActions'),
  victoryDailyActions: $('victoryDailyActions'),
  victoryDailyHomeBtn: $('victoryDailyHomeBtn'),
  victoryDailyReplayBtn: $('victoryDailyReplayBtn'),
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
  privacyPolicyBtn: $('privacyPolicyBtn'),
  viewOnlinePrivacyBtn: $('viewOnlinePrivacyBtn'),
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
  calendarDaysGrid: $('calendarDaysGrid'),
  levelTourOverlay: $('levelTourOverlay'),
  levelTourBackdrop: $('levelTourBackdrop'),
  levelTourSpotlight: $('levelTourSpotlight'),
  levelTourCard: $('levelTourCard'),
  levelTourStepBadge: $('levelTourStepBadge'),
  levelTourTitle: $('levelTourTitle'),
  levelTourDesc: $('levelTourDesc'),
  levelTourNextBtn: $('levelTourNextBtn'),
  levelTourSkipBtn: $('levelTourSkipBtn'),
  tutorialWelcomeModal: $('tutorialWelcomeModal'),
  tutorialOutroModal: $('tutorialOutroModal'),
  tutorialPromptBanner: $('tutorialPromptBanner'),
  tutorialStepIndicator: $('tutorialStepIndicator'),
  tutorialPromptText: $('tutorialPromptText'),
  startTutorialBtn: $('startTutorialBtn'),
  closeTutorialWelcomeBtn: $('closeTutorialWelcomeBtn'),
  exitTutorialBtn: $('exitTutorialBtn'),
  outroPlayLevel1Btn: $('outroPlayLevel1Btn'),
  outroPlayEndlessBtn: $('outroPlayEndlessBtn'),
  outroHomeBtn: $('outroHomeBtn'),
  appUpdateModal: $('appUpdateModal'),
  closeUpdateModalBtn: $('closeUpdateModalBtn'),
  startUpdateBtn: $('startUpdateBtn'),
  restartUpdateBtn: $('restartUpdateBtn'),
  dismissUpdateBtn: $('dismissUpdateBtn'),
  hintBtnLabel: $('hintBtnLabel'),
  hintCountBadge: $('hintCountBadge'),
  rewardedHintModal: $('rewardedHintModal'),
  watchHintAdBtn: $('watchHintAdBtn'),
  closeRewardedHintModalBtn: $('closeRewardedHintModalBtn'),
  dismissRewardedHintBtn: $('dismissRewardedHintBtn'),
  claimRewardModal: $('claimRewardModal'),
  closeClaimRewardModalBtn: $('closeClaimRewardModalBtn'),
  claimRewardCountVal: $('claimRewardCountVal'),
  claimUseNowBtn: $('claimUseNowBtn'),
  claimSaveLaterBtn: $('claimSaveLaterBtn'),
  exitConfirmModal: $('exitConfirmModal'),
  exitConfirmTitle: $('exitConfirmTitle'),
  exitConfirmDesc: $('exitConfirmDesc'),
  closeExitConfirmBtn: $('closeExitConfirmBtn'),
  exitResumeBtn: $('exitResumeBtn'),
  exitLeaveBtn: $('exitLeaveBtn')
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
  goToHome: () => requestExitToHome(),
  isEditorMode: () => state.mode === 'editor',
  setPlayMode: () => setAppMode('play')
});

// Settings Screen Open / Close helpers
function openSettingsScreen() {
  uiManager.showSettingsScreen(state.screen);
  updateThemeUI();
  updateSoundButtons();
  checkVibrateSupport();
  if (elements.settingsReminderToggle) {
    elements.settingsReminderToggle.checked = loadReminderEnabled();
  }
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
  const hasVibrate = isHapticsSupported();
  uiManager.setVibrationSupport(hasVibrate);
  if (elements.settingsVibrateToggle) {
    elements.settingsVibrateToggle.checked = hasVibrate ? loadVibrateEnabled() : false;
  }
}

async function initDailyReminders() {
  await notificationManager.init();
  const isEnabled = loadReminderEnabled();
  if (elements.settingsReminderToggle) {
    elements.settingsReminderToggle.checked = isEnabled;
  }
  if (isEnabled) {
    const hasPerm = await notificationManager.hasPermission();
    if (hasPerm) {
      await notificationManager.scheduleDailyReminder(9, 0);
    }
  }
}

// Initialize Theme, UI, Vibration & Daily Reminders
initTheme(nativeBridge);
updateThemeUI();
checkVibrateSupport();
initDailyReminders();

function updateThemeUI(theme) {
  const current = theme || getSavedTheme();
  uiManager.updateSettingsThemePills(current);
}

window.addEventListener('rotatle:themechange', e => {
  if (e.detail && e.detail.theme) {
    updateThemeUI(e.detail.theme);
  }
});
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

// Achievement System Setup & Celebration Listener
let currentLevelStartTime = Date.now();
let currentLevelUndoUsed = false;
let activeAchievementsCategory = 'all';
const recentWordCompletionTimes = [];
let lastAchievementSoundTime = 0;

achievementManager.setOnUnlock(unlocked => {
  uiManager.showToast(`🏆 Achievement Unlocked: ${unlocked.title}!`, 3200);
  const now = Date.now();
  if (now - lastAchievementSoundTime > 500) {
    if (soundFX && soundFX.playAchievement) {
      soundFX.playAchievement();
    } else if (soundFX && soundFX.playStarDrop) {
      soundFX.playStarDrop(3);
    }
    lastAchievementSoundTime = now;
  }
  if (nativeBridge) nativeBridge.triggerHaptic('light');
});

function evaluateAchievementsOnVictory() {
  if (state.isTutorial || (state.level && state.level.isTutorial)) return;

  const durationSec = (Date.now() - currentLevelStartTime) / 1000;

  // Campaign Speed Achievements
  if (!state.isEndless && (!state.level || !state.level.isDaily)) {
    if (durationSec <= 10) updateAchievementStat('fastClears10s', 1, 'increment');
    if (durationSec <= 15) updateAchievementStat('fastClears15s', 1, 'increment');
  }

  // Strategy: One Shot, One Clear (No Undo used)
  if (!state.undoUsed && !currentLevelUndoUsed) {
    updateAchievementStat('undoFreeClears', 1, 'increment');
  }

  // Daily Challenge Achievements
  if (state.level && state.level.isDaily) {
    const dailyDateKey = state.level.dateKey || dailyManager.getTodayDateKey();
    dailyManager.recordCompletion(dailyDateKey, state.moves);
    updateAchievementStat('dailyTotalSolved', dailyManager.getAllTimeCompletedCount(), 'set');
    updateAchievementStat('dailyBestStreak', dailyManager.getStreak(), 'max');

    if (durationSec <= 60) {
      updateAchievementStat('dailySprinter60s', 1, 'increment');
    }

    if (state.level.isPastArchive) {
      updateAchievementStat('dailyArchiveSolvedCount', 1, 'increment');
    }

    const currentHour = new Date().getHours();
    if (currentHour >= 20 || currentHour < 5) {
      updateAchievementStat('nightOwlClears', 1, 'increment');
    }
  }

  // Endless Arcade Achievements
  if (state.isEndless || (state.level && state.level.isEndless)) {
    updateAchievementStat('endlessBestStreak', state.streak, 'max');
    const endlessTime = Math.floor((Date.now() - currentLevelStartTime) / 1000);
    updateAchievementStat('endlessMaxTimeSec', endlessTime, 'max');
  }

  achievementManager.checkAchievements();
}

engine.setOnMultiChunkMerge(() => {
  if (state.isTutorial || (state.level && state.level.isTutorial)) return;
  updateAchievementStat('multiChunkMerges', 1, 'increment');
  achievementManager.checkAchievements();
});

engine.setOnWordComplete(() => {
  if (state.isTutorial || (state.level && state.level.isTutorial)) return;
  if (state.isEndless || (state.level && state.level.isEndless)) {
    const endlessTime = Math.floor((Date.now() - currentLevelStartTime) / 1000);
    updateAchievementStat('endlessMaxTimeSec', endlessTime, 'max');
  }
  achievementManager.checkAchievements();
});

engine.setOnStateChange(st => {
  hintManager.onStateChanged(st);
  if (st.isEndless || (st.level && st.level.isEndless)) {
    const endlessTime = Math.floor((Date.now() - currentLevelStartTime) / 1000);
    updateAchievementStat('endlessMaxTimeSec', endlessTime, 'max');
  }
  if (st.runCompleted) {
    evaluateAchievementsOnVictory();
  } else {
    achievementManager.checkAchievements();
  }
});

const tutorialManager = new TutorialManager({
  engine,
  state,
  uiManager,
  sound: soundFX,
  nativeBridge,
  elements
});
engine.setTutorialManager(tutorialManager);

const level1Tour = new Level1TourController({
  uiManager,
  state,
  sound: soundFX,
  nativeBridge,
  elements
});

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
  if (tutorialManager && tutorialManager.active) {
    tutorialManager.exitTutorial();
  }
  if (level1Tour && level1Tour.active) {
    level1Tour.finishTour();
  }
  currentLevelStartTime = Date.now();
  currentLevelUndoUsed = false;
  hintManager.stopGuidance();
  refreshHintButtonUI();
  state.screen = 'game';
  uiManager.showGameScreen();
  state.setLevel(levelOrId);
  engine.startLevel(state.level);
  uiManager.updateLevelHeader(state.level);

  if (state.mode === 'editor') {
    loadLevelTimeline(state.level);
  }

  // Check and trigger first-time focused spotlight tour on Level 1
  if (Level1TourController.shouldRun(state)) {
    setTimeout(() => {
      if (Level1TourController.shouldRun(state)) {
        level1Tour.startTour();
      }
    }, 180);
  }
}

function goToHomeScreen() {
  if (tutorialManager && tutorialManager.active) {
    tutorialManager.exitTutorial();
  }
  if (level1Tour && level1Tour.active) {
    level1Tour.finishTour();
  }
  hintManager.stopGuidance();
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
  const bestEndless = localStorage.getItem('rotatle_endless_best') || localStorage.getItem('tumbleword_endless_best') || '0';
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

function requestExitToHome() {
  if (state.screen !== 'game') {
    goToHomeScreen();
    return;
  }

  if (state.isTutorial || (state.level && state.level.isTutorial) || (tutorialManager && tutorialManager.active)) {
    tutorialManager.exitTutorial();
    goToHomeScreen();
    return;
  }

  let title = 'Leave Level?';
  let desc = 'Are you sure you want to return to the main menu? Your progress on this level will be reset.';

  if (state.isEndless || (state.level && state.level.isEndless)) {
    title = 'Exit Endless Mode?';
    desc = 'Are you sure you want to leave? Your active endless streak will end.';
  } else if (state.level && state.level.isDaily) {
    title = 'Leave Daily Puzzle?';
    desc = "Are you sure you want to return to the menu? You can continue today's puzzle at any time.";
  }

  if (soundFX) soundFX.playClick();
  uiManager.showExitConfirmModal(title, desc);
}

// Header Navigation & Victory Actions
if (elements.backToLevelsBtn) {
  elements.backToLevelsBtn.addEventListener('click', () => {
    requestExitToHome();
  });
}

if (elements.nextLevelBtn) {
  elements.nextLevelBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    await admobManager.onLevelCompleted();
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
  elements.victoryHomeBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    await admobManager.onLevelCompleted();
    goToHomeScreen();
  });
}

// Daily Challenge Victory Actions
if (elements.victoryDailyPrevBtn) {
  elements.victoryDailyPrevBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    if (state.level && state.level.isDaily && state.level.dateKey) {
      const prevDate = dailyManager.getPreviousDateKey(state.level.dateKey);
      if (dailyManager.canGoPrevious(state.level.dateKey)) {
        await admobManager.onLevelCompleted();
        const prevLevel = dailyManager.generateDailyLevel(prevDate);
        if (prevDate !== dailyManager.getTodayDateKey()) {
          prevLevel.isPastArchive = true;
        }
        startLevel(prevLevel);
      }
    }
  });
}

if (elements.victoryDailyNextBtn) {
  elements.victoryDailyNextBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    if (state.level && state.level.isDaily && state.level.dateKey) {
      const nextDate = dailyManager.getNextDateKey(state.level.dateKey);
      if (dailyManager.canGoNext(state.level.dateKey)) {
        await admobManager.onLevelCompleted();
        const nextLevel = dailyManager.generateDailyLevel(nextDate);
        if (nextDate !== dailyManager.getTodayDateKey()) {
          nextLevel.isPastArchive = true;
        }
        startLevel(nextLevel);
      }
    }
  });
}

if (elements.victoryDailyCalBtn) {
  elements.victoryDailyCalBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    await admobManager.onLevelCompleted();
    uiManager.hideVictory();
    goToHomeScreen();
    openCalendarModal();
  });
}

if (elements.victoryDailyHomeBtn) {
  elements.victoryDailyHomeBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    await admobManager.onLevelCompleted();
    goToHomeScreen();
  });
}

if (elements.victoryDailyReplayBtn) {
  elements.victoryDailyReplayBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    startLevel(state.level);
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

function openAchievementsModal(category = 'all') {
  activeAchievementsCategory = category;
  uiManager.renderAchievementsShowcase(
    achievementManager,
    activeAchievementsCategory,
    selectedCategory => {
      openAchievementsModal(selectedCategory);
    }
  );
  uiManager.openModal('achievementsModal');
}

if (elements.homeAchievementsBtn) {
  elements.homeAchievementsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');
    achievementManager.checkAchievements();
    openAchievementsModal('all');
  });
}

// Out of Moves Action Handlers
if (elements.outOfMovesRestartBtn) {
  elements.outOfMovesRestartBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.hideOutOfMoves();
    engine.startInteractiveRun();
    if (Level1TourController.shouldRun(state)) {
      setTimeout(() => {
        if (Level1TourController.shouldRun(state)) {
          level1Tour.startTour();
        }
      }, 180);
    }
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
    tutorialManager.openWelcomeModal();
  });
}

if (elements.startTutorialBtn) {
  elements.startTutorialBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    TutorialManager.markIntroSeen();
    tutorialManager.startTutorial();
  });
}

if (elements.levelTourNextBtn) {
  elements.levelTourNextBtn.addEventListener('click', () => {
    level1Tour.nextStep();
  });
}

if (elements.levelTourSkipBtn) {
  elements.levelTourSkipBtn.addEventListener('click', () => {
    level1Tour.skipTour();
  });
}

if (elements.closeTutorialWelcomeBtn) {
  elements.closeTutorialWelcomeBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    TutorialManager.markIntroSeen();
    uiManager.closeModal('tutorialWelcomeModal');
  });
}

if (elements.exitTutorialBtn) {
  elements.exitTutorialBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    tutorialManager.exitTutorial();
    goToHomeScreen();
  });
}

if (elements.outroPlayLevel1Btn) {
  elements.outroPlayLevel1Btn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.closeAllModals();
    startLevel(1);
  });
}

if (elements.outroPlayEndlessBtn) {
  elements.outroPlayEndlessBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.closeAllModals();
    state.screen = 'game';
    const seed = Math.floor(1000 + Math.random() * 90000);
    engine.startEndlessMode(seed);
  });
}

if (elements.outroHomeBtn) {
  elements.outroHomeBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.closeAllModals();
    goToHomeScreen();
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
    if (soundFX) soundFX.playClick();
    if (e.target.checked) {
      nativeBridge.triggerHaptic('light');
    }
  });
}

if (elements.settingsReminderToggle) {
  elements.settingsReminderToggle.addEventListener('change', async e => {
    if (soundFX) soundFX.playClick();
    const isChecked = e.target.checked;
    if (isChecked) {
      const hasPerm = await notificationManager.hasPermission();
      if (!hasPerm) {
        const granted = await notificationManager.requestPermission();
        if (!granted) {
          e.target.checked = false;
          saveReminderEnabled(false);
          uiManager.showToast('Notification permission denied');
          return;
        }
      }
      saveReminderEnabled(true);
      await notificationManager.scheduleDailyReminder(9, 0);
      if (nativeBridge) nativeBridge.triggerHaptic('light');
      uiManager.showToast('Daily reminders set for 9:00 AM');
    } else {
      saveReminderEnabled(false);
      await notificationManager.cancelDailyReminder();
      uiManager.showToast('Daily reminders turned off');
    }
  });
}

if (elements.settingsRemoveAdsBtn) {
  elements.settingsRemoveAdsBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');

    if (inAppPurchaseManager.isAdsRemoved()) {
      uiManager.showToast('You already own the ad-free version!');
      return;
    }

    const result = await inAppPurchaseManager.purchaseRemoveAds();

    if (result.success) {
      uiManager.updateRemoveAdsButton(true);
      refreshHintButtonUI();
      admobManager.hideBanner();
      if (nativeBridge) nativeBridge.triggerHaptic('success');
      uiManager.showToast('Ad-free version unlocked! Thank you!');
    } else if (result.cancelled) {
      // User cancelled, no error message needed
    } else if (result.error) {
      uiManager.showToast('Purchase could not be completed.');
    }
  });
}

// Support & About Navigation Rows
if (elements.rateAppBtn) {
  elements.rateAppBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');

    // Clean loading state on button
    uiManager.setRateButtonLoading(true);

    try {
      if (nativeBridge) {
        await nativeBridge.requestInAppReview();
      } else {
        window.open('https://play.google.com/store/apps/details?id=com.olaidigitalstudios.rotatle', '_blank');
      }
    } catch (e) {
      console.warn('Native in-app review error:', e);
    } finally {
      setTimeout(() => {
        uiManager.setRateButtonLoading(false);
      }, 400);
    }
  });
}

if (elements.contactSupportBtn) {
  elements.contactSupportBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    window.location.href = 'mailto:olaidigitalstudios@gmail.com?subject=Rotatle%20Support';
  });
}

if (elements.privacyPolicyBtn) {
  elements.privacyPolicyBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.openSettingsSubview('subviewPrivacyPolicy', 'PRIVACY POLICY');
  });
}

if (elements.viewOnlinePrivacyBtn) {
  elements.viewOnlinePrivacyBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    window.open('https://sites.google.com/view/rotatle-privacy-policy', '_blank');
  });
}

if (elements.aboutCreditsBtn) {
  elements.aboutCreditsBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.openSettingsSubview('subviewAboutCredits', 'ABOUT');
  });
}

if (elements.checkForUpdatesBtn) {
  elements.checkForUpdatesBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');

    uiManager.setCheckUpdatesLoading(true);
    userDismissedUpdateModal = false;

    try {
      const result = await appUpdateManager.checkForUpdate();

      if (result.available) {
        if (result.downloaded) {
          uiManager.showAppUpdateModal(result.info || {});
          uiManager.setUpdateReadyToRestart();
        } else {
          uiManager.showAppUpdateModal(result.info || {});
        }
      } else {
        uiManager.showToast('ROTATLE is up to date (v0.0.15)');
      }
    } catch (e) {
      console.warn('Check for updates error:', e);
      uiManager.showToast('ROTATLE is up to date (v0.0.15)');
    } finally {
      setTimeout(() => {
        uiManager.setCheckUpdatesLoading(false);
      }, 500);
    }
  });
}

// In-App Update Modal Actions
if (elements.startUpdateBtn) {
  elements.startUpdateBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');
    uiManager.setUpdateProgress(0, 'Starting download...');

    try {
      await appUpdateManager.startFlexibleUpdate();
    } catch (e) {
      console.warn('Start flexible update error:', e);
      uiManager.showToast('Could not start in-app update. Opening Play Store...');
      uiManager.hideAppUpdateModal();
    }
  });
}

if (elements.restartUpdateBtn) {
  elements.restartUpdateBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('success');
    uiManager.showToast('Restarting ROTATLE...');
    setTimeout(async () => {
      await appUpdateManager.completeFlexibleUpdate();
    }, 300);
  });
}

let userDismissedUpdateModal = false;

if (elements.closeUpdateModalBtn) {
  elements.closeUpdateModalBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    userDismissedUpdateModal = true;
    uiManager.hideAppUpdateModal();
    checkFirstTimeTutorialIntro();
  });
}

if (elements.dismissUpdateBtn) {
  elements.dismissUpdateBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    userDismissedUpdateModal = true;
    uiManager.hideAppUpdateModal();
    checkFirstTimeTutorialIntro();
  });
}

if (elements.moreGamesBtn) {
  elements.moreGamesBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');

    if (TargetConfig.isPlaystore || Capacitor.isNativePlatform()) {
      window.open('https://play.google.com/store/apps/developer?id=OlaiDigitalStudios', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/developer?id=OlaiDigitalStudios', '_blank');
    }
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
      const todayKey = dailyManager.getTodayDateKey();
      const dailyLevel = dailyManager.generateDailyLevel(selectedDateKey);
      if (selectedDateKey !== todayKey) {
        dailyLevel.isPastArchive = true;
      }
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

// Campaign Levels Modal State & Handlers
let currentLevelsTier = 'all';

function openCampaignLevelsModal(targetTier = 'all') {
  currentLevelsTier = targetTier;
  refreshCampaignLevelsView();
  uiManager.openModal('campaignLevelsModal');
}

function refreshCampaignLevelsView() {
  uiManager.renderCampaignLevelsModal(
    CAMPAIGN_LEVELS,
    levelId => {
      if (soundFX) soundFX.playClick();
      uiManager.closeModal('campaignLevelsModal');
      startLevel(levelId);
    },
    state.currentLevelId,
    state.completedLevels,
    state.levelStars,
    state.unlockedLevel,
    currentLevelsTier,
    tier => {
      if (soundFX) soundFX.playClick();
      currentLevelsTier = tier;
      refreshCampaignLevelsView();
    }
  );
}

// Campaign Hero Actions
if (elements.heroPlayBtn) {
  elements.heroPlayBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    const heroLevel = CAMPAIGN_LEVELS.find(l => l.id === state.unlockedLevel) || CAMPAIGN_LEVELS[0];
    startLevel(heroLevel.id);
  });
}

if (elements.campaignLevelSelectBtn) {
  elements.campaignLevelSelectBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    openCampaignLevelsModal();
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
      // Game-over and victory modals cannot be dismissed by clicking the background
      if (modal.id === 'outOfMovesModal' || modal.id === 'victoryOverlay') {
        return;
      }
      if (soundFX) soundFX.playClick();
      uiManager.closeAllModals();
    }
  });
});

// Feature Gating based on TargetConfig
if (!TargetConfig.isEditor) {
  if (elements.levelsDrawerSection) elements.levelsDrawerSection.style.display = 'none';
} else {
  // In editor mode, show the campaign levels drawer directly for quick developer navigation
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

function refreshHintButtonUI() {
  const isAdFree = inAppPurchaseManager.isAdsRemoved();
  const count = loadHintCount();
  if (hintManager.isGuidanceActive()) {
    uiManager.setHintGuidanceState(hintManager.secondsRemaining, count, isAdFree);
  } else {
    uiManager.updateHintButton(count, isAdFree);
  }
}

function triggerHintGuidance() {
  if (state.screen !== 'game' || state.mode !== 'play' || state.locked) return;
  if (state.isTutorial || (state.level && state.level.isTutorial) || (tutorialManager && tutorialManager.active)) {
    uiManager.showToast('Hints are disabled in Tutorial mode');
    return;
  }
  if (!state.currentWord || !state.cards || !state.level) return;

  if (hintManager.isGuidanceActive()) {
    return;
  }

  const isAdFree = inAppPurchaseManager.isAdsRemoved();
  const availableHints = loadHintCount();

  if (!isAdFree && availableHints <= 0) {
    if (soundFX) soundFX.playClick();
    uiManager.showRewardedHintModal();
    return;
  }

  // Consume 1 hint if not ad-free
  if (!isAdFree) {
    consumeHint();
  }

  if (soundFX) soundFX.playClick();
  if (nativeBridge) nativeBridge.triggerHaptic('medium');

  const started = hintManager.startGuidance(
    state,
    {
      onTick: seconds => {
        uiManager.setHintGuidanceState(seconds, loadHintCount(), inAppPurchaseManager.isAdsRemoved());
      },
      onNextMove: (nextDir, remainingSteps) => {
        if (nextDir !== null && nextDir !== undefined) {
          uiManager.highlightHint(nextDir, false);
          const dirName = nextDir === -1 ? 'Turn Left ↺' : 'Turn Right ↻';
          uiManager.setStatus(`💡 <strong>Hint:</strong> ${dirName} (${remainingSteps} turn${remainingSteps === 1 ? '' : 's'} to word)`);
        } else {
          uiManager.clearHintHighlight();
          uiManager.setStatus(`💡 <strong>Hint:</strong> No direct path found from here. Try <strong>Undo</strong>!`);
        }
      },
      onEnd: reason => {
        uiManager.clearHintHighlight();
        refreshHintButtonUI();
        if (reason === 'Timer expired') {
          uiManager.setStatus(`Guidance finished. Spell <strong>${state.currentWord}</strong>!`);
        }
      }
    },
    10
  );

  if (started) {
    refreshHintButtonUI();
  } else {
    // Refund hint if no solution exists from initial state
    if (!isAdFree) {
      addHints(1);
    }
    refreshHintButtonUI();
    uiManager.setStatus(`💡 <strong>Hint:</strong> No path found from current position. Try <strong>Undo</strong> or <strong>Restart</strong>!`);
  }
}

if (elements.hintBtn) {
  elements.hintBtn.addEventListener('click', () => {
    triggerHintGuidance();
  });
}

// Rewarded Hint Modal Button Handlers
if (elements.watchHintAdBtn) {
  elements.watchHintAdBtn.addEventListener('click', async () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('medium');
    uiManager.hideRewardedHintModal();

    await admobManager.showRewardedAd((granted) => {
      if (granted) {
        if (nativeBridge) nativeBridge.triggerHaptic('success');
        if (soundFX && soundFX.playStarDrop) soundFX.playStarDrop(3);
        const newTotal = addHints(1);
        refreshHintButtonUI();
        uiManager.showClaimRewardModal(newTotal);
      } else {
        uiManager.showToast('Video ad ended without completing.');
      }
    });
  });
}

if (elements.closeRewardedHintModalBtn) {
  elements.closeRewardedHintModalBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.hideRewardedHintModal();
  });
}

if (elements.dismissRewardedHintBtn) {
  elements.dismissRewardedHintBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.hideRewardedHintModal();
  });
}

// Claim Reward Modal Actions
if (elements.claimUseNowBtn) {
  elements.claimUseNowBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('medium');
    uiManager.hideClaimRewardModal();
    setTimeout(() => {
      triggerHintGuidance();
    }, 150);
  });
}

if (elements.claimSaveLaterBtn) {
  elements.claimSaveLaterBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');
    uiManager.hideClaimRewardModal();
    uiManager.showToast('Hint saved in inventory! 💡');
  });
}

if (elements.closeClaimRewardModalBtn) {
  elements.closeClaimRewardModalBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.hideClaimRewardModal();
  });
}

// Exit / Leave Game Modal Actions
if (elements.exitResumeBtn) {
  elements.exitResumeBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('light');
    uiManager.hideExitConfirmModal();
  });
}

if (elements.exitLeaveBtn) {
  elements.exitLeaveBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    if (nativeBridge) nativeBridge.triggerHaptic('medium');
    uiManager.hideExitConfirmModal();
    goToHomeScreen();
  });
}

if (elements.closeExitConfirmBtn) {
  elements.closeExitConfirmBtn.addEventListener('click', () => {
    if (soundFX) soundFX.playClick();
    uiManager.hideExitConfirmModal();
  });
}

// Setup In-App Update Flexible Download Listeners
appUpdateManager.setupFlexibleListener(state => {
  if (state.isDownloading) {
    uiManager.setUpdateProgress(state.percent, `Downloading update (${state.percent}%)...`);
  } else if (state.isDownloaded) {
    uiManager.setUpdateReadyToRestart();
    uiManager.showToast('Update downloaded! Tap to restart and install.');
  }
});

// Setup Platform Lifecycle (PWA caching & pause on background)
setupLifecycle({
  onAppBackground: () => {
    if (timelineController && timelineController.isPlaying) {
      timelineController.pause();
    }
    hintManager.stopGuidance();
    admobManager.hideBanner();
  },
  onAppForeground: async () => {
    if (!inAppPurchaseManager.isAdsRemoved()) {
      admobManager.showBanner();
    }
    try {
      const updateCheck = await appUpdateManager.checkForUpdate();
      if (updateCheck && updateCheck.available) {
        if (updateCheck.downloaded) {
          uiManager.showAppUpdateModal(updateCheck.info || {});
          uiManager.setUpdateReadyToRestart();
        } else if (!userDismissedUpdateModal) {
          uiManager.showAppUpdateModal(updateCheck.info || {});
        }
      }
    } catch (e) {}
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
    if (level1Tour && level1Tour.active) return;
    if (elements.outOfMovesModal && !elements.outOfMovesModal.hidden) return;
    if (elements.victoryOverlay && !elements.victoryOverlay.hidden) return;
    if (state.screen === 'game' && state.mode === 'play') {
      engine.turn(dir);
    }
  },
  onUndo: () => {
    if (level1Tour && level1Tour.active) return;
    if (elements.outOfMovesModal && !elements.outOfMovesModal.hidden) return;
    if (elements.victoryOverlay && !elements.victoryOverlay.hidden) return;
    currentLevelUndoUsed = true;
    if (state.screen === 'game' && state.mode === 'play') {
      engine.undo();
    }
  },
  onHint: () => {
    if (level1Tour && level1Tour.active) return;
    if (elements.outOfMovesModal && !elements.outOfMovesModal.hidden) return;
    if (elements.victoryOverlay && !elements.victoryOverlay.hidden) return;
    triggerHintGuidance();
  },
  onRestart: () => {
    if (level1Tour && level1Tour.active) return;
    if (elements.outOfMovesModal && !elements.outOfMovesModal.hidden) return;
    if (elements.victoryOverlay && !elements.victoryOverlay.hidden) return;
    currentLevelStartTime = Date.now();
    currentLevelUndoUsed = false;
    hintManager.stopGuidance();
    uiManager.clearHintHighlight();
    refreshHintButtonUI();
    if (state.screen === 'game') {
      if (state.mode === 'play' || !TargetConfig.features.enableAutoSolver) {
        engine.startInteractiveRun();
        if (Level1TourController.shouldRun(state)) {
          setTimeout(() => {
            if (Level1TourController.shouldRun(state)) {
              level1Tour.startTour();
            }
          }, 180);
        }
      } else {
        setAppMode('editor');
      }
    }
  },
  onKeyDown: e => {
    if (level1Tour && level1Tour.active) {
      if (e.key === 'Escape') {
        level1Tour.skipTour();
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        level1Tour.nextStep();
        return;
      }
      return;
    }

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
        return;
      }
      if (elements.victoryOverlay && !elements.victoryOverlay.hidden) {
        uiManager.hideVictory();
        goToHomeScreen();
        return;
      }
      if (state.screen === 'game') {
        requestExitToHome();
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
          triggerHintGuidance();
        } else if (e.key === 'z' || e.key === 'Z' || e.key === 'Backspace') {
          engine.undo();
        } else if (e.key === 'r' || e.key === 'R') {
          hintManager.stopGuidance();
          uiManager.clearHintHighlight();
          refreshHintButtonUI();
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

// Start checking for in-app updates in parallel with startup splash
const startupUpdatePromise = appUpdateManager.checkForUpdate().catch(err => {
  console.warn('Startup in-app update check error:', err);
  return { available: false };
});

function checkFirstTimeTutorialIntro() {
  if (TutorialManager.isFirstTimeUser({
    completedLevels: state.completedLevels,
    unlockedLevel: state.unlockedLevel,
    bestStreak: state.bestStreak
  })) {
    TutorialManager.markIntroSeen();
    tutorialManager.openWelcomeModal();
  }
}

// Run Studio Intro splash screen and automatically prompt update modal when available
runStudioIntro(async () => {
  try {
    const updateResult = await startupUpdatePromise;
    if (updateResult && updateResult.available) {
      if (updateResult.downloaded) {
        uiManager.showAppUpdateModal(updateResult.info || {});
        uiManager.setUpdateReadyToRestart();
      } else {
        uiManager.showAppUpdateModal(updateResult.info || {});
      }
      return;
    }
  } catch (err) {
    console.warn('Startup update prompt error:', err);
  }

  // Automatically display How to Play / Tutorial intro popup for first-time newly installed users
  checkFirstTimeTutorialIntro();
});

// Boot into Home Screen with 3-tier Grid Leap Hub Layout
goToHomeScreen();
refreshHintButtonUI();

// Initialize In-App Purchases & sync button state
inAppPurchaseManager.init().then(() => {
  const isAdFree = inAppPurchaseManager.isAdsRemoved();
  uiManager.updateRemoveAdsButton(isAdFree);
  refreshHintButtonUI();
  if (isAdFree) {
    admobManager.hideBanner();
  }
}).catch(err => {
  console.warn('IAP init error:', err);
});
uiManager.updateRemoveAdsButton(inAppPurchaseManager.isAdsRemoved());
refreshHintButtonUI();

// Initialize Google AdMob SDK
admobManager.init();

// If editor target mode is enabled, auto open editor solver tools
if (TargetConfig.features.autoOpenEditor) {
  setAppMode('editor');
}
