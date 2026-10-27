const UI = (() => {
  const escapeHtml = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  // ============ HOME ============
  const renderHome = () => {
    const modules = ['html', 'css', 'js'].map(id => {
      const m = COURSES[id];
      const progress = ProgressManager.getModuleProgress(id);
      return `
        <div class="module-card" data-route="module-${id}" style="--card-gradient: ${m.color}">
          <div class="module-card__icon">${m.icon}</div>
          <h2 class="module-card__title">${m.title}</h2>
          <p class="module-card__desc">${m.description}</p>
          <div class="module-card__meta">
            <div class="module-card__progress">
              <div class="progress-bar" style="width:80px;">
                <div class="progress-bar__fill" style="width:${progress}%"></div>
              </div>
              <span>${progress}%</span>
            </div>
            <span>${m.lessons.length} leçons • ${m.exercises.length} exercices</span>
            <span class="module-card__arrow">→</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <section class="hero">
        <span class="hero__badge">✨ Formation interactive 100% gratuite • Mode hors-ligne</span>
        <h1 class="hero__title">Maîtrisez le développement web</h1>
        <p class="hero__subtitle">
          Une formation complète et progressive pour apprendre HTML, CSS et JavaScript.
          Cours détaillés, exercices interactifs, projets guidés et certificat.
        </p>
        <div class="quick-actions">
          <button class="btn btn--primary" data-route="guide">📖 Guide d'utilisation</button>
          <button class="btn" data-route="projects">🚀 Voir les projets</button>
          <button class="btn" data-route="certificate"> Mon certificat</button>
        </div>
      </section>
      <section class="modules-grid">${modules}</section>
    `;
  };

  // ============ MODULE ============
  const renderModule = (moduleId, tab = 'lessons') => {
    const course = COURSES[moduleId];
    if (!course) return '<p>Module introuvable.</p>';

    const items = tab === 'lessons' ? course.lessons : tab === 'exercises' ? course.exercises : [];
    const listItems = items.map((item, i) => {
      const isComplete = tab === 'lessons'
        ? ProgressManager.isLessonComplete(moduleId, i)
        : ProgressManager.isExerciseComplete(moduleId, i);
      return `
        <li>
          <button class="sidebar__item ${isComplete ? 'completed' : ''}"
                  data-type="${tab}" data-index="${i}">
            <span class="sidebar__item-num">${i + 1}</span>
            <span>${escapeHtml(item.title)}</span>
          </button>
        </li>
      `;
    }).join('');

    const quizBtn = tab !== 'quiz' ? `<button class="tab" data-tab="quiz">📝 Quiz</button>` : '';

    return `
      <div class="module-header">
        <button class="back-btn" data-route="home" title="Retour">←</button>
        <h1 class="module-header__title">${course.icon} Module ${course.title}</h1>
      </div>
      <div class="tabs">
        <button class="tab ${tab === 'lessons' ? 'active' : ''}" data-tab="lessons">📖 Cours (${course.lessons.length})</button>
        <button class="tab ${tab === 'exercises' ? 'active' : ''}" data-tab="exercises">💻 Exercices (${course.exercises.length})</button>
        ${quizBtn}
      </div>
      <div class="module-layout">
        <aside class="sidebar">
          <h3 class="sidebar__title">${tab === 'lessons' ? 'Leçons' : tab === 'exercises' ? 'Exercices' : 'Quiz'}</h3>
          ${tab === 'quiz' ? `
            <div style="padding:20px;text-align:center">
              <p style="color:var(--text-secondary);margin-bottom:16px">
                ${course.quiz.questions.length} questions • Score minimum : ${course.quiz.passingScore}%
              </p>
              <button class="btn btn--primary" data-action="start-quiz">🚀 Commencer le quiz</button>
            </div>
          ` : `<ul class="sidebar__list">${listItems}</ul>`}
        </aside>
        <div class="content-panel" id="contentPanel">
          <p style="color:var(--text-secondary);">← Sélectionnez un élément dans la liste.</p>
        </div>
      </div>
    `;
  };

  // ============ LESSON ============
  const renderLesson = (moduleId, index) => {
    const course = COURSES[moduleId];
    const lesson = course.lessons[index];
    const total = course.lessons.length;
    const prev = index > 0 ? `<button class="btn" data-action="lesson-prev">← Précédent</button>` : `<span></span>`;
    const next = index < total - 1
      ? `<button class="btn btn--primary" data-action="lesson-next">Suivant →</button>`
      : `<button class="btn btn--success" data-action="goto-exercises">Passer aux exercices →</button>`;

    return `
      <div style="max-height: calc(100vh - 200px); overflow-y: auto; padding-right: 10px;">
        <h2 class="lesson__title">${lesson.title}</h2>
        <div class="lesson__content">${lesson.content}</div>
        <div class="code-block">
          <div class="code-block__header">
            <span>Exemple de code</span>
            <button class="code-block__copy" data-copy>📋 Copier</button>
          </div>
          <pre style="white-space: pre; overflow-x: auto;"><code>${escapeHtml(lesson.code)}</code></pre>
        </div>
        <div class="callout">
          <div class="callout__title">💡 À retenir</div>
          <div class="callout__text">${lesson.explanation}</div>
        </div>
        <div class="lesson__nav">${prev}${next}</div>
      </div>
    `;
  };

  // ============ EXERCISE ============
  const renderExercise = (moduleId, index) => {
    const course = COURSES[moduleId];
    const ex = course.exercises[index];
    const total = course.exercises.length;
    const prev = index > 0 ? `<button class="btn" data-action="ex-prev">← Précédent</button>` : `<span></span>`;
    const next = index < total - 1
      ? `<button class="btn btn--primary" data-action="ex-next">Suivant →</button>`
      : `<button class="btn btn--success" data-action="finish-module">📝 Passer au quiz →</button>`;

    return `
      <div style="max-height: calc(100vh - 200px); overflow-y: auto; padding-right: 10px;">
        <div class="exercise__header">
          <h2 class="exercise__title">${ex.title}</h2>
          <p class="exercise__desc">${ex.description}</p>
        </div>
        <div id="exerciseEditor"></div>
        <div class="exercise__actions">
          <button class="btn btn--primary" id="validateBtn">✓ Valider</button>
          <button class="btn btn--warning" id="hintBtn">💡 Indice</button>
          <button class="btn" id="solutionBtn">🔍 Solution</button>
        </div>
        <div id="feedbackArea"></div>
        <div id="hintsArea"></div>
        <div id="solutionArea"></div>
        <div class="lesson__nav">${prev}${next}</div>
      </div>
    `;
  };

  // ============ QUIZ INTRO ============
  const renderQuizIntro = (moduleId) => {
    const course = COURSES[moduleId];
    const existingScore = ProgressManager.getQuizScore(moduleId);
    return `
      <div class="quiz-container">
        <div class="module-header">
          <button class="back-btn" data-route="module-${moduleId}" title="Retour">←</button>
          <h1 class="module-header__title">📝 Quiz ${course.title}</h1>
        </div>
        <div class="content-panel" style="text-align:center;padding:40px">
          <h2 style="font-size:28px;margin-bottom:16px">Évaluation finale</h2>
          <p style="color:var(--text-secondary);margin-bottom:24px">
            ${course.quiz.questions.length} questions • Score minimum : ${course.quiz.passingScore}%
          </p>
          ${existingScore ? `
            <div style="padding:16px;background:var(--bg-tertiary);border-radius:var(--radius-md);margin-bottom:24px">
              <p style="font-size:14px;color:var(--text-muted);margin-bottom:8px">Meilleur score</p>
              <p style="font-size:36px;font-weight:700;color:${existingScore.passed ? 'var(--accent-success)' : 'var(--accent-error)'}">
                ${existingScore.percentage}%
              </p>
            </div>
          ` : ''}
          <button class="btn btn--primary" data-action="start-quiz" style="font-size:16px;padding:14px 32px">
            ${existingScore ? '🔄 Recommencer' : ' Commencer'}
          </button>
        </div>
      </div>
    `;
  };

  // ============ QUIZ QUESTION ============
  const renderQuizQuestion = (q, index, total) => {
    const letters = ['A', 'B', 'C', 'D'];
    const options = q.options.map((opt, i) => `
      <button class="quiz-option" data-index="${i}">
        <span class="quiz-option__letter">${letters[i]}</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `).join('');

    return `
      <div class="quiz-container">
        <div class="quiz-header">
          <span class="quiz-progress">Question ${index + 1} / ${total}</span>
          <span class="quiz-timer" id="quizTimer">00:00</span>
        </div>
        <div class="quiz-question">
          <div class="quiz-question__number">Question ${index + 1}</div>
          <h2 class="quiz-question__text">${escapeHtml(q.question)}</h2>
          <div class="quiz-options">${options}</div>
          <div id="quizExplanation"></div>
        </div>
        <div style="display:flex;justify-content:flex-end">
          <button class="btn btn--primary" id="quizNextBtn" disabled>
            ${index < total - 1 ? 'Suivante →' : 'Terminer'}
          </button>
        </div>
      </div>
    `;
  };

  // ============ QUIZ RESULTS ============
  const renderQuizResults = (results, moduleId) => {
    return `
      <div class="quiz-container">
        <div class="quiz-results">
          <h2 style="font-size:20px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px">Résultats</h2>
          <div class="quiz-results__score">${results.percentage}%</div>
          <p class="quiz-results__message ${results.passed ? 'passed' : 'failed'}">
            ${results.passed ? '🎉 Félicitations !' : '😔 Score insuffisant'}
          </p>
          <div class="quiz-results__stats">
            <div class="quiz-results__stat">
              <div class="quiz-results__stat-value">${results.score}/${results.total}</div>
              <div class="quiz-results__stat-label">Bonnes réponses</div>
            </div>
            <div class="quiz-results__stat">
              <div class="quiz-results__stat-value">${Math.floor(results.elapsed / 60)}:${String(results.elapsed % 60).padStart(2, '0')}</div>
              <div class="quiz-results__stat-label">Temps</div>
            </div>
            <div class="quiz-results__stat">
              <div class="quiz-results__stat-value">${results.passingScore}%</div>
              <div class="quiz-results__stat-label">Requis</div>
            </div>
          </div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn" data-route="module-${moduleId}">← Module</button>
            <button class="btn btn--primary" data-action="retry-quiz">🔄 Recommencer</button>
            ${results.passed ? `<button class="btn btn--success" data-route="certificate">🏆 Certificat</button>` : ''}
          </div>
        </div>
      </div>
    `;
  };

  // ============ CERTIFICATE ============
  const renderCertificate = () => {
    const canAccess = ProgressManager.canAccessCertificate();
    const existing = ProgressManager.getCertificate();

    if (!canAccess && !existing) {
      const modules = ['html', 'css', 'js'].map(m => {
        const complete = ProgressManager.isModuleComplete(m);
        return `
          <div class="certificate-checklist__item ${complete ? 'done' : ''}">
            <span class="certificate-checklist__icon">${complete ? '✅' : '⬜'}</span>
            <span>Module ${COURSES[m].title} ${complete ? 'validé' : 'en cours'}</span>
          </div>
        `;
      }).join('');

      return `
        <div class="certificate-view">
          <div class="certificate-locked">
            <div class="certificate-locked__icon"></div>
            <h2 class="certificate-locked__title">Certificat verrouillé</h2>
            <p class="certificate-locked__desc">
              Complétez les 3 modules (leçons + exercices + quiz ≥ 70%) pour débloquer votre certificat.
            </p>
            <div class="certificate-checklist">${modules}</div>
            <button class="btn btn--primary" data-route="home" style="margin-top:20px">Continuer la formation</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="certificate-view">
        <div class="module-header">
          <button class="back-btn" data-route="home">←</button>
          <h1 class="module-header__title">🏆 Votre certificat</h1>
        </div>
        <div class="content-panel" style="padding:32px">
          ${!existing ? `
            <p style="color:var(--text-secondary);margin-bottom:20px">
              Félicitations ! Entrez votre nom pour générer votre certificat.
            </p>
            <div style="display:flex;gap:10px;max-width:500px;margin:0 auto">
              <input type="text" id="certName" placeholder="Votre nom complet"
                     style="flex:1;padding:12px 16px;background:var(--bg-tertiary);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary)">
              <button class="btn btn--primary" id="generateCertBtn">Générer</button>
            </div>
          ` : `
            <div class="certificate-preview" id="certPreview"></div>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:24px">
              <button class="btn btn--primary" id="downloadCertBtn">📥 PNG</button>
              <button class="btn" id="printCertBtn">🖨️ PDF</button>
            </div>
          `}
        </div>
      </div>
    `;
  };

  // ============ PROJECTS LIST ============
  const renderProjectsList = () => {
    const projects = Projects.getProjects();
    const cards = projects.map(p => {
      const progress = ProgressManager.getProjectProgress(p.id);
      const percent = Math.round((progress.length / p.steps.length) * 100);
      const isBonus = p.bonus === true;
      return `
        <div class="project-card ${isBonus ? 'bonus' : ''}" data-project="${p.id}">
          <span class="project-card__level">${p.level} • ${p.duration}</span>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.description}</p>
          <ul class="project-card__objectives">
            ${p.objectives.slice(0, 3).map(o => `<li>${escapeHtml(o)}</li>`).join('')}
          </ul>
          <div style="margin-top:16px">
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-muted);margin-bottom:6px">
              <span>Progression</span>
              <span>${progress.length}/${p.steps.length}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-bar__fill" style="width:${percent}%"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="module-header">
        <button class="back-btn" data-route="home">←</button>
        <h1 class="module-header__title">🚀 Projets guidés</h1>
      </div>
      <p style="color:var(--text-secondary);margin-bottom:8px">
        9 projets progressifs pour consolider vos acquis. 💡 Installez l'app pour y accéder hors-ligne !
      </p>
      <div class="projects-grid-main">${cards}</div>
    `;
  };

  // ============ PROJECT DETAIL ============
  const renderProjectDetail = (projectId) => {
    const project = Projects.getProject(projectId);
    if (!project) return '<p>Projet introuvable.</p>';
    const progress = ProgressManager.getProjectProgress(projectId);

    const steps = project.steps.map((step, i) => {
      const completed = progress.includes(i);
      return `
        <div class="project-step ${completed ? 'completed' : ''}" data-step="${i}">
          <div class="project-step__num">${completed ? '✓' : i + 1}</div>
          <div class="project-step__content">
            <div class="project-step__title">${escapeHtml(step.title)}</div>
            <div class="project-step__instruction">${escapeHtml(step.instruction)}</div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="module-header">
        <button class="back-btn" data-route="projects">←</button>
        <h1 class="module-header__title">${project.title}</h1>
      </div>
      <div class="module-layout">
        <aside class="sidebar">
          <h3 class="sidebar__title">Étapes</h3>
          <div class="project-steps">${steps}</div>
          <button class="btn" id="showSolutionBtn" style="width:100%;margin-top:12px">🔍 Solution complète</button>
        </aside>
        <div class="content-panel" id="projectContent">
          <p style="color:var(--text-secondary)">← Sélectionnez une étape.</p>
        </div>
      </div>
    `;
  };

  // ============ PROJECT STEP ============
  const renderProjectStep = (projectId, stepIndex) => {
    const project = Projects.getProject(projectId);
    const step = project.steps[stepIndex];
    return `
      <h2 class="lesson__title">${step.title}</h2>
      <div class="callout" style="margin-bottom:20px">
        <div class="callout__title">🎯 Objectif</div>
        <div class="callout__text">${escapeHtml(step.instruction)}</div>
      </div>
      <div id="projectEditor"></div>
      <div class="exercise__actions">
        <button class="btn btn--primary" id="validateStepBtn">✓ Valider</button>
        <button class="btn" id="resetStepBtn">Réinitialiser</button>
      </div>
      <div id="stepFeedback"></div>
    `;
  };

  // ============ GUIDE ============
  const renderGuide = () => {
    const sections = Guide.getSections();
    const toc = sections.map(s => `<li><a href="#guide-${s.id}">${s.icon} ${s.title}</a></li>`).join('');
    const content = sections.map(s => `
      <div class="guide-section" id="guide-${s.id}">
        <div class="guide-section__header" data-guide-section="${s.id}">
          <div class="guide-section__title">
            <span class="guide-section__icon">${s.icon}</span>
            <span>${s.title}</span>
          </div>
          <span class="guide-section__toggle">▼</span>
        </div>
        <div class="guide-section__content">
          <div class="guide-section__body">${s.content}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="guide-container">
        <div class="module-header">
          <button class="back-btn" data-route="home">←</button>
          <h1 class="module-header__title"> Guide d'utilisation</h1>
        </div>
        <p style="color:var(--text-secondary);margin-bottom:24px">
          Tout ce que vous devez savoir pour tirer le meilleur parti de WebMaster Academy.
        </p>
        <div class="guide-toc">
          <h3 class="guide-toc__title">Sommaire</h3>
          <ul class="guide-toc__list">${toc}</ul>
        </div>
        <div class="guide-sections">${content}</div>
      </div>
    `;
  };

  return {
    renderHome,
    renderModule,
    renderLesson,
    renderExercise,
    escapeHtml,
    renderQuizIntro,
    renderQuizQuestion,
    renderQuizResults,
    renderCertificate,
    renderProjectsList,
    renderProjectDetail,
    renderProjectStep,
    renderGuide
  };
})();