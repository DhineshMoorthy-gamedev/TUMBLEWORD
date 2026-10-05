/**
 * Daily Challenge Manager for Rotatle
 * Generates deterministic date-seeded word puzzles and tracks daily streaks.
 */

const DAILY_STORAGE_KEY = 'rotatle_daily_data';

// Curated dictionary of clean 3, 4, 5-letter words for daily puzzle generation
const DAILY_WORD_POOL = [
  'CAT', 'SUN', 'MAP', 'FOX', 'OWL', 'BAT', 'DOG', 'CUP', 'KEY', 'ICE',
  'STAR', 'MOON', 'WIND', 'RAIN', 'FIRE', 'SNOW', 'GOLD', 'IRON', 'ROCK', 'SAND',
  'BLUE', 'GLOW', 'TURN', 'SPIN', 'MAZE', 'FROG', 'LAKE', 'POND', 'WAVE', 'TIDE',
  'TREE', 'LEAF', 'SEED', 'ROOT', 'CLAY', 'WARM', 'COLD', 'RUNE', 'WAND', 'BOOK',
  'PLANT', 'WATER', 'STONE', 'BRICK', 'WORLD', 'EARTH', 'OCEAN', 'RIVER', 'MAGIC', 'GLYPH'
];

/**
 * Deterministic PRNG based on string seed
 */
function createSeededRandom(seedStr) {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export const LAUNCH_DATE = '2026-09-16';
export const LAUNCH_YEAR = 2026;
export const LAUNCH_MONTH = 8; // September (0-indexed)

export class DailyManager {
  constructor() {
    this.data = this._loadData();
  }

  _loadData() {
    try {
      const raw = localStorage.getItem(DAILY_STORAGE_KEY) || localStorage.getItem('tumbleword_daily_data');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
      streak: 0,
      lastCompletedDate: null,
      history: {} // { "2026-09-27": { moves: 18, completed: true } }
    };
  }

  _saveData() {
    try {
      localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {}
  }

  getTodayDateKey() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  getFormattedDate(dateStr) {
    const [y, m, d] = dateStr.split('-');
    const dt = new Date(Number(y), Number(m) - 1, Number(d));
    return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  }

  getShortFormattedDate(dateStr) {
    const [y, m, d] = dateStr.split('-');
    const dt = new Date(Number(y), Number(m) - 1, Number(d));
    return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  getPreviousDateKey(dateStr) {
    const [y, m, d] = dateStr.split('-');
    const dt = new Date(Number(y), Number(m) - 1, Number(d));
    dt.setDate(dt.getDate() - 1);
    const prevY = dt.getFullYear();
    const prevM = String(dt.getMonth() + 1).padStart(2, '0');
    const prevD = String(dt.getDate()).padStart(2, '0');
    return `${prevY}-${prevM}-${prevD}`;
  }

  getNextDateKey(dateStr) {
    const [y, m, d] = dateStr.split('-');
    const dt = new Date(Number(y), Number(m) - 1, Number(d));
    dt.setDate(dt.getDate() + 1);
    const nextY = dt.getFullYear();
    const nextM = String(dt.getMonth() + 1).padStart(2, '0');
    const nextD = String(dt.getDate()).padStart(2, '0');
    return `${nextY}-${nextM}-${nextD}`;
  }

  canGoPrevious(dateStr) {
    const prevKey = this.getPreviousDateKey(dateStr);
    return prevKey >= LAUNCH_DATE;
  }

  canGoNext(dateStr) {
    const nextKey = this.getNextDateKey(dateStr);
    const todayKey = this.getTodayDateKey();
    return nextKey <= todayKey;
  }

  getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diffMs = midnight - now;

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${mins}m`;
  }

  getStreak() {
    return this.data.streak || 0;
  }

  getAllTimeCompletedCount() {
    if (!this.data.history) return 0;
    return Object.values(this.data.history).filter(item => item && item.completed).length;
  }

  /**
   * Calculate stats for a given month (0-indexed month)
   * @param {number} year
   * @param {number} month - 0 to 11
   */
  getMonthCompletionStats(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let completedCount = 0;
    let availableDays = 0;
    const mStr = String(month + 1).padStart(2, '0');

    for (let d = 1; d <= daysInMonth; d++) {
      const dStr = String(d).padStart(2, '0');
      const dateKey = `${year}-${mStr}-${dStr}`;
      if (dateKey >= LAUNCH_DATE) {
        availableDays++;
        if (this.isDateCompleted(dateKey)) {
          completedCount++;
        }
      }
    }

    return {
      completedCount,
      totalDays: availableDays,
      fractionStr: `${completedCount} / ${availableDays}`
    };
  }

  /**
   * Determine date tile state
   * @param {string} dateKey - "YYYY-MM-DD"
   * @returns {'completed'|'today'|'missed'|'locked'|'prelaunch'}
   */
  getDateState(dateKey) {
    const todayKey = this.getTodayDateKey();
    const isCompleted = this.isDateCompleted(dateKey);

    if (isCompleted) {
      return 'completed';
    }
    if (dateKey === todayKey) {
      return 'today';
    }
    if (dateKey > todayKey) {
      return 'locked';
    }
    if (dateKey < LAUNCH_DATE) {
      return 'prelaunch';
    }
    return 'missed';
  }

  isDateCompleted(dateStr) {
    return !!(this.data.history && this.data.history[dateStr] && this.data.history[dateStr].completed);
  }

  recordCompletion(dateStr, moves) {
    if (!this.data.history) this.data.history = {};

    const alreadyDone = this.isDateCompleted(dateStr);
    this.data.history[dateStr] = {
      moves,
      completed: true,
      timestamp: Date.now()
    };

    if (!alreadyDone) {
      // Calculate streak continuation
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

      if (this.data.lastCompletedDate === yKey) {
        this.data.streak = (this.data.streak || 0) + 1;
      } else {
        this.data.streak = 1;
      }
      this.data.lastCompletedDate = dateStr;
    }

    this._saveData();
    return this.data.streak;
  }

  /**
   * Generates a deterministic, solvable daily puzzle level for any given date
   * @param {string} dateStr - "YYYY-MM-DD"
   * @returns {object} Level configuration
   */
  generateDailyLevel(dateStr) {
    const rng = createSeededRandom(dateStr);
    const n = 6;
    const walls = [
      "......",
      ".#....",
      "....#.",
      "#..#..",
      "......",
      "...#.."
    ];

    // Pick 4 unique words for today
    const available = [...DAILY_WORD_POOL];
    const pickedWords = [];
    while (pickedWords.length < 4 && available.length > 0) {
      const idx = Math.floor(rng() * available.length);
      pickedWords.push(available.splice(idx, 1)[0]);
    }

    const words = pickedWords.map((word, wIdx) => {
      // Generate dispersed card positions on 6x6 floor
      const cards = [...word].map((ch, cIdx) => {
        const x = (cIdx * 2 + wIdx) % n;
        const y = (cIdx + wIdx * 2) % n;
        return { ch, x, y };
      });
      return { word, cards, best: 5 + word.length };
    });

    return {
      id: `daily_${dateStr}`,
      isDaily: true,
      dateKey: dateStr,
      name: `Daily: ${this.getFormattedDate(dateStr)}`,
      n,
      difficultyScore: 380,
      difficultyTier: "Daily Challenge",
      walls,
      words
    };
  }
}

export const dailyManager = new DailyManager();
