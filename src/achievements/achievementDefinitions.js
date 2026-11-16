/**
 * 27 Handcrafted Local-Only Achievements for ROTATLE
 * Categories: campaign, mastery, daily, strategy, time
 */

export const ACHIEVEMENT_CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'campaign', label: 'CAMPAIGN' },
  { id: 'mastery', label: 'MASTERY' },
  { id: 'daily', label: 'DAILY' },
  { id: 'strategy', label: 'STRATEGY' },
  { id: 'time', label: 'TIME' }
];

export const ACHIEVEMENTS = [
  // ==========================================
  // 1. CAMPAIGN ACHIEVEMENTS (5)
  // ==========================================
  {
    id: 'first_leap',
    category: 'campaign',
    title: 'First Leap',
    description: 'Complete your first campaign puzzle',
    target: 1,
    unit: 'level',
    icon: 'zap',
    evalProgress: (stats) => stats.completedLevelsCount || 0
  },
  {
    id: 'decade_solver',
    category: 'campaign',
    title: 'Decade Solver',
    description: 'Clear the first 10 campaign levels',
    target: 10,
    unit: 'levels',
    icon: 'zap',
    evalProgress: (stats) => stats.completedLevelsCount || 0
  },
  {
    id: 'quarter_master',
    category: 'campaign',
    title: 'Quarter Century',
    description: 'Clear 25 campaign levels',
    target: 25,
    unit: 'levels',
    icon: 'zap',
    evalProgress: (stats) => stats.completedLevelsCount || 0
  },
  {
    id: 'halfway_hero',
    category: 'campaign',
    title: 'Halfway Hero',
    description: 'Clear 50 campaign levels',
    target: 50,
    unit: 'levels',
    icon: 'zap',
    evalProgress: (stats) => stats.completedLevelsCount || 0
  },
  {
    id: 'centurion_master',
    category: 'campaign',
    title: 'Centurion Grid Master',
    description: 'Clear the first 100 handcrafted campaign levels',
    target: 100,
    unit: 'levels',
    icon: 'zap',
    evalProgress: (stats) => stats.completedLevelsCount || 0
  },
  {
    id: 'transcendence_master_150',
    category: 'campaign',
    title: 'Transcendence Master',
    description: 'Clear all 150 handcrafted campaign levels',
    target: 150,
    unit: 'levels',
    icon: 'zap',
    evalProgress: (stats) => stats.completedLevelsCount || 0
  },

  // ==========================================
  // 2. MASTERY ACHIEVEMENTS (5)
  // ==========================================
  {
    id: 'three_star_genesis',
    category: 'mastery',
    title: 'Three-Star Genesis',
    description: 'Earn 3 stars on any puzzle with optimal moves',
    target: 1,
    unit: 'level',
    icon: 'star',
    evalProgress: (stats) => stats.threeStarLevelsCount || 0
  },
  {
    id: 'constellation_30',
    category: 'mastery',
    title: 'Constellation Hunter',
    description: 'Accumulate 30 total stars in campaign mode',
    target: 30,
    unit: 'stars',
    icon: 'star',
    evalProgress: (stats) => stats.totalStars || 0
  },
  {
    id: 'starbound_100',
    category: 'mastery',
    title: 'Starbound Voyager',
    description: 'Accumulate 100 total stars in campaign mode',
    target: 100,
    unit: 'stars',
    icon: 'star',
    evalProgress: (stats) => stats.totalStars || 0
  },
  {
    id: 'flawless_50',
    category: 'mastery',
    title: 'Flawless Fifty',
    description: 'Earn 3 stars on 50 different campaign levels',
    target: 50,
    unit: 'levels',
    icon: 'star',
    evalProgress: (stats) => stats.threeStarLevelsCount || 0
  },
  {
    id: 'cosmic_master_300',
    category: 'mastery',
    title: 'Cosmic Grand Master',
    description: 'Earn 300 stars across the campaign',
    target: 300,
    unit: 'stars',
    icon: 'star',
    evalProgress: (stats) => stats.totalStars || 0
  },
  {
    id: 'absolute_perfection_450',
    category: 'mastery',
    title: 'Absolute Perfection',
    description: 'Earn all 450 stars across the entire 150-level campaign',
    target: 450,
    unit: 'stars',
    icon: 'star',
    evalProgress: (stats) => stats.totalStars || 0
  },

  // ==========================================
  // 3. DAILY ACHIEVEMENTS (5)
  // ==========================================
  {
    id: 'daily_debut',
    category: 'daily',
    title: 'Daily Debut',
    description: 'Complete your first Daily Challenge puzzle',
    target: 1,
    unit: 'day',
    icon: 'calendar',
    evalProgress: (stats) => stats.dailyTotalSolved || 0
  },
  {
    id: 'daily_streak_3',
    category: 'daily',
    title: 'Three-Day Dedication',
    description: 'Maintain a 3-day Daily Challenge streak',
    target: 3,
    unit: 'days',
    icon: 'calendar',
    evalProgress: (stats) => stats.dailyBestStreak || 0
  },
  {
    id: 'daily_streak_7',
    category: 'daily',
    title: 'Weekly Ritual',
    description: 'Maintain a 7-day Daily Challenge streak',
    target: 7,
    unit: 'days',
    icon: 'calendar',
    evalProgress: (stats) => stats.dailyBestStreak || 0
  },
  {
    id: 'daily_streak_30',
    category: 'daily',
    title: 'Monthly Marathon',
    description: 'Maintain a 30-day Daily Challenge streak',
    target: 30,
    unit: 'days',
    icon: 'calendar',
    evalProgress: (stats) => stats.dailyBestStreak || 0
  },
  {
    id: 'time_traveler',
    category: 'daily',
    title: 'Time Traveler',
    description: 'Replay and complete any past calendar archive puzzle',
    target: 1,
    unit: 'date',
    icon: 'calendar',
    evalProgress: (stats) => stats.dailyArchiveSolvedCount || 0
  },

  // ==========================================
  // 4. STRATEGY ACHIEVEMENTS (5)
  // ==========================================
  {
    id: 'word_weaver_5',
    category: 'strategy',
    title: 'Word Weaver',
    description: 'Form a streak of 5 words in Endless Arcade',
    target: 5,
    unit: 'streak',
    icon: 'flame',
    evalProgress: (stats) => stats.endlessBestStreak || 0
  },
  {
    id: 'endless_velocity_20',
    category: 'strategy',
    title: 'Endless Velocity',
    description: 'Form a streak of 20 words in Endless Arcade',
    target: 20,
    unit: 'streak',
    icon: 'flame',
    evalProgress: (stats) => stats.endlessBestStreak || 0
  },
  {
    id: 'one_shot_clear',
    category: 'strategy',
    title: 'One Shot, One Clear',
    description: 'Clear any campaign level without pressing Undo',
    target: 1,
    unit: 'level',
    icon: 'target',
    evalProgress: (stats) => stats.undoFreeClears || 0
  },
  {
    id: 'gravity_tactician',
    category: 'strategy',
    title: 'Gravity Tactician',
    description: 'Merge 2 or more tile chunks in a single board rotation',
    target: 1,
    unit: 'turn',
    icon: 'target',
    evalProgress: (stats) => stats.multiChunkMerges || 0
  },
  {
    id: 'lexicon_scholar_100',
    category: 'strategy',
    title: 'Lexicon Scholar',
    description: 'Solve 100 total words across all gameplay modes',
    target: 100,
    unit: 'words',
    icon: 'target',
    evalProgress: (stats) => stats.totalWords || 0
  },

  // ==========================================
  // 5. TIME ACHIEVEMENTS (5)
  // ==========================================
  {
    id: 'speed_demon_10s',
    category: 'time',
    title: 'Speed Demon',
    description: 'Solve any campaign puzzle in under 10 seconds',
    target: 1,
    unit: 'level',
    icon: 'clock',
    evalProgress: (stats) => stats.fastClears10s || 0
  },
  {
    id: 'speed_maestro_5',
    category: 'time',
    title: 'Speed Maestro',
    description: 'Solve 5 campaign levels in under 15 seconds each',
    target: 5,
    unit: 'levels',
    icon: 'clock',
    evalProgress: (stats) => stats.fastClears15s || 0
  },
  {
    id: 'daily_sprinter_60s',
    category: 'time',
    title: 'Daily Sprinter',
    description: 'Complete a Daily Challenge puzzle in under 60 seconds',
    target: 1,
    unit: 'puzzle',
    icon: 'clock',
    evalProgress: (stats) => stats.dailySprinter60s || 0
  },
  {
    id: 'endless_endurance_2m',
    category: 'time',
    title: 'Endurance Runner',
    description: 'Survive for over 2 minutes in a single Endless Arcade session',
    target: 120,
    unit: 'sec',
    icon: 'clock',
    evalProgress: (stats) => stats.endlessMaxTimeSec || 0
  },
  {
    id: 'night_owl',
    category: 'time',
    title: 'Night Owl',
    description: 'Solve a Daily Challenge puzzle after 8:00 PM local time',
    target: 1,
    unit: 'puzzle',
    icon: 'clock',
    evalProgress: (stats) => stats.nightOwlClears || 0
  }
];
