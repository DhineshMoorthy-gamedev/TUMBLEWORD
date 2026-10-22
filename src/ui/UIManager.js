export class UIManager {
  constructor(elements) {
    this.el = elements;
    this._countdownTimer = null;
  }

  /**
   * Render the 10 level cards in the drawer
   * @param {Array<object>} levels
   * @param {(levelId: number) => void} onSelectLevel
   * @param {number} [activeLevelId]
   * @param {Array<number>} [completedLevels]
   * @param {Record<number, number>} [levelStars]
   */
  renderHomeScreen(levels, onSelectLevel, activeLevelId = 1, completedLevels = [], levelStars = {}) {
    if (!this.el.levelGrid) return;
    this.el.levelGrid.innerHTML = '';

    levels.forEach(lvl => {
      const card = document.createElement('button');
      const isCompleted = completedLevels.includes(lvl.id);
      const isActive = lvl.id === activeLevelId;
      const stars = levelStars[lvl.id] || 0;

      let starsHtml = '';
      if (stars > 0) {
        starsHtml = `
          <span class="level-card-stars">
            ${'★'.repeat(stars)}${'<span class="empty-star">★</span>'.repeat(3 - stars)}
          </span>
        `;
      }

      card.className = `level-card${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}`;
      card.type = 'button';

      card.innerHTML = `
        <div class="level-card-top">
          <span class="level-badge">${isCompleted ? '✓ ' : ''}Level ${lvl.id}</span>
          ${starsHtml}
          <span class="grid-badge">${lvl.n}×${lvl.n}</span>
        </div>
        <div class="level-card-title">${lvl.name}</div>
        <div class="level-card-meta">${lvl.words.length} Words • ${lvl.difficultyTier}</div>
        <div class="level-card-bottom">
          <span class="level-card-score">⚡ Score: <b>${lvl.difficultyScore}</b></span>
          <span class="level-moves-badge">🎯 <b>${lvl.optimalMoves || lvl.words.length * 4}</b> Moves</span>
        </div>
      `;

      card.addEventListener('click', () => {
        onSelectLevel(lvl.id);
      });

      this.el.levelGrid.appendChild(card);
    });

    if (this.el.levelsProgressCount) {
      this.el.levelsProgressCount.textContent = `${completedLevels.length} / ${levels.length} COMPLETED`;
    }
  }

  /**
   * Render the Campaign Level Selector Modal with tier filter and locked status
   * @param {Array<object>} levels All campaign levels
   * @param {(levelId: number) => void} onSelectLevel Callback when level clicked
   * @param {number} activeLevelId Currently active level
   * @param {Array<number>} completedLevels List of completed level IDs
   * @param {Record<number, number>} levelStars Star ratings map
   * @param {number} unlockedLevel Highest level unlocked
   * @param {string} [activeTier='all'] Currently selected tier tab ('all' or 'Casual', etc.)
   * @param {(tier: string) => void} [onTierChange] Callback when tier tab is clicked
   */
  renderCampaignLevelsModal(
    levels,
    onSelectLevel,
    activeLevelId = 1,
    completedLevels = [],
    levelStars = {},
    unlockedLevel = 1,
    activeTier = 'all',
    onTierChange = null
  ) {
    const summaryBadge = document.getElementById('campaignLevelsSummaryBadge');
    if (summaryBadge) {
      let totalStars = 0;
      Object.values(levelStars).forEach(s => { totalStars += (s || 0); });
      summaryBadge.textContent = `★ ${totalStars} / 300 Stars • ${completedLevels.length} / ${levels.length} Cleared`;
    }

    // 1. Update Tier Filter Tabs
    const tabsContainer = document.getElementById('levelsTabsBar');
    if (tabsContainer) {
      if (!tabsContainer._wheelBound) {
        tabsContainer._wheelBound = true;
        tabsContainer.addEventListener('wheel', e => {
          if (e.deltaY !== 0) {
            e.preventDefault();
            tabsContainer.scrollLeft += e.deltaY;
          }
        }, { passive: false });
      }

      const tabs = tabsContainer.querySelectorAll('.level-tab-btn');
      tabs.forEach(tab => {
        const tier = tab.getAttribute('data-tier');
        const isActive = tier === activeTier;
        tab.classList.toggle('active', isActive);

        if (onTierChange && !tab._boundClick) {
          tab._boundClick = true;
          tab.addEventListener('click', () => {
            const targetTier = tab.getAttribute('data-tier');
            tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            onTierChange(targetTier);
          });
        }
      });
    }

    // 2. Filter levels
    const filteredLevels = activeTier === 'all'
      ? levels
      : levels.filter(lvl => lvl.difficultyTier === activeTier);

    // 3. Render Level Cards Grid
    const grid = document.getElementById('modalLevelGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let activeCardEl = null;

    filteredLevels.forEach(lvl => {
      const card = document.createElement('button');
      const isCompleted = completedLevels.includes(lvl.id);
      const isActive = lvl.id === activeLevelId;
      const isUnlocked = lvl.id <= unlockedLevel;
      const stars = levelStars[lvl.id] || 0;

      let starsHtml = '';
      if (stars > 0) {
        starsHtml = `
          <span class="modal-level-stars">
            ${'★'.repeat(stars)}${'<span class="empty-star">★</span>'.repeat(3 - stars)}
          </span>
        `;
      } else if (isUnlocked) {
        starsHtml = `
          <span class="modal-level-stars">
            <span class="empty-star">★★★</span>
          </span>
        `;
      }

      card.className = `modal-level-card${isActive ? ' active-target' : ''}${isCompleted ? ' completed' : ''}${!isUnlocked ? ' locked' : ''}`;
      card.type = 'button';
      if (!isUnlocked) {
        card.setAttribute('aria-disabled', 'true');
      }

      const numStr = String(lvl.id).padStart(3, '0');

      card.innerHTML = `
        <div class="modal-level-card-top">
          <span class="modal-level-num">${numStr}</span>
          ${isUnlocked ? starsHtml : '<span class="modal-level-lock-badge">🔒 Locked</span>'}
        </div>
        <div class="modal-level-title" title="${lvl.name}">${lvl.name}</div>
        <div class="modal-level-meta">
          <span>${lvl.words.length} Words</span>
          <span class="modal-level-grid-tag">${lvl.n}×${lvl.n}</span>
        </div>
      `;

      if (isActive && isUnlocked) {
        activeCardEl = card;
      }

      card.addEventListener('click', () => {
        if (!isUnlocked) {
          return;
        }
        onSelectLevel(lvl.id);
      });

      grid.appendChild(card);
    });

    // Auto-scroll to active target card if present (vertically only)
    if (activeCardEl) {
      setTimeout(() => {
        activeCardEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }, 80);
    }
  }

  /**
   * Render the Center Hero Launch Card
   * @param {object} level
   * @param {boolean} isContinue
   * @param {number} [stars]
   */
  renderCampaignHero(level, isContinue = false, stars = 0) {
    if (this.el.heroLevelTitle) {
      const numStr = String(level.id).padStart(3, '0');
      this.el.heroLevelTitle.textContent = `Level ${numStr}`;
    }
    if (this.el.heroLevelSub) {
      const starsLabel = stars === 3 ? '⭐⭐⭐ Master' : stars === 2 ? '⭐⭐ Skilled' : stars === 1 ? '⭐ Cleared' : level.difficultyTier;
      this.el.heroLevelSub.textContent = `${level.name} • ${starsLabel}`;
    }
    if (this.el.heroPlayBtn) {
      this.el.heroPlayBtn.innerHTML = isContinue
        ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="margin-right:6px;"><polygon points="6 3 20 12 6 21 6 3"/></svg> CONTINUE'
        : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="margin-right:6px;"><polygon points="6 3 20 12 6 21 6 3"/></svg> PLAY';
    }
  }

  /**
   * Render the Daily Challenge Card metadata & live timer
   * @param {import('../simulation/dailyManager.js').DailyManager} dailyManager
   */
  renderDailyCard(dailyManager) {
    const todayKey = dailyManager.getTodayDateKey();
    const streak = dailyManager.getStreak();
    const isDone = dailyManager.isDateCompleted(todayKey);
    const timeLeft = dailyManager.getTimeUntilMidnight();

    if (this.el.dailyCardTitle) {
      this.el.dailyCardTitle.textContent = isDone ? "Daily Solved" : "Today's Puzzle";
    }
    if (this.el.dailyStreakBadge) {
      this.el.dailyStreakBadge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg> <span>${streak} STREAK</span>`;
    }
    if (this.el.dailyCountdownText) {
      this.el.dailyCountdownText.textContent = isDone 
        ? `Completed • Next in ${timeLeft}` 
        : `Resets in ${timeLeft}`;
    }
    if (this.el.dailyPlayBtn) {
      this.el.dailyPlayBtn.innerHTML = isDone 
        ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg><span class="play-text">REPLAY</span>' 
        : '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6 3 20 12 6 21 6 3"/></svg><span class="play-text">PLAY</span>';
    }
  }

  /**
   * Start live countdown ticker
   * @param {import('../simulation/dailyManager.js').DailyManager} dailyManager
   */
  startCountdownTimer(dailyManager) {
    if (this._countdownTimer) clearInterval(this._countdownTimer);
    this.renderDailyCard(dailyManager);
    this._countdownTimer = setInterval(() => {
      this.renderDailyCard(dailyManager);
    }, 60000);
  }

  /**
   * Render 5-Section Daily Puzzle Calendar Modal
   * @param {import('../simulation/dailyManager.js').DailyManager} dailyManager
   * @param {(dateKey: string) => void} onSelectDate
   * @param {number} viewYear
   * @param {number} viewMonth - 0 to 11
   */
  renderCalendarModal(dailyManager, onSelectDate, viewYear, viewMonth) {
    if (!this.el.calendarDaysGrid) return;
    this.el.calendarDaysGrid.innerHTML = '';

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const isMinMonth = viewYear === 2026 && viewMonth === 8; // September 2026 launch boundary
    const isMaxMonth = viewYear === currentYear && viewMonth === currentMonth;

    // SECTION 2: Update Month Nav Header
    const monthNames = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    if (this.el.calMonthYearTitle) {
      this.el.calMonthYearTitle.textContent = `${monthNames[viewMonth]} ${viewYear}`;
    }
    if (this.el.calPrevMonthBtn) {
      this.el.calPrevMonthBtn.disabled = isMinMonth;
    }
    if (this.el.calNextMonthBtn) {
      this.el.calNextMonthBtn.disabled = isMaxMonth;
    }

    // SECTION 3: Update 3-Column Stats Strip
    const monthStats = dailyManager.getMonthCompletionStats(viewYear, viewMonth);
    if (this.el.calStatThisMonth) {
      this.el.calStatThisMonth.textContent = monthStats.fractionStr;
    }
    if (this.el.calStatLiveStreak) {
      this.el.calStatLiveStreak.textContent = `${dailyManager.getStreak()} 🔥`;
    }
    if (this.el.calStatAllTime) {
      this.el.calStatAllTime.textContent = String(dailyManager.getAllTimeCompletedCount());
    }

    // SECTION 4: 7-Column Date Grid (Monday-first ISO)
    const firstDayIndex = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7; // 0 = Mon, 6 = Sun
    const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();

    // Render leading pre-launch padding slots
    for (let i = 0; i < firstDayIndex; i++) {
      const emptySlot = document.createElement('div');
      emptySlot.className = 'cal-day-btn prelaunch';
      emptySlot.innerHTML = '<span class="cal-day-num">-</span>';
      this.el.calendarDaysGrid.appendChild(emptySlot);
    }

    // Render day tiles with 5 visual states
    for (let d = 1; d <= totalDays; d++) {
      const dStr = String(d).padStart(2, '0');
      const mStr = String(viewMonth + 1).padStart(2, '0');
      const dateKey = `${viewYear}-${mStr}-${dStr}`;
      const state = dailyManager.getDateState(dateKey);

      const btn = document.createElement('button');
      btn.type = 'button';

      if (state === 'completed') {
        btn.className = 'cal-day-btn completed';
        btn.innerHTML = `
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-icon">✔</span>
        `;
        btn.addEventListener('click', () => {
          this.closeAllModals();
          onSelectDate(dateKey);
        });
      } else if (state === 'today') {
        btn.className = 'cal-day-btn today';
        btn.innerHTML = `
          <span class="cal-day-num">${d}</span>
          <span class="today-badge">TODAY</span>
        `;
        btn.addEventListener('click', () => {
          this.closeAllModals();
          onSelectDate(dateKey);
        });
      } else if (state === 'missed') {
        btn.className = 'cal-day-btn missed';
        btn.innerHTML = `
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-icon">▶</span>
        `;
        btn.addEventListener('click', () => {
          this.closeAllModals();
          onSelectDate(dateKey);
        });
      } else if (state === 'locked') {
        btn.className = 'cal-day-btn locked';
        btn.disabled = true;
        btn.innerHTML = `
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-icon">🔒</span>
        `;
      } else {
        // prelaunch
        btn.className = 'cal-day-btn prelaunch';
        btn.disabled = true;
        btn.innerHTML = `
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-icon">-</span>
        `;
      }

      this.el.calendarDaysGrid.appendChild(btn);
    }
  }

  /**
   * Helper to get vector icon SVG string for achievements
   * @param {string} iconType
   * @returns {string}
   */
  _getAchievementIconSvg(iconType) {
    switch (iconType) {
      case 'zap':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
      case 'star':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
      case 'calendar':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
      case 'flame':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`;
      case 'target':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;
      case 'clock':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
      case 'lock':
      default:
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
    }
  }

  /**
   * Render the complete Local-Only Achievements Showcase Modal
   * @param {import('../achievements/achievementManager.js').AchievementManager} achievementManager
   * @param {string} [activeCategory='all']
   * @param {(cat: string) => void} [onTabChange]
   */
  renderAchievementsShowcase(achievementManager, activeCategory = 'all', onTabChange = null) {
    const summary = achievementManager.getSummary();
    const list = achievementManager.getAchievementsList(activeCategory);

    // 1. Update Hero Progress Ring & Stats
    const ringFill = document.getElementById('achievementsRingFill');
    const summaryCountEl = document.getElementById('achievementsSummaryCount');

    if (ringFill) {
      const circumference = 188.5; // 2 * Math.PI * 30
      const offset = circumference * (1 - (summary.percentage / 100));
      ringFill.style.strokeDashoffset = String(offset);
    }

    if (summaryCountEl) {
      summaryCountEl.textContent = `${summary.unlockedCount} / ${summary.totalCount} Unlocked • ${summary.percentage}% Completed`;
    }

    // 2. Update Horizontal Tabs Active State
    const tabsContainer = document.getElementById('achievementsTabsBar');
    if (tabsContainer) {
      const tabs = tabsContainer.querySelectorAll('.ach-tab-btn');
      tabs.forEach(tab => {
        const cat = tab.getAttribute('data-category');
        const isActive = cat === activeCategory;
        tab.classList.toggle('active', isActive);

        if (onTabChange && !tab._boundClick) {
          tab._boundClick = true;
          tab.addEventListener('click', () => {
            const targetCat = tab.getAttribute('data-category');
            tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            onTabChange(targetCat);
          });
        }
      });
    }

    // 3. Render 3-Column Achievement Rows
    const listContainer = document.getElementById('achievementsListContainer');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    list.forEach(ach => {
      const row = document.createElement('div');
      row.className = `achievement-row-card${ach.isUnlocked ? ' unlocked' : ''}`;

      // Left Column: Emblem Disc
      const discIcon = ach.isUnlocked
        ? this._getAchievementIconSvg(ach.icon)
        : this._getAchievementIconSvg('lock');
      const discClass = ach.isUnlocked ? 'ach-emblem-disc unlocked' : 'ach-emblem-disc locked';

      // Center Column: Title + Date + Description
      const dateHtml = ach.isUnlocked && ach.unlockedAt
        ? `<span class="ach-card-date">${achievementManager.formatDate(ach.unlockedAt)}</span>`
        : '';

      // Right Column: Checkmark or Progress Pill
      let statusHtml = '';
      if (ach.isUnlocked) {
        statusHtml = `<div class="ach-unlocked-badge" title="Unlocked">✓</div>`;
      } else {
        const unitLabel = ach.target > 1 ? ` ${ach.unit}` : '';
        statusHtml = `<div class="ach-progress-pill">${ach.currentProgress} / ${ach.target}${unitLabel}</div>`;
      }

      row.innerHTML = `
        <div class="${discClass}">
          ${discIcon}
        </div>
        <div class="ach-details-col">
          <div class="ach-card-top-row">
            <span class="ach-card-title">${ach.title}</span>
            ${dateHtml}
          </div>
          <p class="ach-card-desc">${ach.description}</p>
        </div>
        <div class="ach-status-col">
          ${statusHtml}
        </div>
      `;

      listContainer.appendChild(row);
    });
  }

  /**
   * Toggle levels drawer visibility
   */
  toggleLevelsDrawer(forceState = null) {
    if (!this.el.levelsDrawerSection) return;
    const shouldHide = forceState !== null ? !forceState : !this.el.levelsDrawerSection.hidden;
    this.el.levelsDrawerSection.hidden = shouldHide;
    if (this.el.browseLevelsBtn) {
      this.el.browseLevelsBtn.textContent = shouldHide 
        ? '☰ Browse All 100 Levels' 
        : '✕ Hide Levels Drawer';
    }
  }

  /**
   * Modal management
   */
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      this.closeAllModals();
      modal.classList.remove('is-closing');
      modal.hidden = false;
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal || modal.hidden) return;
    modal.classList.add('is-closing');
    setTimeout(() => {
      modal.hidden = true;
      modal.classList.remove('is-closing');
    }, 150);
  }

  closeAllModals() {
    const modals = document.querySelectorAll('.modal-overlay:not(#outOfMovesModal):not(#victoryOverlay)');
    modals.forEach(m => {
      if (!m.hidden) {
        m.classList.add('is-closing');
        setTimeout(() => {
          m.hidden = true;
          m.classList.remove('is-closing');
        }, 150);
      }
    });
  }

  getActiveModal() {
    const modals = Array.from(document.querySelectorAll('.modal-overlay:not(#outOfMovesModal):not(#victoryOverlay)'));
    return modals.find(m => !m.hidden) || null;
  }

  isAnyModalOpen() {
    return !!this.getActiveModal();
  }

  setRateButtonLoading(isLoading) {
    if (this.el.rateAppBtn) {
      this.el.rateAppBtn.classList.toggle('loading', isLoading);
    }
  }

  setCheckUpdatesLoading(isLoading) {
    if (this.el.checkForUpdatesBtn) {
      this.el.checkForUpdatesBtn.disabled = isLoading;
      this.el.checkForUpdatesBtn.textContent = isLoading ? 'Checking...' : 'Check for Updates';
    }
  }

  /**
   * Show in-app update modal
   * @param {object} [updateInfo]
   */
  showAppUpdateModal(updateInfo = {}) {
    const modal = document.getElementById('appUpdateModal');
    const versionTag = document.getElementById('updateVersionTag');
    const desc = document.getElementById('updateDescriptionText');
    const startBtn = document.getElementById('startUpdateBtn');
    const restartBtn = document.getElementById('restartUpdateBtn');
    const progressSection = document.getElementById('updateProgressSection');

    if (versionTag && updateInfo.availableVersionName) {
      versionTag.textContent = `v${updateInfo.availableVersionName} Available`;
    } else if (versionTag && updateInfo.availableVersionCode) {
      const vCode = updateInfo.availableVersionCode;
      const displayVersion = String(vCode).includes('.') ? `v${vCode}` : `v0.0.${vCode}`;
      versionTag.textContent = `${displayVersion} Available`;
    } else if (versionTag) {
      versionTag.textContent = 'New Update Available';
    }

    if (progressSection) progressSection.hidden = true;
    if (startBtn) {
      startBtn.hidden = false;
      startBtn.disabled = false;
    }
    if (restartBtn) restartBtn.hidden = true;

    this.openModal('appUpdateModal');
  }

  /**
   * Hide in-app update modal
   */
  hideAppUpdateModal() {
    this.closeModal('appUpdateModal');
  }

  /**
   * Update download progress in modal
   * @param {number} percent - 0 to 100
   * @param {string} [statusText]
   */
  setUpdateProgress(percent = 0, statusText = 'Downloading update...') {
    const progressSection = document.getElementById('updateProgressSection');
    const fill = document.getElementById('updateProgressFill');
    const status = document.getElementById('updateProgressStatus');
    const percentEl = document.getElementById('updateProgressPercent');
    const startBtn = document.getElementById('startUpdateBtn');

    if (progressSection) progressSection.hidden = false;
    if (fill) fill.style.width = `${percent}%`;
    if (status) status.textContent = statusText;
    if (percentEl) percentEl.textContent = `${percent}%`;
    if (startBtn) startBtn.disabled = true;
  }

  /**
   * Update UI to ready-to-restart state
   */
  setUpdateReadyToRestart() {
    const progressSection = document.getElementById('updateProgressSection');
    const startBtn = document.getElementById('startUpdateBtn');
    const restartBtn = document.getElementById('restartUpdateBtn');
    const desc = document.getElementById('updateDescriptionText');

    if (progressSection) progressSection.hidden = true;
    if (startBtn) startBtn.hidden = true;
    if (restartBtn) restartBtn.hidden = false;
    if (desc) desc.textContent = 'Update downloaded successfully! Restart Rotatle to complete installation.';
  }

  /**
   * Switch to Home Screen view
   */
  showHomeScreen() {
    if (this.el.homeScreen) {
      this.el.homeScreen.hidden = false;
      this.el.homeScreen.classList.remove('home-enter');
      void this.el.homeScreen.offsetWidth;
      this.el.homeScreen.classList.add('home-enter');
    }
    if (this.el.gameScreen) this.el.gameScreen.hidden = true;
    this.hideVictory();
    this.closeAllModals();
  }

  /**
   * Switch to Gameplay view
   */
  showGameScreen() {
    if (this.el.homeScreen) this.el.homeScreen.hidden = true;
    if (this.el.gameScreen) {
      this.el.gameScreen.hidden = false;
      this.el.gameScreen.classList.remove('game-enter');
      void this.el.gameScreen.offsetWidth;
      this.el.gameScreen.classList.add('game-enter');
    }
    this.closeAllModals();
  }

  /**
   * Update header metadata for active level
   * @param {object} level
   */
  updateLevelHeader(level) {
    const isTutorial = !!(level && level.isTutorial);
    if (this.el.gameScreen) {
      this.el.gameScreen.classList.toggle('tutorial-mode', isTutorial);
    }

    if (this.el.currentLevelName) {
      if (isTutorial) {
        this.el.currentLevelName.textContent = 'HOW TO PLAY';
        if (this.el.currentSeedBadge) this.el.currentSeedBadge.style.display = 'none';
      } else if (level && level.isEndless) {
        this.el.currentLevelName.textContent = 'ENDLESS ARCADE';
        if (this.el.currentSeedBadge) {
          const seed = level.seed !== undefined ? level.seed : '';
          this.el.currentSeedBadge.textContent = `SEED #${seed}`;
          this.el.currentSeedBadge.style.display = 'inline-block';
        }
      } else if (level && level.isDaily) {
        this.el.currentLevelName.textContent = 'DAILY PUZZLE';
        if (this.el.currentSeedBadge) this.el.currentSeedBadge.style.display = 'none';
      } else {
        const id = level ? level.id : 1;
        this.el.currentLevelName.textContent = `LEVEL ${id}`;
        if (this.el.currentSeedBadge) this.el.currentSeedBadge.style.display = 'none';
      }
      this.el.currentLevelName.classList.remove('level-title-enter');
      void this.el.currentLevelName.offsetWidth;
      this.el.currentLevelName.classList.add('level-title-enter');
    }

    if (this.el.hintBtn) {
      this.el.hintBtn.disabled = isTutorial;
      this.el.hintBtn.title = isTutorial ? 'Hints disabled in Tutorial' : 'Get Guidance Hint';
    }
  }

  /**
   * Update stats and button states
   * @param {object} gameState
   * @param {boolean} isPlayingTimeline
   */
  updateStats(gameState, isPlayingTimeline = false) {
    const isTutorial = gameState.isTutorial || (gameState.level && gameState.level.isTutorial);
    const isEndless = gameState.isEndless || (gameState.level && gameState.level.isEndless);
    const isDaily = !!(gameState.level && gameState.level.isDaily);
    const totalWords = gameState.level ? gameState.level.words.length : 3;
    const currentWordNum = Math.min(gameState.wordIdx + 1, totalWords);
    const optimal = gameState.getOptimalMoves ? gameState.getOptimalMoves() : 10;
    const twoStarLimit = gameState.get2StarLimit ? gameState.get2StarLimit() : 14;
    const maxMoves = gameState.getMaxMoves ? gameState.getMaxMoves() : 18;
    const moves = gameState.moves || 0;
    const remMoves = Math.max(0, maxMoves - moves);
    const currentStars = gameState.getCurrentStars ? gameState.getCurrentStars() : 3;

    if (isTutorial) {
      if (this.el.wordProgressLabel) this.el.wordProgressLabel.textContent = 'WORD';
      if (this.el.wordProgress) this.el.wordProgress.textContent = `${currentWordNum}/${totalWords}`;
      if (this.el.movesLabel) this.el.movesLabel.textContent = 'MOVES';
      if (this.el.moves) this.el.moves.textContent = String(moves);
      if (this.el.starGoalsTracker) {
        this.el.starGoalsTracker.style.display = 'none';
      }
    } else if (isEndless) {
      if (this.el.wordProgressLabel) this.el.wordProgressLabel.textContent = 'STREAK';
      if (this.el.wordProgress) this.el.wordProgress.textContent = `🔥 ${gameState.streak}`;

      const bestEndless = parseInt(localStorage.getItem('rotatle_endless_best') || localStorage.getItem('tumbleword_endless_best') || '0', 10);
      if (this.el.movesLabel) this.el.movesLabel.textContent = 'BEST';
      if (this.el.moves) this.el.moves.textContent = `🏆 ${Math.max(bestEndless, gameState.streak)}`;

      if (this.el.starGoalsTracker) {
        this.el.starGoalsTracker.style.display = 'none';
      }
    } else if (isDaily) {
      if (this.el.wordProgressLabel) this.el.wordProgressLabel.textContent = 'WORD';
      if (this.el.wordProgress) this.el.wordProgress.textContent = `${currentWordNum}/${totalWords}`;

      if (this.el.movesLabel) this.el.movesLabel.textContent = 'MOVES';
      if (this.el.moves) this.el.moves.textContent = String(moves);

      if (this.el.starGoalsTracker) {
        this.el.starGoalsTracker.style.display = 'none';
      }
    } else {
      if (this.el.wordProgressLabel) this.el.wordProgressLabel.textContent = 'WORD';
      if (this.el.wordProgress) this.el.wordProgress.textContent = `${currentWordNum}/${totalWords}`;

      if (this.el.movesLabel) this.el.movesLabel.textContent = 'MOVES';
      if (this.el.moves) this.el.moves.textContent = `${moves}/${maxMoves}`;

      if (this.el.starGoalsTracker) {
        this.el.starGoalsTracker.style.display = 'flex';
      }

      // Update Minimalist Star Icons Active Glow
      if (this.el.starIcon1) this.el.starIcon1.classList.toggle('active', currentStars >= 1);
      if (this.el.starIcon2) this.el.starIcon2.classList.toggle('active', currentStars >= 2);
      if (this.el.starIcon3) this.el.starIcon3.classList.toggle('active', currentStars >= 3);

      // Update Minimal Context Goal Label (stable, invariant wordings)
      if (this.el.trackerNote) {
        if (currentStars === 3) {
          this.el.trackerNote.textContent = `Solve within ${optimal} moves for 3 Stars`;
        } else if (currentStars === 2) {
          this.el.trackerNote.textContent = `Solve within ${twoStarLimit} moves for 2 Stars`;
        } else if (currentStars === 1) {
          this.el.trackerNote.textContent = `Solve within ${maxMoves} moves for 1 Star`;
        } else {
          this.el.trackerNote.textContent = 'Out of moves';
        }
      }
    }

    if (this.el.streak) this.el.streak.textContent = String(gameState.streak);
    if (this.el.bestStreak) this.el.bestStreak.textContent = String(gameState.bestStreak);

    // Update Live Empty / Total Floor Cells Counter
    if (this.el.emptyCellsCount) {
      const emptyCount = gameState.getEmptyCellsCount ? gameState.getEmptyCellsCount() : 0;
      const totalFloor = gameState.getTotalFloorCells ? gameState.getTotalFloorCells() : 25;
      const prevVal = this.el.emptyCellsCount.textContent;
      const newValStr = `${emptyCount}/${totalFloor}`;
      if (prevVal !== newValStr) {
        this.el.emptyCellsCount.textContent = newValStr;
        if (this.el.emptyCellsBadge) {
          this.el.emptyCellsBadge.classList.remove('count-pop');
          void this.el.emptyCellsBadge.offsetWidth;
          this.el.emptyCellsBadge.classList.add('count-pop');
        }
      }
    }

    if (this.el.undoBtn) {
      this.el.undoBtn.disabled = isPlayingTimeline || gameState.hist.length === 0;
    }
  }

  /**
   * Update hint button badge and label
   * @param {number} count
   * @param {boolean} [isAdFree=false]
   */
  updateHintButton(count, isAdFree = false) {
    if (!this.el.hintBtn) return;
    const badge = document.getElementById('hintCountBadge');
    const label = document.getElementById('hintBtnLabel');

    if (isAdFree) {
      if (label) label.textContent = 'Hint';
      if (badge) {
        badge.textContent = '∞';
        badge.classList.remove('reward');
        badge.title = 'Unlimited hints (Ad-Free)';
      }
    } else if (count > 0) {
      if (label) label.textContent = 'Hint';
      if (badge) {
        badge.textContent = String(count);
        badge.classList.remove('reward');
        badge.title = `${count} free hints remaining`;
      }
    } else {
      if (label) label.textContent = 'Hint';
      if (badge) {
        badge.textContent = '🎬';
        badge.classList.add('reward');
        badge.title = 'Watch short video for +1 hint';
      }
    }
  }

  /**
   * Update hint button during 10-second active guidance
   * @param {number} secondsRemaining
   * @param {number} [storedCount=0]
   * @param {boolean} [isAdFree=false]
   */
  setHintGuidanceState(secondsRemaining, storedCount = 0, isAdFree = false) {
    if (!this.el.hintBtn) return;
    const badge = document.getElementById('hintCountBadge');
    const label = document.getElementById('hintBtnLabel');

    if (secondsRemaining > 0) {
      this.el.hintBtn.classList.add('hint-active');
      if (label) label.textContent = `${secondsRemaining}s`;
      if (badge) {
        badge.textContent = '⚡';
        badge.classList.remove('reward');
      }
    } else {
      this.el.hintBtn.classList.remove('hint-active');
      this.updateHintButton(storedCount, isAdFree);
    }
  }

  /**
   * Highlight recommended turn direction with pulse effect
   * @param {number|null} dir - -1 for left, 1 for right, null to clear
   * @param {boolean} [autoClear=true]
   */
  highlightHint(dir, autoClear = true) {
    this.clearHintHighlight();
    if (dir === null || dir === undefined) return;

    const btn = dir === -1 ? this.el.leftBtn : this.el.rightBtn;
    if (btn) {
      btn.classList.add('hint-pulse');
      if (autoClear) {
        this._hintTimeout = setTimeout(() => {
          btn.classList.remove('hint-pulse');
        }, 3500);
      }
    }
  }

  /**
   * Clear active hint highlight
   */
  clearHintHighlight() {
    if (this._hintTimeout) {
      clearTimeout(this._hintTimeout);
      this._hintTimeout = null;
    }
    if (this.el.leftBtn) this.el.leftBtn.classList.remove('hint-pulse');
    if (this.el.rightBtn) this.el.rightBtn.classList.remove('hint-pulse');
  }

  /**
   * Show rewarded ad hint modal
   */
  showRewardedHintModal() {
    this.openModal('rewardedHintModal');
  }

  /**
   * Hide rewarded ad hint modal
   */
  hideRewardedHintModal() {
    this.closeModal('rewardedHintModal');
  }

  /**
   * Show claim reward / hint unlocked modal
   * @param {number} [hintCount=1]
   */
  showClaimRewardModal(hintCount = 1) {
    if (this.el.claimRewardCountVal) {
      this.el.claimRewardCountVal.textContent = `${hintCount} Available`;
    }
    this.openModal('claimRewardModal');
  }

  /**
   * Hide claim reward modal
   */
  hideClaimRewardModal() {
    this.closeModal('claimRewardModal');
  }

  /**
   * Show exit confirmation modal
   * @param {string} [title='Leave Puzzle?']
   * @param {string} [desc='Are you sure you want to return to the main menu?']
   */
  showExitConfirmModal(title = 'Leave Puzzle?', desc = 'Are you sure you want to return to the main menu?') {
    if (this.el.exitConfirmTitle) {
      this.el.exitConfirmTitle.textContent = title;
    }
    if (this.el.exitConfirmDesc) {
      this.el.exitConfirmDesc.textContent = desc;
    }
    this.openModal('exitConfirmModal');
  }

  /**
   * Hide exit confirmation modal
   */
  hideExitConfirmModal() {
    this.closeModal('exitConfirmModal');
  }

  /**
   * Set status line HTML message
   * @param {string} html
   */
  setStatus(html) {
    if (this.el.status) this.el.status.innerHTML = html;
  }

  /**
   * Show settings full screen
   * @param {'home'|'game'} prevScreen
   */
  showSettingsScreen(prevScreen = 'home') {
    this._previousScreen = prevScreen;
    if (this.el.settingsScreen) {
      this.el.settingsScreen.hidden = false;
      this.el.settingsScreen.classList.remove('settings-enter');
      void this.el.settingsScreen.offsetWidth;
      this.el.settingsScreen.classList.add('settings-enter');
    }
    this.closeSettingsSubview();
    this.closeAllModals();
  }

  /**
   * Hide settings full screen
   * @returns {'home'|'game'}
   */
  hideSettingsScreen() {
    if (this.el.settingsScreen) this.el.settingsScreen.hidden = true;
    this.closeSettingsSubview();
    return this._previousScreen || 'home';
  }

  /**
   * Check if settings screen is open
   * @returns {boolean}
   */
  isSettingsOpen() {
    return !!(this.el.settingsScreen && !this.el.settingsScreen.hidden);
  }

  /**
   * Check if an in-app subview inside settings is open
   * @returns {boolean}
   */
  isSettingsSubviewOpen() {
    return !!(this.el.settingsSubview && !this.el.settingsSubview.hidden);
  }

  /**
   * Open dedicated in-app subview inside settings
   * @param {string} subviewId
   * @param {string} title
   */
  openSettingsSubview(subviewId, title = 'SETTINGS') {
    if (this.el.settingsMainView) this.el.settingsMainView.hidden = true;
    if (this.el.settingsSubview) {
      this.el.settingsSubview.hidden = false;
      this.el.settingsSubview.classList.remove('subview-enter');
      void this.el.settingsSubview.offsetWidth;
      this.el.settingsSubview.classList.add('subview-enter');
    }
    if (this.el.settingsBackBtn) this.el.settingsBackBtn.hidden = false;
    if (this.el.settingsCloseBtn) this.el.settingsCloseBtn.hidden = true;
    if (this.el.settingsTitle) this.el.settingsTitle.textContent = title;

    if (this.el.settingsSubview) {
      const contents = this.el.settingsSubview.querySelectorAll('.subview-content');
      contents.forEach(c => (c.hidden = true));
      const target = document.getElementById(subviewId);
      if (target) target.hidden = false;
    }
  }

  /**
   * Close in-app subview and return to main settings menu
   */
  closeSettingsSubview() {
    if (this.el.settingsMainView) {
      this.el.settingsMainView.hidden = false;
      this.el.settingsMainView.classList.remove('settings-main-enter');
      void this.el.settingsMainView.offsetWidth;
      this.el.settingsMainView.classList.add('settings-main-enter');
    }
    if (this.el.settingsSubview) this.el.settingsSubview.hidden = true;
    if (this.el.settingsBackBtn) this.el.settingsBackBtn.hidden = true;
    if (this.el.settingsCloseBtn) this.el.settingsCloseBtn.hidden = false;
    if (this.el.settingsTitle) this.el.settingsTitle.textContent = 'SETTINGS';

    if (this.el.settingsSubview) {
      const contents = this.el.settingsSubview.querySelectorAll('.subview-content');
      contents.forEach(c => (c.hidden = true));
    }
  }

  /**
   * Update active segmented theme button pills
   * @param {'obsidian'|'vellum'} theme
   */
  updateSettingsThemePills(theme) {
    const isObsidian = theme === 'obsidian';
    const control = document.querySelector('.segmented-pill-control');
    if (control) {
      control.setAttribute('data-selected', isObsidian ? 'obsidian' : 'vellum');
    }
    if (this.el.settingsThemeObsidianBtn) {
      this.el.settingsThemeObsidianBtn.classList.toggle('active', isObsidian);
    }
    if (this.el.settingsThemeVellumBtn) {
      this.el.settingsThemeVellumBtn.classList.toggle('active', !isObsidian);
    }
  }

  /**
   * Update haptic vibration availability badge and control
   * @param {boolean} isSupported
   */
  setVibrationSupport(isSupported) {
    if (this.el.vibrateUnavailableBadge) {
      this.el.vibrateUnavailableBadge.hidden = isSupported;
    }
    if (this.el.settingsVibrateToggle) {
      if (!isSupported) {
        this.el.settingsVibrateToggle.disabled = true;
        this.el.settingsVibrateToggle.checked = false;
      } else {
        this.el.settingsVibrateToggle.disabled = false;
      }
    }
  }

  /**
   * Update Remove Ads pill button state
   * @param {boolean} isPurchased
   */
  updateRemoveAdsButton(isPurchased) {
    if (!this.el.settingsRemoveAdsBtn) return;
    if (isPurchased) {
      this.el.settingsRemoveAdsBtn.classList.add('purchased');
      this.el.settingsRemoveAdsBtn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <span>Ad-Free</span>
      `;
      this.el.settingsRemoveAdsBtn.title = 'Ad-Free Version Active';
    } else {
      this.el.settingsRemoveAdsBtn.classList.remove('purchased');
      this.el.settingsRemoveAdsBtn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <span>Remove</span>
      `;
      this.el.settingsRemoveAdsBtn.title = 'Remove Ads';
    }
  }

  /**
   * Show victory modal
   * @param {number} moves
   * @param {number} bestStreak
   * @param {object} [level]
   * @param {number} [earnedStars]
   * @param {import('../audio/SoundFX.js').SoundFXManager} [sound]
   * @param {import('../simulation/dailyManager.js').DailyManager} [dailyManager]
   */
  showVictory(moves, bestStreak, level = null, earnedStars = 3, sound = null, dailyManager = null) {
    const isDaily = !!(level && level.isDaily);
    const isEndless = !!(level && level.isEndless);

    // 1. Toggle mode-specific container sections
    if (this.el.victoryStarsRow) this.el.victoryStarsRow.style.display = (isDaily || isEndless) ? 'none' : 'flex';
    if (this.el.victoryDailyEmblem) this.el.victoryDailyEmblem.style.display = isDaily ? 'block' : 'none';
    if (this.el.victoryCampaignStats) this.el.victoryCampaignStats.style.display = isDaily ? 'none' : 'grid';
    if (this.el.victoryDailyStats) this.el.victoryDailyStats.style.display = isDaily ? 'grid' : 'none';
    if (this.el.victoryDailyNav) this.el.victoryDailyNav.style.display = isDaily ? 'flex' : 'none';
    if (this.el.victoryCampaignActions) this.el.victoryCampaignActions.style.display = isDaily ? 'none' : 'flex';
    if (this.el.victoryDailyActions) this.el.victoryDailyActions.style.display = isDaily ? 'flex' : 'none';
    if (this.el.victoryRatingPill) this.el.victoryRatingPill.style.display = isDaily ? 'none' : 'inline-block';

    if (level) {
      if (level.isEndless) {
        if (this.el.victoryTitle) this.el.victoryTitle.textContent = 'Endless Mode Conquered! 🏆';
        if (this.el.victorySubtitle) {
          const totalWordsCount = level.totalWords || 1200;
          this.el.victorySubtitle.textContent = `Incredible mastery! You completed all ${totalWordsCount} words across all 8 tiers!`;
        }
        if (this.el.victoryScore) this.el.victoryScore.textContent = `Streak: ${bestStreak || 1200} 🔥`;
        if (this.el.victoryMoves) this.el.victoryMoves.textContent = String(moves);
        if (this.el.victoryOptimal) this.el.victoryOptimal.textContent = 'All 8 Tiers';
        if (this.el.victoryRatingPill) this.el.victoryRatingPill.textContent = '👑 COSMIC GRAND MASTER';
        if (this.el.nextLevelBtn) {
          this.el.nextLevelBtn.innerHTML = `Play New Seed <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="margin-left:4px;"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
        }
      } else if (level.isDaily) {
        const dateKey = level.dateKey || (dailyManager ? dailyManager.getTodayDateKey() : '');
        const dateFormatted = dailyManager ? dailyManager.getFormattedDate(dateKey) : 'Daily Challenge';
        const streak = dailyManager ? dailyManager.getStreak() : 1;

        if (this.el.victoryTitle) this.el.victoryTitle.textContent = 'Daily Puzzle Cleared! 🏆';
        if (this.el.victorySubtitle) this.el.victorySubtitle.textContent = dateFormatted;
        if (this.el.victoryDailyMoves) this.el.victoryDailyMoves.textContent = `${moves} Moves`;
        if (this.el.victoryDailyStreak) this.el.victoryDailyStreak.textContent = `🔥 ${streak} Day${streak === 1 ? '' : 's'}`;

        if (dailyManager) {
          const hasPrev = dailyManager.canGoPrevious(dateKey);
          const hasNext = dailyManager.canGoNext(dateKey);
          if (this.el.victoryDailyPrevBtn) this.el.victoryDailyPrevBtn.disabled = !hasPrev;
          if (this.el.victoryDailyNextBtn) this.el.victoryDailyNextBtn.disabled = !hasNext;
        }
      } else {
        if (this.el.victoryTitle) this.el.victoryTitle.textContent = `${level.name} Cleared!`;
        if (this.el.victorySubtitle) this.el.victorySubtitle.textContent = `All ${level.words.length} words spelled on ${level.n}×${level.n} grid!`;
        if (this.el.victoryScore) this.el.victoryScore.textContent = `Score: ${level.difficultyScore}`;
        if (this.el.victoryMoves) this.el.victoryMoves.textContent = String(moves);
        const optimal = level.optimalMoves ? level.optimalMoves : 10;
        if (this.el.victoryOptimal) this.el.victoryOptimal.textContent = String(optimal);
        if (this.el.victoryRatingPill) {
          if (earnedStars === 3) {
            this.el.victoryRatingPill.textContent = '⭐⭐⭐ FLAWLESS / OPTIMAL';
          } else if (earnedStars === 2) {
            this.el.victoryRatingPill.textContent = '⭐⭐ SKILLED SOLVER';
          } else {
            this.el.victoryRatingPill.textContent = '⭐ LEVEL CLEARED';
          }
        }
        if (this.el.nextLevelBtn) {
          this.el.nextLevelBtn.innerHTML = `Next Level <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="margin-left:4px;"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
        }
      }
    }

    // Reset stars
    [this.el.victoryStar1, this.el.victoryStar2, this.el.victoryStar3].forEach(s => {
      if (s) s.classList.remove('earned');
    });

    if (this.el.victoryOverlay) this.el.victoryOverlay.hidden = false;

    // Trigger staggered star drop-in animations only for Campaign
    if (!isDaily && !isEndless) {
      for (let i = 1; i <= 3; i++) {
        if (i <= earnedStars) {
          setTimeout(() => {
            const starEl = this.el[`victoryStar${i}`];
            if (starEl) starEl.classList.add('earned');
            if (sound && sound.playStarDrop) sound.playStarDrop(i);
          }, i * 260);
        }
      }
    }
  }

  /**
   * Hide victory modal
   */
  hideVictory() {
    if (this.el.victoryOverlay) {
      this.el.victoryOverlay.classList.add('is-closing');
      setTimeout(() => {
        if (this.el.victoryOverlay) {
          this.el.victoryOverlay.hidden = true;
          this.el.victoryOverlay.classList.remove('is-closing');
        }
      }, 150);
    }
    const starsContainer = this.el.victoryStar1 ? this.el.victoryStar1.parentElement : null;
    if (starsContainer) {
      starsContainer.style.display = 'flex';
    }
    [this.el.victoryStar1, this.el.victoryStar2, this.el.victoryStar3].forEach(s => {
      if (s) s.classList.remove('earned');
    });
  }

  /**
   * Show out-of-moves modal
   * @param {object} gameState
   */
  showOutOfMoves(gameState) {
    const totalWords = gameState.level ? gameState.level.words.length : 3;
    const maxMoves = gameState.getMaxMoves ? gameState.getMaxMoves() : 16;

    if (this.el.outOfMovesWords) {
      this.el.outOfMovesWords.textContent = `${gameState.wordIdx} / ${totalWords}`;
    }
    if (this.el.outOfMovesCount) {
      this.el.outOfMovesCount.textContent = `${gameState.moves} / ${maxMoves}`;
    }
    if (this.el.outOfMovesModal) {
      this.el.outOfMovesModal.classList.remove('is-closing');
      this.el.outOfMovesModal.hidden = false;
    }
  }

  /**
   * Hide out-of-moves modal
   */
  hideOutOfMoves() {
    if (this.el.outOfMovesModal) {
      this.el.outOfMovesModal.classList.add('is-closing');
      setTimeout(() => {
        if (this.el.outOfMovesModal) {
          this.el.outOfMovesModal.hidden = true;
          this.el.outOfMovesModal.classList.remove('is-closing');
        }
      }, 150);
    }
  }

  /**
   * Show a modern floating toast notification message
   * @param {string} message
   * @param {number} [durationMs=2800]
   */
  showToast(message, durationMs = 2800) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.className = 'app-toast';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.remove('show');
    // Force DOM reflow to restart CSS animation
    void toast.offsetWidth;
    toast.classList.add('show');

    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      this._toastTimer = null;
    }, durationMs);
  }
}
