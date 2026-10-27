/**
 * Guide d'utilisation de l'application.
 */
const Guide = (() => {
  const sections = [
    {
      id: 'start', icon: '🚀', title: 'Démarrage rapide',
      content: `<p>Bienvenue sur <strong>WebMaster Academy</strong> ! Cette application vous accompagne dans l'apprentissage du développement web, de HTML à JavaScript.</p>
        <p><strong>Pour commencer :</strong></p>
        <ol>
          <li>Choisissez un module (HTML, CSS ou JavaScript) depuis l'accueil</li>
          <li>Suivez les leçons dans l'ordre — elles sont progressives</li>
          <li>Pratiquez avec les exercices après chaque série de leçons</li>
          <li>Validez le quiz final du module (score minimum 70%)</li>
          <li>Passez aux projets pour appliquer vos connaissances</li>
        </ol>
        <p>💡 <strong>Astuce :</strong> Votre progression est sauvegardée automatiquement. Vous pouvez reprendre où vous vous êtes arrêté à tout moment.</p>`
    },
    {
      id: 'navigation', icon: '🧭', title: 'Navigation dans l\'application',
      content: `<p>L'application est organisée en plusieurs sections accessibles depuis la barre de navigation :</p>
        <ul>
          <li><strong>Accueil</strong> : vue d'ensemble avec vos 3 modules et votre progression globale</li>
          <li><strong>HTML / CSS / JavaScript</strong> : les 3 modules de formation</li>
          <li><strong>🚀 Projets</strong> : 9 projets guidés (3 principaux + 6 bonus)</li>
          <li><strong>📖 Guide</strong> : cette documentation</li>
          <li><strong>🏆 Certificat</strong> : votre certificat de fin de formation</li>
        </ul>
        <p>La <strong>barre de progression</strong> en haut à droite affiche votre avancement global.</p>
        <p>🌓 Cliquez sur l'icône <kbd>🌙</kbd>/<kbd>☀️</kbd> pour basculer entre thème sombre et clair.</p>`
    },
    {
      id: 'modules', icon: '📚', title: 'Structure des modules',
      content: `<p>Chaque module (HTML, CSS, JavaScript) contient 3 types de contenu :</p>
        <ol>
          <li><strong>📖 Cours</strong> (6 leçons par module) : explications détaillées avec exemples de code. Cliquez sur "Copier" pour récupérer le code.</li>
          <li><strong>💻 Exercices</strong> (5-6 par module) : pratiquez dans l'éditeur intégré. La preview s'actualise en temps réel. Vous pouvez demander des indices ou voir la solution.</li>
          <li><strong>📝 Quiz</strong> (5 questions par module) : évaluation finale avec score minimum de 70% pour valider le module.</li>
        </ol>
        <p>✅ Une leçon/exercice est marqué comme <strong>terminé</strong> quand vous le consultez (leçons) ou le réussissez (exercices).</p>`
    },
    {
      id: 'editor', icon: '💻', title: 'Utiliser l\'éditeur de code',
      content: `<p>L'éditeur de code est disponible dans les exercices et projets. Il comprend :</p>
        <ul>
          <li><strong>Panneau gauche</strong> : votre code, modifiable</li>
          <li><strong>Panneau droit</strong> : aperçu en temps réel (actualisation auto après 300ms)</li>
          <li><kbd>Tab</kbd> : insère 2 espaces (indentation)</li>
          <li><strong>Réinitialiser</strong> : revient au code de départ</li>
          <li><strong>▶ Exécuter</strong> : force l'actualisation de l'aperçu</li>
        </ul>
        <p>💡 <strong>Conseil :</strong> Testez votre code dans l'aperçu avant de valider. L'éditeur supporte HTML, CSS et JavaScript selon l'exercice.</p>`
    },
    {
      id: 'quiz', icon: '📝', title: 'Passer les quiz',
      content: `<p>Les quiz valident vos connaissances à la fin de chaque module :</p>
        <ul>
          <li><strong>5 questions</strong> à choix multiples (QCM)</li>
          <li><strong>Timer</strong> : le temps est affiché mais non limitant</li>
          <li><strong>Feedback immédiat</strong> : après chaque réponse, l'explication s'affiche</li>
          <li><strong>Score minimum 70%</strong> pour valider le module</li>
          <li><strong>Illimité</strong> : vous pouvez repasser le quiz autant de fois que nécessaire</li>
        </ul>
        <p>🎯 Votre meilleur score est conservé. Une fois les 3 modules validés, le certificat se débloque !</p>`
    },
    {
      id: 'projects', icon: '🚀', title: 'Réaliser les projets',
      content: `<p>Les projets sont l'étape finale pour consolider vos acquis. <strong>9 projets</strong> sont disponibles :</p>
        <ul>
          <li><strong>3 projets principaux</strong> : Portfolio, To-Do List, Memory</li>
          <li><strong>6 projets bonus ⭐</strong> : Blog, Pomodoro, Palettes, Dashboard, Calculatrice, Galerie</li>
        </ul>
        <p>Chaque projet est découpé en <strong>5 étapes progressives</strong> avec validation automatique. Vous pouvez :</p>
        <ul>
          <li>Consulter la <strong>solution complète</strong> à tout moment</li>
          <li>Suivre votre progression par projet</li>
          <li>Revenir sur une étape déjà validée</li>
        </ul>
        <p>💡 Commencez par les projets principaux avant les bonus.</p>`
    },
    {
      id: 'certificate', icon: '🏆', title: 'Obtenir le certificat',
      content: `<p>Le certificat est débloqué quand vous avez :</p>
        <ol>
          <li>✅ Terminé toutes les leçons des 3 modules</li>
          <li>✅ Réussi tous les exercices des 3 modules</li>
          <li>✅ Obtenu ≥ 70% aux 3 quiz finaux</li>
        </ol>
        <p>Une fois débloqué :</p>
        <ul>
          <li>Entrez votre nom complet</li>
          <li>Le certificat est généré avec votre score global et un ID unique</li>
          <li>Téléchargez-le en <strong>PNG</strong> ou imprimez-le en <strong>PDF</strong></li>
        </ul>
        <p>🎓 Félicitations pour votre parcours !</p>`
    },
    {
      id: 'offline', icon: '📴', title: 'Mode hors-ligne (PWA)',
      content: `<p>WebMaster Academy est une <strong>Progressive Web App (PWA)</strong>. Vous pouvez l'utiliser sans connexion internet !</p>
        <p><strong>Installation :</strong></p>
        <ul>
          <li><strong>Desktop Chrome/Edge</strong> : cliquez sur l'icône d'installation dans la barre d'adresse ou le bouton "📲 Installer" dans la navbar</li>
          <li><strong>Mobile Android</strong> : menu du navigateur → "Ajouter à l'écran d'accueil"</li>
          <li><strong>iOS Safari</strong> : bouton Partager → "Sur l'écran d'accueil"</li>
        </ul>
        <p><strong>Fonctionnement hors-ligne :</strong></p>
        <ul>
          <li>Toutes les leçons, exercices et projets sont disponibles</li>
          <li>Votre progression est sauvegardée localement</li>
          <li>Un indicateur rouge "📴 Mode hors-ligne" apparaît en haut</li>
          <li>Quand la connexion revient, tout se synchronise automatiquement</li>
        </ul>`
    },
    {
      id: 'faq', icon: '❓', title: 'Questions fréquentes',
      content: `<p><strong>Comment réinitialiser ma progression ?</strong></p>
        <p>Ouvrez la console du navigateur (<kbd>F12</kbd>) et tapez : <code>localStorage.clear(); location.reload();</code></p>
        <p><strong>Puis-je suivre les modules dans le désordre ?</strong></p>
        <p>Oui, mais l'ordre recommandé est HTML → CSS → JavaScript. Chaque module s'appuie sur les précédents.</p>
        <p><strong>Que faire si un exercice ne valide pas ?</strong></p>
        <p>Utilisez les indices (💡) progressifs, ou consultez la solution. L'éditeur de preview vous aide à déboguer visuellement.</p>
        <p><strong>L'application fonctionne-t-elle sur mobile ?</strong></p>
        <p>Oui, l'interface est entièrement responsive. L'éditeur de code est utilisable sur tablette et mobile.</p>
        <p><strong>Comment signaler un bug ?</strong></p>
        <p>Ouvrez la console (<kbd>F12</kbd>) et copiez les messages d'erreur. Vérifiez que vous êtes sur un serveur local (pas en <code>file://</code>) pour que le mode hors-ligne fonctionne.</p>`
    }
  ];

  const getSections = () => sections;
  const getSection = (id) => sections.find(s => s.id === id);

  return { getSections, getSection };
})();