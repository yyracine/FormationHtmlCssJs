const App = (() => {
  let state = {
    route: 'home',
    module: null,
    tab: 'lessons',
    index: 0,
    project: null,
    step: 0,
    quizResults: null
  };
  let currentEditor = null;
  let quizTimerInterval = null;
  const app = document.getElementById('app');

  // ============ THÈME ============
  const initTheme = () => {
    const saved = localStorage.getItem('webmaster_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('webmaster_theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '️' : '🌙';
  };

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };

  // ============ BURGER MENU ============
  const initBurgerMenu = () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    if (!burgerBtn || !navMenu) return;

    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      burgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Fermer au clic sur un lien
    navMenu.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    // Fermer au clic à l'extérieur
    document.addEventListener('click', (e) => {
      if (!burgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  };

  // ============ ROUTER ============
  const navigate = (route, params = {}) => {
    stopQuizTimer();
    state = { route, ...params };
    render();
    updateNav();
    updateGlobalProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const render = () => {
    switch (state.route) {
      case 'home':
        app.innerHTML = UI.renderHome();
        break;
      case 'module-html':
      case 'module-css':
      case 'module-js':
        state.module = state.route.replace('module-', '');
        if (state.tab === 'quiz') {
          app.innerHTML = UI.renderQuizIntro(state.module);
        } else {
          app.innerHTML = UI.renderModule(state.module, state.tab);
        }
        break;
      case 'quiz-active':
        renderQuizQuestion();
        return;
      case 'quiz-results':
        app.innerHTML = UI.renderQuizResults(state.quizResults, state.module);
        break;
      case 'certificate':
        app.innerHTML = UI.renderCertificate();
        bindCertificateEvents();
        break;
      case 'projects':
        app.innerHTML = UI.renderProjectsList();
        break;
      case 'project-detail':
        app.innerHTML = UI.renderProjectDetail(state.project);
        bindProjectDetailEvents();
        break;
      case 'guide':
        app.innerHTML = UI.renderGuide();
        bindGuideEvents();
        break;
      default:
        app.innerHTML = UI.renderHome();
    }
    bindEvents();
  };

  const updateNav = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      const route = btn.dataset.route;
      const active = route === state.route ||
        (route.startsWith('module-') && state.route === route) ||
        (route === 'projects' && (state.route === 'projects' || state.route === 'project-detail')) ||
        (route === 'certificate' && state.route === 'certificate') ||
        (route === 'guide' && state.route === 'guide');
      btn.classList.toggle('active', active);
    });
  };

  const updateGlobalProgress = () => {
    const p = ProgressManager.getGlobalProgress();
    const fill = document.getElementById('globalProgress');
    const value = document.getElementById('globalProgressValue');
    if (fill) fill.style.width = p + '%';
    if (value) value.textContent = p + '%';
  };

  // ============ EVENTS GÉNÉRAUX ============
  const bindEvents = () => {
    // Navigation
    document.querySelectorAll('[data-route]').forEach(el => {
      el.addEventListener('click', () => {
        const route = el.dataset.route;
        if (route.startsWith('module-')) navigate(route, { tab: 'lessons', index: 0 });
        else navigate(route);
      });
    });

    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        state.tab = tab.dataset.tab;
        state.index = 0;
        render();
      });
    });

    // Sidebar items (leçons/exercices)
    document.querySelectorAll('.sidebar__item').forEach(item => {
      item.addEventListener('click', () => {
        state.tab = item.dataset.type;
        state.index = parseInt(item.dataset.index, 10);
        showItem();
        document.querySelectorAll('.sidebar__item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Copy buttons
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.closest('.code-block').querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => showToast('Code copié !', 'success'));
      });
    });

    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Quiz start / retry
    document.querySelectorAll('[data-action="start-quiz"], [data-action="retry-quiz"]').forEach(btn => {
      btn.addEventListener('click', startQuiz);
    });

    // Project cards
    document.querySelectorAll('[data-project]').forEach(card => {
      card.addEventListener('click', () => {
        navigate('project-detail', { project: card.dataset.project, step: 0 });
      });
    });
  };

  // ============ SHOW ITEM (leçon ou exercice) ============
  const showItem = () => {
    const panel = document.getElementById('contentPanel');
    if (!panel) return;
    if (state.tab === 'lessons') {
      panel.innerHTML = UI.renderLesson(state.module, state.index);
      ProgressManager.markLessonComplete(state.module, state.index);
      bindLessonEvents();
    } else if (state.tab === 'exercises') {
      panel.innerHTML = UI.renderExercise(state.module, state.index);
      requestAnimationFrame(() => bindExerciseEvents());
    }
    updateGlobalProgress();
    document.querySelectorAll('.sidebar__item').forEach((item, i) => {
      const isComplete = state.tab === 'lessons'
        ? ProgressManager.isLessonComplete(state.module, i)
        : ProgressManager.isExerciseComplete(state.module, i);
      item.classList.toggle('completed', isComplete);
    });
  };

  // ============ LESSON EVENTS ============
  const bindLessonEvents = () => {
    const panel = document.getElementById('contentPanel');
    if (!panel) return;
    panel.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        if (action === 'lesson-prev' && state.index > 0) { state.index--; showItem(); }
        else if (action === 'lesson-next') { state.index++; showItem(); }
        else if (action === 'goto-exercises') { state.tab = 'exercises'; state.index = 0; render(); }
      });
    });
  };

  // ============ EXERCISE EVENTS ============
  const bindExerciseEvents = () => {
    const panel = document.getElementById('contentPanel');
    if (!panel) return;

    const ex = COURSES[state.module].exercises[state.index];
    if (!ex) return;

    const editorContainer = document.getElementById('exerciseEditor');
    if (!editorContainer) return;

    currentEditor = Editor.create(editorContainer, ex.initialCode, 'html');
    if (!currentEditor) return;

    // Valider
    const validateBtn = document.getElementById('validateBtn');
    if (validateBtn) {
      validateBtn.addEventListener('click', () => {
        const code = currentEditor.getValue();
        const feedback = document.getElementById('feedbackArea');
        if (ex.validate(code)) {
          feedback.innerHTML = `<div class="feedback feedback--success"><span class="feedback__icon">✅</span><div><strong>Excellent !</strong> Votre code est correct.</div></div>`;
          ProgressManager.markExerciseComplete(state.module, state.index);
          updateGlobalProgress();
          showToast('Exercice réussi ! 🎉', 'success');
        } else {
          feedback.innerHTML = `<div class="feedback feedback--error"><span class="feedback__icon">❌</span><div><strong>Pas encore.</strong> Vérifiez votre code ou demandez un indice.</div></div>`;
        }
      });
    }

    // Indices
    let hintLevel = 0;
    const hintBtn = document.getElementById('hintBtn');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        const hintsArea = document.getElementById('hintsArea');
        if (hintLevel < ex.hints.length) {
          const visible = ex.hints.slice(0, hintLevel + 1);
          hintsArea.innerHTML = `<div class="hints-panel"><div class="hints-panel__title">💡 Indices (${hintLevel + 1}/${ex.hints.length})</div><ul>${visible.map(h => `<li>${UI.escapeHtml(h)}</li>`).join('')}</ul></div>`;
          hintLevel++;
        } else {
          showToast('Tous les indices ont été révélés', 'error');
        }
      });
    }

    // Solution (scrollable)
    let solutionShown = false;
    const solutionBtn = document.getElementById('solutionBtn');
    if (solutionBtn) {
      solutionBtn.addEventListener('click', () => {
        const area = document.getElementById('solutionArea');
        if (!solutionShown) {
          area.innerHTML = `
            <div class="solution-panel">
              <div class="solution-panel__title">✅ Solution complète</div>
              <div class="code-block" style="max-height: 600px; overflow: auto;">
                <div class="code-block__header">
                  <span>Code corrigé (scrollable)</span>
                  <button class="code-block__copy" id="copySolution">📋 Copier</button>
                </div>
                <pre style="white-space: pre; overflow-x: auto;"><code>${UI.escapeHtml(ex.solution)}</code></pre>
              </div>
              <button class="btn btn--primary" id="applySolution" style="margin-top:12px">
                📥 Appliquer la solution dans l'éditeur
              </button>
            </div>
          `;
          solutionShown = true;

          const copyBtn = document.getElementById('copySolution');
          const applyBtn = document.getElementById('applySolution');
          if (copyBtn) {
            copyBtn.addEventListener('click', () => {
              navigator.clipboard.writeText(ex.solution).then(() => showToast('Solution copiée !', 'success'));
            });
          }
          if (applyBtn) {
            applyBtn.addEventListener('click', () => {
              currentEditor.setValue(ex.solution);
              showToast('Solution appliquée !', 'success');
            });
          }
        } else {
          area.innerHTML = '';
          solutionShown = false;
        }
      });
    }

    // Navigation
    panel.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        if (action === 'ex-prev' && state.index > 0) { state.index--; showItem(); }
        else if (action === 'ex-next') { state.index++; showItem(); }
        else if (action === 'finish-module') { state.tab = 'quiz'; render(); }
      });
    });
  };

  // ============ QUIZ ============
  const startQuiz = () => {
    Quiz.init(COURSES[state.module].quiz);
    navigate('quiz-active', { module: state.module });
  };

  const startQuizTimer = () => {
    const timerEl = document.getElementById('quizTimer');
    if (!timerEl) return;
    const start = Date.now();
    quizTimerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const s = String(elapsed % 60).padStart(2, '0');
      if (timerEl) timerEl.textContent = `${m}:${s}`;
    }, 1000);
  };

  const stopQuizTimer = () => {
    if (quizTimerInterval) {
      clearInterval(quizTimerInterval);
      quizTimerInterval = null;
    }
  };

  const renderQuizQuestion = () => {
    const question = Quiz.getCurrentQuestion();
    if (!question) return;
    const total = COURSES[state.module].quiz.questions.length;
    const currentIndex = COURSES[state.module].quiz.questions.indexOf(question);
    app.innerHTML = UI.renderQuizQuestion(question, currentIndex, total);
    bindQuizQuestionEvents();
    startQuizTimer();
  };

  const bindQuizQuestionEvents = () => {
    const options = document.querySelectorAll('.quiz-option');
    const nextBtn = document.getElementById('quizNextBtn');
    let answered = false;

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const idx = parseInt(opt.dataset.index, 10);
        const result = Quiz.submitAnswer(idx);

        options.forEach(o => {
          o.disabled = true;
          const oIdx = parseInt(o.dataset.index, 10);
          if (oIdx === result.correctIndex) o.classList.add('correct');
          else if (oIdx === idx && !result.isCorrect) o.classList.add('wrong');
        });

        const question = Quiz.getCurrentQuestion();
        document.getElementById('quizExplanation').innerHTML = `
          <div class="quiz-explanation">
            <div class="quiz-explanation__title">${result.isCorrect ? '✅ Correct !' : '❌ Incorrect'}</div>
            <div>${UI.escapeHtml(question.explanation)}</div>
          </div>
        `;
        nextBtn.disabled = false;
      });
    });

    nextBtn.addEventListener('click', () => {
      if (Quiz.next()) renderQuizQuestion();
      else {
        stopQuizTimer();
        const results = Quiz.finish();
        ProgressManager.saveQuizScore(state.module, results);
        state.quizResults = results;
        navigate('quiz-results', { module: state.module, quizResults: results });
        if (results.passed) showToast('🎉 Quiz réussi !', 'success');
      }
    });
  };

  // ============ CERTIFICATE ============
  const bindCertificateEvents = () => {
    const existing = ProgressManager.getCertificate();
    const generateBtn = document.getElementById('generateCertBtn');
    const downloadBtn = document.getElementById('downloadCertBtn');
    const printBtn = document.getElementById('printCertBtn');

    if (generateBtn) {
      generateBtn.addEventListener('click', () => {
        const name = document.getElementById('certName').value.trim();
        if (!name) { showToast('Entrez votre nom', 'error'); return; }
        generateCertificate(name);
      });
    }

    if (existing && downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const canvas = Certificate.generate(existing.name, existing.stats);
        Certificate.downloadPNG(canvas, `certificat-${existing.name.replace(/\s+/g, '_')}.png`);
      });
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          const canvas = Certificate.generate(existing.name, existing.stats);
          Certificate.printPDF(canvas);
        });
      }
      const preview = document.getElementById('certPreview');
      if (preview) preview.appendChild(Certificate.generate(existing.name, existing.stats));
    }
  };

  const generateCertificate = (name) => {
    const modulesCompleted = ['html', 'css', 'js'].filter(m => ProgressManager.isModuleComplete(m)).length;
    const scores = ['html', 'css', 'js'].map(m => ProgressManager.getQuizScore(m)?.percentage || 0);
    const totalScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const stats = {
      modulesCompleted,
      totalScore,
      date: new Date(),
      certificateId: 'WM-' + Date.now().toString(36).toUpperCase()
    };
    ProgressManager.saveCertificate({ name, stats });
    Certificate.saveCertificate({ name, stats });
    showToast('🏆 Certificat généré !', 'success');
    render();
  };

  // ============ PROJECTS ============
  const bindProjectDetailEvents = () => {
    document.querySelectorAll('.project-step').forEach(step => {
      step.addEventListener('click', () => {
        state.step = parseInt(step.dataset.step, 10);
        showProjectStep();
        document.querySelectorAll('.project-step').forEach(s => s.classList.remove('active'));
        step.classList.add('active');
      });
    });

    const showSolutionBtn = document.getElementById('showSolutionBtn');
    if (showSolutionBtn) {
      showSolutionBtn.addEventListener('click', () => {
        const project = Projects.getProject(state.project);
        const panel = document.getElementById('projectContent');
        panel.innerHTML = `
          <h2 class="lesson__title">Solution complète</h2>
          <div class="code-block" style="max-height: 700px; overflow: auto;">
            <div class="code-block__header">
              <span>Code final</span>
              <button class="code-block__copy" data-copy>📋 Copier</button>
            </div>
            <pre style="white-space: pre; overflow-x: auto;"><code>${UI.escapeHtml(project.solution)}</code></pre>
          </div>
        `;
        bindEvents();
      });
    }
  };

  const showProjectStep = () => {
    const panel = document.getElementById('projectContent');
    if (!panel) return;
    const project = Projects.getProject(state.project);
    const step = project.steps[state.step];
    panel.innerHTML = UI.renderProjectStep(state.project, state.step);
    const editorContainer = document.getElementById('projectEditor');
    if (!editorContainer) return;
    currentEditor = Editor.create(editorContainer, step.starterCode, 'html');
    if (!currentEditor) return;

    const validateBtn = document.getElementById('validateStepBtn');
    if (validateBtn) {
      validateBtn.addEventListener('click', () => {
        const code = currentEditor.getValue();
        const feedback = document.getElementById('stepFeedback');
        if (step.validate(code)) {
          feedback.innerHTML = `<div class="feedback feedback--success"><span class="feedback__icon">✅</span><div><strong>Étape validée !</strong></div></div>`;
          ProgressManager.saveProjectStep(state.project, state.step);
          showToast('Étape réussie ! 🎉', 'success');
          render();
        } else {
          feedback.innerHTML = `<div class="feedback feedback--error"><span class="feedback__icon">❌</span><div><strong>Étape incomplète.</strong></div></div>`;
        }
      });
    }

    const resetBtn = document.getElementById('resetStepBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => currentEditor.setValue(step.starterCode));
    }
  };

  // ============ GUIDE ============
  const bindGuideEvents = () => {
    document.querySelectorAll('[data-guide-section]').forEach(header => {
      header.addEventListener('click', () => {
        const section = header.closest('.guide-section');
        section.classList.toggle('open');
      });
    });
    const first = document.querySelector('.guide-section');
    if (first) first.classList.add('open');

    document.querySelectorAll('.guide-toc__list a').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = a.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        if (target) {
          target.classList.add('open');
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  };

  // ============ TOAST ============
  const showToast = (message, type = 'success') => {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast show toast--${type}`;
    setTimeout(() => toast.classList.remove('show'), 3000);
  };

  // ============ INIT ============
  const init = () => {
    initTheme();
    render();
    updateNav();
    updateGlobalProgress();
    initBurgerMenu();
  };

  return { init, navigate };
})();

document.addEventListener('DOMContentLoaded', () => {
  App.init();
  if (typeof PWA !== 'undefined') PWA.init();
});