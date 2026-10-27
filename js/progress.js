const ProgressManager = (() => {
  const STORAGE_KEY = 'webmaster_progress';

  const load = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { html: { lessons: [], exercises: [] }, css: { lessons: [], exercises: [] }, js: { lessons: [], exercises: [] } };
      return JSON.parse(raw);
    } catch { return { html: { lessons: [], exercises: [] }, css: { lessons: [], exercises: [] }, js: { lessons: [], exercises: [] } }; }
  };

  const save = (data) => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e) { console.warn(e); } };

  const markLessonComplete = (module, index) => { const data = load(); if (!data[module].lessons.includes(index)) { data[module].lessons.push(index); save(data); } };
  const markExerciseComplete = (module, index) => { const data = load(); if (!data[module].exercises.includes(index)) { data[module].exercises.push(index); save(data); } };
  const isLessonComplete = (module, index) => load()[module].lessons.includes(index);
  const isExerciseComplete = (module, index) => load()[module].exercises.includes(index);

  const getModuleProgress = (module) => {
    const data = load(); const course = COURSES[module];
    const total = course.lessons.length + course.exercises.length;
    const done = data[module].lessons.length + data[module].exercises.length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  const getGlobalProgress = () => {
    const modules = ['html', 'css', 'js'];
    const total = modules.reduce((sum, m) => sum + COURSES[m].lessons.length + COURSES[m].exercises.length, 0);
    const data = load();
    const done = modules.reduce((sum, m) => sum + data[m].lessons.length + data[m].exercises.length, 0);
    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  const saveQuizScore = (module, score) => { const data = load(); data[module].quizScore = score; save(data); };
  const getQuizScore = (module) => load()[module].quizScore || null;

  const isModuleComplete = (module) => {
    const data = load(); const course = COURSES[module];
    return data[module].lessons.length === course.lessons.length &&
           data[module].exercises.length === course.exercises.length &&
           data[module].quizScore?.passed === true;
  };

  const canAccessCertificate = () => ['html', 'css', 'js'].every(m => isModuleComplete(m));

  const saveCertificate = (certData) => { const data = load(); data.certificate = certData; save(data); };
  const getCertificate = () => load().certificate || null;

  const saveProjectStep = (projectId, stepIndex) => {
    const data = load();
    if (!data.projects) data.projects = {};
    if (!data.projects[projectId]) data.projects[projectId] = [];
    if (!data.projects[projectId].includes(stepIndex)) { data.projects[projectId].push(stepIndex); save(data); }
  };
  const getProjectProgress = (projectId) => load().projects?.[projectId] || [];

  const reset = () => localStorage.removeItem(STORAGE_KEY);

  return { markLessonComplete, markExerciseComplete, isLessonComplete, isExerciseComplete, getModuleProgress, getGlobalProgress, reset, saveQuizScore, getQuizScore, isModuleComplete, canAccessCertificate, saveCertificate, getCertificate, saveProjectStep, getProjectProgress };
})();