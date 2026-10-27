# 🎓 WebMaster Academy v4

Application interactive complète pour apprendre **HTML**, **CSS** et **JavaScript**, réalisée en vanilla JS avec support PWA (hors-ligne).

## ✨ Fonctionnalités

### 📚 Formation complète
- **3 modules** : HTML (6 leçons + 6 exercices), CSS (6 leçons + 5 exercices), JavaScript (6 leçons + 5 exercices)
- **Éditeur de code intégré** avec preview en temps réel
- **Validation automatique** des exercices
- **Indices progressifs** et **corrigés détaillés**
- **Quiz finaux** (5 questions par module, score minimum 70%)
- **Certificat de réussite** personnalisé (export PNG/PDF)

### 🚀 9 projets guidés
**Principaux :**
1. 🎨 Portfolio Personnel (débutant)
2. ✅ To-Do List avancée (intermédiaire)
3. 🎮 Jeu Memory (avancé)

**Bonus ⭐ :**
4. 📰 Blog interactif
5. 🍅 Minuteur Pomodoro
6. 🎨 Générateur de palettes
7. 📊 Dashboard Analytics
8. 🧮 Calculatrice scientifique
9. 🖼️ Galerie d'images avec lightbox

### 🛠️ Fonctionnalités techniques
- 🌓 **Mode clair/sombre** avec persistance
- 📴 **Mode hors-ligne** (PWA complète)
- 📲 **Installation** sur mobile et desktop
- 🔄 **Mises à jour automatiques** du Service Worker
- 💾 **Progression sauvegardée** dans localStorage
- 📱 **Responsive** (mobile, tablette, desktop)
- 📖 **Guide d'utilisation** intégré avec 9 sections

## 🚀 Installation

```bash
# Option 1 : Serveur local (recommandé pour PWA)
npx serve .
# ou
python -m http.server 8000

# Option 2 : Ouvrir directement index.html
# (le mode hors-ligne ne fonctionnera pas en file://)
```

Puis ouvrez `http://localhost:3000` (ou le port indiqué).

## 📁 Structure

```
webmaster-academy/
├── index.html              # Point d'entrée SPA
├── manifest.json           # Configuration PWA
├── sw.js                   # Service Worker (cache + offline)
├── README.md
├── css/
│   └── style.css           # Styles (thèmes + composants)
└── js/
    ├── data.js             # Contenu pédagogique (leçons, exercices, quiz)
    ├── progress.js         # Gestion progression (localStorage)
    ├── editor.js           # Éditeur de code + preview live
    ├── quiz.js             # Logique des quiz
    ├── certificate.js      # Génération de certificat (Canvas)
    ├── projects.js         # Projets principaux
    ├── projects-bonus.js   # 6 projets bonus
    ├── guide.js            # Guide d'utilisation
    ├── pwa.js              # Gestion PWA + online/offline
    ├── ui.js               # Rendu des vues
    └── app.js              # Routage + orchestration
```

## 🎯 Parcours recommandé

1. **HTML** → 6 leçons → 6 exercices → Quiz (≥70%)
2. **CSS** → 6 leçons → 5 exercices → Quiz (≥70%)
3. **JavaScript** → 6 leçons → 5 exercices → Quiz (≥70%)
4. **Projets** → Portfolio → To-Do → Memory → Bonus au choix
5. **Certificat** → Débloqué après validation des 3 modules

## 📴 Mode hors-ligne

L'application est une **PWA complète** :
- Installez-la via le bouton "📲 Installer" ou le menu du navigateur
- Toutes les fonctionnalités marchent sans connexion
- Votre progression est sauvegardée localement
- Un indicateur rouge apparaît quand vous êtes hors-ligne

## 🧪 Tests

- **Thème** : cliquez sur 🌙/☀️ → vérifiez la persistance
- **Quiz** : terminez un module → passez le quiz → vérifiez le score
- **Certificat** : validez les 3 modules → générez votre certificat
- **Projets** : complétez les étapes → vérifiez la progression
- **Offline** : DevTools → Network → Offline → rechargez → l'app fonctionne

## 🛠️ Améliorations futures possibles

- Backend (Node.js + PostgreSQL) pour synchroniser la progression
- IndexedDB pour plus de données
- Projets communautaires (partage de solutions)
- Push notifications (rappels de formation)
- Système de badges/achievements
- Mode collaboratif

## 📄 Licence

MIT — Utilisation libre à des fins éducatives.