const Quiz = (() => {
  let currentQuiz = null;
  let currentIndex = 0;
  let score = 0;
  let answers = [];
  let startTime = 0;

  const init = (quizData) => { currentQuiz = quizData; currentIndex = 0; score = 0; answers = []; startTime = Date.now(); };
  const getCurrentQuestion = () => currentQuiz?.questions[currentIndex];
  const submitAnswer = (selectedIndex) => {
    const question = getCurrentQuestion();
    if (!question) return null;
    const isCorrect = selectedIndex === question.correctIndex;
    if (isCorrect) score++;
    answers.push({ questionIndex: currentIndex, selectedIndex, correctIndex: question.correctIndex, isCorrect });
    return { isCorrect, correctIndex: question.correctIndex };
  };
  const next = () => { if (currentIndex < currentQuiz.questions.length - 1) { currentIndex++; return true; } return false; };
  const finish = () => {
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    const total = currentQuiz.questions.length;
    const percentage = Math.round((score / total) * 100);
    return { score, total, percentage, passed: percentage >= currentQuiz.passingScore, passingScore: currentQuiz.passingScore, elapsed, answers };
  };

  return { init, getCurrentQuestion, submitAnswer, next, finish };
})();