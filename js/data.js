const COURSES = {
  html: {
    id: 'html', title: 'HTML', icon: '🌐', color: 'var(--gradient-html)',
    description: 'Structure et sémantique du web',
    lessons: [
      {
        title: 'Introduction au HTML et structure de base',
        content: `
          <p><strong>HTML (HyperText Markup Language)</strong> est le langage fondamental du web. Ce n'est pas un langage de programmation, mais un <strong>langage de balisage</strong> qui décrit la structure d'une page web à l'aide de balises.</p>
          
          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Objectifs de cette leçon</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Comprendre ce qu'est HTML et son rôle dans le web</li>
            <li>Maîtriser la structure de base d'un document HTML5 valide</li>
            <li>Identifier les balises essentielles et leur fonction</li>
            <li>Créer votre première page web correctement structurée</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📖 Qu'est-ce que HTML ?</h3>
          <p>HTML utilise des <strong>balises</strong> (tags) pour structurer le contenu. Une balise s'écrit généralement sous la forme :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;nom_balise&gt;Contenu&lt;/nom_balise&gt;</div>
          <p>Certaines balises sont <strong>auto-fermantes</strong> (void elements) et n'ont pas de contenu ni de balise fermante :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;img src="photo.jpg" alt="Description"&gt;<br>&lt;br&gt;<br>&lt;hr&gt;<br>&lt;input type="text"&gt;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🏗️ Structure d'un document HTML5</h3>
          <p>Tout document HTML valide doit respecter cette structure minimale :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">
&lt;!DOCTYPE html&gt;        <span style="color:#6272a4">&lt;!-- Déclare le type de document (HTML5) --&gt;</span>
&lt;html lang="fr"&gt;       <span style="color:#6272a4">&lt;!-- Élément racine + langue --&gt;</span>
  &lt;head&gt;               <span style="color:#6272a4">&lt;!-- Métadonnées (invisible) --&gt;</span>
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Titre&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;               <span style="color:#6272a4">&lt;!-- Contenu visible --&gt;</span>
    &lt;h1&gt;Bonjour !&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
          </div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔍 Explication détaillée</h3>
          <p><code>&lt;!DOCTYPE html&gt;</code> : Cette déclaration doit être la <strong>toute première ligne</strong>. Elle indique au navigateur qu'il s'agit d'un document HTML5. Sans elle, le navigateur pourrait utiliser un mode de rendu obsolète (quirks mode).</p>
          <p><code>&lt;html lang="fr"&gt;</code> : L'élément racine qui contient tout le document. L'attribut <code>lang</code> est <strong>crucial</strong> pour l'accessibilité (lecteurs d'écran) et le SEO.</p>
          <p><code>&lt;head&gt;</code> : Contient les <strong>métadonnées</strong> invisibles mais essentielles :</p>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><code>&lt;meta charset="UTF-8"&gt;</code> : Encodage des caractères (accents, emojis)</li>
            <li><code>&lt;title&gt;</code> : Titre affiché dans l'onglet du navigateur</li>
            <li><code>&lt;meta name="viewport"&gt;</code> : Responsive design</li>
            <li><code>&lt;link&gt;</code> : Fichiers CSS externes</li>
          </ul>
          <p><code>&lt;body&gt;</code> : Contient tout le <strong>contenu visible</strong> de la page (textes, images, vidéos, formulaires, etc.).</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Toujours déclarer <code>&lt;!DOCTYPE html&gt;</code> en première ligne</li>
            <li>Toujours spécifier <code>lang="fr"</code> (ou la langue appropriée)</li>
            <li>Toujours inclure <code>&lt;meta charset="UTF-8"&gt;</code></li>
            <li>Utiliser une indentation cohérente (2 ou 4 espaces)</li>
            <li>Fermer toutes les balises (sauf les void elements)</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">⚠️ Erreurs courantes à éviter</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Oublier le <code>&lt;!DOCTYPE&gt;</code> → mode quirks du navigateur</li>
            <li>Oublier <code>charset="UTF-8"</code> → problèmes d'accents</li>
            <li>Négliger l'attribut <code>lang</code> → mauvais SEO et accessibilité</li>
            <li>Mettre du contenu visible dans <code>&lt;head&gt;</code> → invalide</li>
          </ul>
        `,
        code: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
</head>
<body>
    <h1>Bonjour le monde !</h1>
    <p>Ceci est ma première page web.</p>
</body>
</html>`,
        explanation: 'Ce code respecte toutes les bonnes pratiques : DOCTYPE, lang="fr", charset UTF-8, viewport pour le responsive, titre descriptif, et contenu bien structuré dans le body.'
      },
      {
        title: 'Les titres et la hiérarchie du contenu',
        content: `
          <p>HTML propose <strong>6 niveaux de titres</strong>, de <code>&lt;h1&gt;</code> (le plus important) à <code>&lt;h6&gt;</code> (le moins important). Ces titres ne servent pas uniquement à styliser le texte : ils créent une <strong>hiérarchie sémantique</strong> essentielle pour le SEO et l'accessibilité.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Règles fondamentales</h3>
          <ol style="margin-left:20px;color:var(--text-secondary)">
            <li><strong>Un seul &lt;h1&gt; par page</strong> : c'est le titre principal</li>
            <li><strong>Ne jamais sauter de niveau</strong> : pas de h1 → h3 sans h2</li>
            <li><strong>Respecter la hiérarchie</strong> : h1 > h2 > h3 > h4 > h5 > h6</li>
            <li><strong>Utiliser pour la structure</strong>, pas pour la taille du texte (c'est le rôle du CSS)</li>
          </ol>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🌳 Structure hiérarchique correcte</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">
&lt;h1&gt;Mon Blog de Cuisine&lt;/h1&gt;

&lt;h2&gt;Recettes françaises&lt;/h2&gt;
  &lt;h3&gt;La ratatouille&lt;/h3&gt;
  &lt;h3&gt;Le bœuf bourguignon&lt;/h3&gt;

&lt;h2&gt;Recettes italiennes&lt;/h2&gt;
  &lt;h3&gt;La pasta carbonara&lt;/h3&gt;
    &lt;h4&gt;Ingrédients&lt;/h4&gt;
    &lt;h4&gt;Préparation&lt;/h4&gt;
          </div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">❌ Structure INCORRECTE à éviter</h3>
          <div style="background:rgba(239,68,68,0.1);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8;border-left:3px solid var(--accent-error)">
&lt;h1&gt;Mon Site&lt;/h1&gt;
&lt;h1&gt;Autre titre&lt;/h1&gt;     <span style="color:#ff5555"> ERREUR : deux h1</span>
&lt;h3&gt;Sous-titre&lt;/h3&gt;      <span style="color:#ff5555">❌ ERREUR : saut de h2</span>
&lt;h2&gt;Section&lt;/h2&gt;         <span style="color:#ff5555">❌ ERREUR : h2 après h3</span>
          </div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔍 Pourquoi c'est important ?</h3>
          <p><strong>Pour le SEO :</strong> Les moteurs de recherche utilisent la hiérarchie des titres pour comprendre la structure et l'importance du contenu.</p>
          <p><strong>Pour l'accessibilité :</strong> Les lecteurs d'écran permettent aux utilisateurs malvoyants de naviguer par titres. Une hiérarchie correcte leur permet de comprendre la structure de la page.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Checklist</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>✓ Un seul h1 par page</li>
            <li>✓ Hiérarchie respectée (pas de saut de niveau)</li>
            <li>✓ Titres descriptifs et concis</li>
            <li>✓ Pas d'utilisation des titres uniquement pour le style</li>
          </ul>
        `,
        code: `<h1>Guide de Paris</h1>

<h2>Monuments historiques</h2>
<h3>La Tour Eiffel</h3>
<p>La Tour Eiffel est le symbole de Paris...</p>

<h3>Le Louvre</h3>
<p>Le musée du Louvre abrite la Joconde...</p>

<h2>Quartiers à visiter</h2>
<h3>Montmartre</h3>
<p>Quartier artistique avec vue sur Paris...</p>`,
        explanation: 'Cette structure respecte la hiérarchie : un seul h1 (titre principal), des h2 pour les sections principales, et des h3 pour les sous-sections.'
      },
      {
        title: 'Les paragraphes et la mise en forme du texte',
        content: `
          <p>Le texte est l'élément le plus courant sur le web. HTML fournit plusieurs balises pour structurer et mettre en forme le texte de manière <strong>sémantique</strong>.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📝 Les paragraphes &lt;p&gt;</h3>
          <p>La balise <code>&lt;p&gt;</code> définit un paragraphe. Le navigateur ajoute automatiquement un espace avant et après chaque paragraphe.</p>
          <p><strong>Important :</strong> N'utilisez jamais <code>&lt;br&gt;</code> pour créer de l'espace entre paragraphes. Utilisez plusieurs <code>&lt;p&gt;</code> à la place.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎨 Mise en forme sémantique</h3>
          <p>HTML propose des balises pour donner du <strong>sens</strong> au texte, pas seulement du style :</p>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><code>&lt;strong&gt;</code> : texte <strong>important</strong> (gras sémantique)</li>
            <li><code>&lt;em&gt;</code> : texte en <em>emphase</em> (italique sémantique)</li>
            <li><code>&lt;mark&gt;</code> : texte <mark>surligné</mark></li>
            <li><code>&lt;del&gt;</code> : texte <del>supprimé</del></li>
            <li><code>&lt;ins&gt;</code> : texte <ins>inséré</ins></li>
            <li><code>&lt;small&gt;</code> : <small>texte petit</small> (mentions légales)</li>
            <li><code>&lt;sub&gt;</code> : subscript (H<sub>2</sub>O)</li>
            <li><code>&lt;sup&gt;</code> : superscript (E=mc<sup>2</sup>)</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">⚠️ strong vs b, em vs i</h3>
          <p><strong>Règle :</strong> Utilisez toujours les balises sémantiques (<code>strong</code>, <code>em</code>) sauf si vous avez besoin d'un style purement visuel sans signification particulière.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">💬 Citations</h3>
          <p>Utilisez <code>&lt;blockquote&gt;</code> pour les citations longues et <code>&lt;q&gt;</code> pour les citations courtes en ligne.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">💻 Code et touches de clavier</h3>
          <p><code>&lt;code&gt;</code> pour le code en ligne, <code>&lt;pre&gt;&lt;code&gt;</code> pour les blocs de code, et <code>&lt;kbd&gt;</code> pour les touches de clavier.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez <code>&lt;p&gt;</code> pour chaque paragraphe (pas de <code>&lt;br&gt;</code> multiples)</li>
            <li>Préférez <code>&lt;strong&gt;</code> et <code>&lt;em&gt;</code> aux balises purement visuelles</li>
            <li>Utilisez <code>&lt;blockquote&gt;</code> pour les citations longues</li>
            <li>Utilisez <code>&lt;code&gt;</code> pour le code, pas pour styliser du texte</li>
          </ul>
        `,
        code: `<h1>Article de blog</h1>

<p>Ceci est le <strong>premier paragraphe</strong> de notre article. Il contient du texte en <em>emphase</em> et du texte <mark>surligné</mark>.</p>

<p>Voici un deuxième paragraphe avec une citation :</p>

<blockquote>
    <p>Le code est lu plus souvent qu'il n'est écrit.</p>
    <footer>— Guido van Rossum</footer>
</blockquote>

<p>Pour installer le projet, utilisez la commande <code>npm install</code>.</p>

<p>Appuyez sur <kbd>Ctrl</kbd> + <kbd>S</kbd> pour sauvegarder.</p>

<hr>

<p><small>Dernière mise à jour : 27 octobre 2026</small></p>`,
        explanation: 'Cet exemple montre l\'utilisation correcte des balises de texte : paragraphes distincts, strong/em pour l\'importance sémantique, blockquote pour la citation, code pour les commandes, kbd pour les touches.'
      },
      {
        title: 'Les liens hypertextes',
        content: `
          <p>Les liens sont <strong>l'essence même du web</strong>. Ils permettent de naviguer entre les pages, les sites, et les ressources. La balise <code>&lt;a&gt;</code> (anchor) crée un lien hypertexte.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔗 Syntaxe de base</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;a href="URL"&gt;Texte du lien&lt;/a&gt;</div>
          <p>L'attribut <code>href</code> (hypertext reference) spécifie la <strong>destination</strong> du lien.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🌐 Types de liens</h3>
          
          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">1. Liens externes (vers un autre site)</h4>
          <p><strong>Important :</strong> Pour les liens externes, utilisez toujours <code>target="_blank"</code> avec <code>rel="noopener noreferrer"</code> pour la sécurité :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;a href="https://example.com" target="_blank" rel="noopener noreferrer"&gt;Nouveau onglet&lt;/a&gt;</div>
          <p><code>rel="noopener"</code> empêche la page cible d'accéder à <code>window.opener</code> (faille de sécurité).</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">2. Liens internes (vers une autre page de votre site)</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;a href="about.html"&gt;À propos&lt;/a&gt;<br>&lt;a href="/products"&gt;Produits&lt;/a&gt;</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">3. Liens d'ancre (vers une section de la page)</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;a href="#section1"&gt;Aller à la section 1&lt;/a&gt;<br>&lt;h2 id="section1"&gt;Section 1&lt;/h2&gt;</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">4. Liens email et téléphone</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;a href="mailto:contact@example.com"&gt;Email&lt;/a&gt;<br>&lt;a href="tel:+33123456789"&gt;Appeler&lt;/a&gt;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Texte du lien <strong>descriptif</strong> (évitez "cliquez ici")</li>
            <li>Utilisez <code>rel="noopener noreferrer"</code> pour les liens externes</li>
            <li>Ouvrez les liens externes dans un nouvel onglet (<code>target="_blank"</code>)</li>
            <li>Utilisez des chemins relatifs pour les liens internes</li>
          </ul>
        `,
        code: `<h1>Ressources web</h1>

<p>Visitez <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> pour la documentation officielle.</p>

<h2 id="navigation">Navigation</h2>
<p><a href="#contact">Aller au formulaire de contact</a></p>

<h2>Liens utiles</h2>
<ul>
    <li><a href="about.html">À propos de nous</a></li>
    <li><a href="mailto:contact@example.com">Nous contacter par email</a></li>
    <li><a href="tel:+33123456789">Appeler le +33 1 23 45 67 89</a></li>
</ul>

<h2 id="contact">Contact</h2>
<p>Formulaire de contact ici...</p>`,
        explanation: 'Cet exemple montre tous les types de liens : externe avec sécurité (target + rel), ancre interne (#contact), email (mailto:), téléphone (tel:).'
      },
      {
        title: 'Les listes (ordonnées et non ordonnées)',
        content: `
          <p>Les listes permettent d'organiser l'information de manière structurée. HTML propose <strong>3 types de listes</strong> : non ordonnées, ordonnées, et de définition.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📋 Liste non ordonnée &lt;ul&gt;</h3>
          <p>Pour les éléments sans ordre particulier (liste de courses, features, etc.) :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;ul&gt;<br>&nbsp;&nbsp;&lt;li&gt;Pomme&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Banane&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Orange&lt;/li&gt;<br>&lt;/ul&gt;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔢 Liste ordonnée &lt;ol&gt;</h3>
          <p>Pour les éléments avec un ordre important (étapes, classement, etc.) :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;ol&gt;<br>&nbsp;&nbsp;&lt;li&gt;Préparer les ingrédients&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Mélanger&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Cuire 30 minutes&lt;/li&gt;<br>&lt;/ol&gt;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)"> Attributs utiles</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><code>type</code> sur <code>&lt;ol&gt;</code> : "1" (défaut), "A", "a", "I", "i"</li>
            <li><code>start</code> sur <code>&lt;ol&gt;</code> : numéro de départ</li>
            <li><code>value</code> sur <code>&lt;li&gt;</code> : valeur spécifique</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🌳 Listes imbriquées</h3>
          <p>Les listes peuvent être imbriquées pour créer des structures hiérarchiques :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;ul&gt;<br>&nbsp;&nbsp;&lt;li&gt;Fruits<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Pomme&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Banane&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br>&nbsp;&nbsp;&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Légumes&lt;/li&gt;<br>&lt;/ul&gt;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez <code>&lt;ul&gt;</code> pour les éléments sans ordre</li>
            <li>Utilisez <code>&lt;ol&gt;</code> pour les étapes ou classements</li>
            <li>Évitez d'utiliser les listes pour la mise en page (utilisez CSS)</li>
            <li>N'imbriquez pas plus de 3 niveaux (préférez une structure plate)</li>
          </ul>
        `,
        code: `<h2>Menu du restaurant</h2>

<h3>Nos spécialités</h3>
<ul>
    <li>Soupe à l'oignon</li>
    <li>Coq au vin</li>
    <li>Crème brûlée</li>
</ul>

<h3>Processus de commande</h3>
<ol>
    <li>Consultez le menu</li>
    <li>Choisissez vos plats</li>
    <li>Passez commande au serveur</li>
    <li>Dégustez !</li>
</ol>

<h3>Catégories</h3>
<ul>
    <li>Entrées
        <ul>
            <li>Soupe</li>
            <li>Salade</li>
        </ul>
    </li>
    <li>Plats principaux</li>
    <li>Desserts</li>
</ul>`,
        explanation: 'Cet exemple montre les 3 types de listes : ul pour les éléments sans ordre, ol pour les étapes, et des listes imbriquées pour la hiérarchie.'
      },
      {
        title: 'Les images et médias',
        content: `
          <p>Les images enrichissent le contenu visuel de votre site. La balise <code>&lt;img&gt;</code> permet d'insérer des images.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🖼️ Syntaxe de base</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;img src="chemin/vers/image.jpg" alt="Description de l'image"&gt;</div>
          <p><code>&lt;img&gt;</code> est un <strong>void element</strong> (auto-fermant). Il n'a pas de balise fermante.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Attributs essentiels</h3>
          
          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">src (source) — OBLIGATOIRE</h4>
          <p>Spécifie le chemin vers l'image. Peut être relatif ou absolu (URL).</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">alt (texte alternatif) — OBLIGATOIRE</h4>
          <p>L'attribut <code>alt</code> est <strong>crucial pour l'accessibilité</strong>. Il fournit une description textuelle de l'image pour :</p>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Les lecteurs d'écran (personnes malvoyantes)</li>
            <li>L'affichage si l'image ne charge pas</li>
            <li>Le SEO (les moteurs de recherche "lisent" l'alt)</li>
          </ul>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;!-- Bon alt : descriptif --&gt;<br>&lt;img src="chat.jpg" alt="Chat roux endormi sur un canapé"&gt;<br><br>&lt;!-- Mauvais alt : trop vague --&gt;<br>&lt;img src="chat.jpg" alt="image"&gt; ❌<br><br>&lt;!-- Image décorative : alt vide --&gt;<br>&lt;img src="decoration.jpg" alt=""&gt;</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">width et height — RECOMMANDÉS</h4>
          <p>Spécifiez toujours les dimensions pour éviter le <strong>layout shift</strong> (CLS) :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;img src="photo.jpg" alt="Description" width="800" height="600"&gt;</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">loading — OPTIMISATION</h4>
          <p>Lazy loading pour les images hors écran :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;img src="photo.jpg" alt="Description" loading="lazy"&gt;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎨 Formats d'images</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><strong>JPEG (.jpg)</strong> : photos, gradients (compression avec perte)</li>
            <li><strong>PNG (.png)</strong> : transparence, graphiques (compression sans perte)</li>
            <li><strong>WebP (.webp)</strong> : moderne, meilleur compression (privilégier)</li>
            <li><strong>SVG (.svg)</strong> : vecteurs, logos, icônes (redimensionnable sans perte)</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Toujours fournir un <code>alt</code> descriptif (ou vide pour images décoratives)</li>
            <li>Spécifier <code>width</code> et <code>height</code> pour éviter le layout shift</li>
            <li>Utiliser <code>loading="lazy"</code> pour les images hors écran</li>
            <li>Privilégier WebP ou AVIF pour les photos</li>
            <li>Optimiser les images avant upload (TinyPNG, ImageOptim)</li>
          </ul>
        `,
        code: `<h1>Galerie photo</h1>

<p>Voici une photo de chat :</p>
<img 
    src="https://images.unsplash.com/photo-1514888282297-e53175991b17?w=800" 
    alt="Chat roux endormi sur un canapé beige"
    width="800"
    height="600"
    loading="lazy"
>

<h2>Logo de l'entreprise</h2>
<img 
    src="logo.svg" 
    alt="Logo de notre entreprise"
    width="200"
    height="50"
>

<h2>Image décorative</h2>
<img 
    src="decoration.jpg" 
    alt=""
    width="1200"
    height="400"
>`,
        explanation: 'Cet exemple montre : une image avec alt descriptif + dimensions + lazy loading, un logo SVG, et une image décorative avec alt vide.'
      }
    ],
    exercises: [
      {
        title: 'Exercice 1 — Structure HTML de base',
        description: 'Créez une page HTML5 valide avec :\n• Un titre "Mon Portfolio" dans le head\n• Un paragraphe de bienvenue dans le body\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous, à la place des commentaires.',
        initialCode: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <!-- ÉCRIVEZ VOTRE CODE ICI : ajoutez le titre "Mon Portfolio" -->
    
</head>
<body>
    <!-- ÉCRIVEZ VOTRE CODE ICI : ajoutez un paragraphe de bienvenue -->
    
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Portfolio</title>
</head>
<body>
    <p>Bienvenue sur mon portfolio !</p>
</body>
</html>`,
        hints: [
          '💡 Le titre se place dans la balise <title> à l\'intérieur du <head>',
          '💡 Un paragraphe se crée avec la balise <p> dans le <body>',
          '💡 N\'oubliez pas de fermer toutes les balises ouvertes'
        ],
        validate: (c) => /<title>\s*Mon Portfolio\s*<\/title>/i.test(c) && /<p>[\s\S]+<\/p>/i.test(c)
      },
      {
        title: 'Exercice 2 — Hiérarchie de titres',
        description: 'Créez une structure de titres correcte :\n• Un titre principal (h1) : "Mon Blog"\n• Deux sous-titres (h2) : "Article 1" et "Article 2"\n• Un paragraphe sous chaque h2\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<!-- ÉCRIVEZ VOTRE CODE ICI -->
<!-- Commencez par un h1, puis deux h2 avec un paragraphe chacun -->`,
        solution: `<h1>Mon Blog</h1>

<h2>Article 1</h2>
<p>Contenu du premier article de mon blog.</p>

<h2>Article 2</h2>
<p>Contenu du deuxième article de mon blog.</p>`,
        hints: [
          '💡 Commencez par un seul <h1>Mon Blog</h1>',
          '💡 Ajoutez deux <h2> pour les sous-titres',
          '💡 Placez un <p> après chaque <h2>'
        ],
        validate: (c) => {
          const h1Count = (c.match(/<h1>/gi) || []).length;
          const h2Count = (c.match(/<h2>/gi) || []).length;
          const pCount = (c.match(/<p>/gi) || []).length;
          return h1Count === 1 && h2Count >= 2 && pCount >= 2;
        }
      },
      {
        title: 'Exercice 3 — Liens et images',
        description: 'Créez :\n• Un lien vers google.com qui s\'ouvre dans un nouvel onglet (avec sécurité)\n• Une image avec un attribut alt descriptif\n\n ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<!-- ÉCRIVEZ VOTRE CODE ICI -->
<!-- Créez un lien vers google.com -->

<!-- Créez une image avec alt -->`,
        solution: `<a href="https://google.com" target="_blank" rel="noopener noreferrer">Visiter Google</a>

<img src="https://via.placeholder.com/300x200" alt="Image placeholder de 300x200 pixels">`,
        hints: [
          '💡 Pour le lien : <a href="https://google.com" target="_blank" rel="noopener noreferrer">',
          '💡 Pour l\'image : <img src="URL" alt="description">',
          '💡 N\'oubliez pas l\'attribut alt pour l\'accessibilité'
        ],
        validate: (c) => {
          const hasLink = /<a\s+[^>]*href=["'][^"']*google\.com/i.test(c);
          const hasTarget = /target=["']_blank["']/i.test(c);
          const hasRel = /rel=["'][^"']*noopener/i.test(c);
          const hasImage = /<img\s+[^>]*src=/i.test(c);
          const hasAlt = /alt=["'][^"']+["']/i.test(c);
          return hasLink && hasTarget && hasRel && hasImage && hasAlt;
        }
      },
      {
        title: 'Exercice 4 — Listes',
        description: 'Créez :\n• Une liste non ordonnée (ul) de 3 fruits\n• Une liste ordonnée (ol) de 3 étapes\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<!-- ÉCRIVEZ VOTRE CODE ICI -->
<!-- Liste non ordonnée de 3 fruits -->

<!-- Liste ordonnée de 3 étapes -->`,
        solution: `<h3>Mes fruits préférés</h3>
<ul>
    <li>Pomme</li>
    <li>Banane</li>
    <li>Orange</li>
</ul>

<h3>Recette de cuisine</h3>
<ol>
    <li>Préparer les ingrédients</li>
    <li>Mélanger le tout</li>
    <li>Cuire 30 minutes</li>
</ol>`,
        hints: [
          '💡 Liste non ordonnée : <ul> avec des <li> à l\'intérieur',
          '💡 Liste ordonnée : <ol> avec des <li> à l\'intérieur',
          '💡 Chaque élément utilise la balise <li>'
        ],
        validate: (c) => {
          const hasUl = /<ul>[\s\S]*<\/ul>/i.test(c);
          const hasOl = /<ol>[\s\S]*<\/ol>/i.test(c);
          const liCount = (c.match(/<li>/gi) || []).length;
          return hasUl && hasOl && liCount >= 6;
        }
      },
      {
        title: 'Exercice 5 — Formulaire de contact',
        description: 'Créez un formulaire avec :\n• Un champ texte pour le nom (obligatoire)\n• Un champ email (obligatoire)\n• Un textarea pour le message\n• Un bouton de soumission\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<form action="/submit" method="POST">
    <!-- ÉCRIVEZ VOTRE CODE ICI -->
    <!-- Ajoutez les champs : nom, email, message, bouton -->
    
</form>`,
        solution: `<form action="/submit" method="POST">
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom" required>
    
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message :</label>
    <textarea id="message" name="message" rows="5" required></textarea>
    
    <button type="submit">Envoyer</button>
</form>`,
        hints: [
          '💡 Champ texte : <input type="text" id="nom" name="nom" required>',
          '💡 Champ email : <input type="email" id="email" name="email" required>',
          '💡 Zone de texte : <textarea id="message" name="message"></textarea>',
          '💡 Bouton : <button type="submit">Envoyer</button>'
        ],
        validate: (c) => /<form/i.test(c) && /type=["']text["']/i.test(c) && /type=["']email["']/i.test(c) && /<textarea/i.test(c) && /<button/i.test(c) && /required/i.test(c)
      },
      {
        title: 'Exercice 6 — Structure sémantique HTML5',
        description: 'Créez une page complète avec la structure sémantique :\n• header (avec h1 et nav)\n• main (contenant un article)\n• aside (contenu secondaire)\n• footer\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Site</title>
</head>
<body>
    <!-- ÉCRIVEZ VOTRE CODE ICI -->
    <!-- Ajoutez : header, nav, main, article, aside, footer -->
    
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Site</title>
</head>
<body>
    <header>
        <h1>Mon Site Web</h1>
        <nav>
            <ul>
                <li><a href="/">Accueil</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Mon Article</h2>
            <p>Contenu de l'article...</p>
        </article>
        
        <aside>
            <h3>Articles similaires</h3>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2026 Mon Site</p>
    </footer>
</body>
</html>`,
        hints: [
          '💡 Utilisez <header> pour l\'en-tête',
          '💡 Utilisez <nav> pour la navigation',
          '💡 Utilisez <main> pour le contenu principal',
          '💡 Utilisez <article> pour un contenu autonome',
          '💡 Utilisez <aside> pour le contenu secondaire',
          '💡 Utilisez <footer> pour le pied de page'
        ],
        validate: (c) => /<header>[\s\S]*<\/header>/i.test(c) && /<nav>[\s\S]*<\/nav>/i.test(c) && /<main>[\s\S]*<\/main>/i.test(c) && /<article>[\s\S]*<\/article>/i.test(c) && /<aside>[\s\S]*<\/aside>/i.test(c) && /<footer>[\s\S]*<\/footer>/i.test(c)
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { question: 'Quelle balise est le titre principal d\'une page ?', options: ['<title>', '<h1>', '<header>', '<head>'], correctIndex: 1, explanation: '<h1> est le titre visible principal. <title> est dans l\'onglet du navigateur.' },
        { question: 'Quel attribut est essentiel pour l\'accessibilité des images ?', options: ['src', 'title', 'alt', 'href'], correctIndex: 2, explanation: 'L\'attribut alt fournit une description textuelle pour les lecteurs d\'écran.' },
        { question: 'Quelle balise HTML5 représente le contenu principal unique ?', options: ['<div>', '<section>', '<main>', '<article>'], correctIndex: 2, explanation: '<main> représente le contenu dominant du <body>, unique par page.' },
        { question: 'Quel type d\'input valide automatiquement un email ?', options: ['type="text"', 'type="email"', 'type="mail"', 'type="address"'], correctIndex: 1, explanation: 'type="email" active la validation native du format email.' },
        { question: 'Quelle balise crée une liste non ordonnée ?', options: ['<ol>', '<ul>', '<li>', '<list>'], correctIndex: 1, explanation: '<ul> = unordered list (puces). <ol> = ordered list (numéros).' }
      ]
    }
  },

  css: {
    id: 'css', title: 'CSS', icon: '🎨', color: 'var(--gradient-css)',
    description: 'Design et mise en page moderne',
    lessons: [
      {
        title: 'Introduction au CSS et sélecteurs',
        content: `
          <p><strong>CSS (Cascading Style Sheets)</strong> est le langage qui donne vie au HTML. Alors que HTML structure le contenu, CSS contrôle son <strong>apparence visuelle</strong> : couleurs, mise en page, typographie, animations, etc.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Objectifs de cette leçon</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Comprendre le rôle de CSS</li>
            <li>Maîtriser les 3 façons d'appliquer du CSS</li>
            <li>Apprendre les sélecteurs CSS essentiels</li>
            <li>Comprendre la spécificité et la cascade</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📖 Syntaxe de base</h3>
          <p>Une règle CSS se compose d'un <strong>sélecteur</strong> et d'un <strong>bloc de déclarations</strong> :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">sélecteur {<br>&nbsp;&nbsp;propriété: valeur;<br>&nbsp;&nbsp;propriété: valeur;<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎨 3 façons d'appliquer du CSS</h3>
          
          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">1. CSS inline (à éviter)</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;h1 style="color: blue;"&gt;Titre&lt;/h1&gt;</div>
          <p><strong>Problème :</strong> Mélange contenu et présentation, difficile à maintenir.</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">2. CSS interne (balise &lt;style&gt;)</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;head&gt;<br>&nbsp;&nbsp;&lt;style&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;h1 { color: blue; }<br>&nbsp;&nbsp;&lt;/style&gt;<br>&lt;/head&gt;</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">3. CSS externe (fichier .css) — RECOMMANDÉ</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;link rel="stylesheet" href="styles.css"&gt;</div>
          <p><strong>Avantages :</strong> Séparation contenu/présentation, réutilisable, maintenable, cacheable.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Les sélecteurs CSS</h3>
          
          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">Sélecteurs de base</h4>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">p { color: gray; }               <span style="color:#6272a4">/* Tous les paragraphes */</span><br>.highlight { background: yellow; } <span style="color:#6272a4">/* class="highlight" */</span><br>#header { background: #333; }      <span style="color:#6272a4">/* id="header" */</span><br>* { margin: 0; }                 <span style="color:#6272a4">/* Tous les éléments */</span></div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">Sélecteurs combinés</h4>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">div p { color: red; }    <span style="color:#6272a4">/* Descendant (espace) */</span><br>div > p { color: blue; }   <span style="color:#6272a4">/* Enfant direct (>) */</span><br>h1 + p { font-weight: bold; } <span style="color:#6272a4">/* Frère adjacent (+) */</span><br>h1 ~ p { color: gray; }  <span style="color:#6272a4">/* Frères généraux (~) */</span></div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">Pseudo-classes (:)</h4>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">a:hover { color: red; }            <span style="color:#6272a4">/* Au survol */</span><br>input:focus { border: 2px solid blue; } <span style="color:#6272a4">/* Champ actif */</span><br>li:first-child { font-weight: bold; }   <span style="color:#6272a4">/* Premier élément */</span><br>li:nth-child(2n) { background: #f0f0f0; } <span style="color:#6272a4">/* Éléments pairs */</span></div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">⚖️ Spécificité et cascade</h3>
          <p>Quand plusieurs règles CSS ciblent le même élément, la <strong>spécificité</strong> détermine laquelle s'applique :</p>
          <ol style="margin-left:20px;color:var(--text-secondary)">
            <li><strong>!important</strong> (à éviter)</li>
            <li><strong>Styles inline</strong> (style="...")</li>
            <li><strong>ID</strong> (#header)</li>
            <li><strong>Classes, pseudo-classes</strong> (.btn, :hover)</li>
            <li><strong>Éléments</strong> (div, p)</li>
          </ol>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez toujours un fichier CSS externe</li>
            <li>Préférez les classes aux IDs (plus réutilisables)</li>
            <li>Noms de classes descriptifs et cohérents</li>
            <li>Évitez !important</li>
            <li>Utilisez des variables CSS pour les valeurs récurrentes</li>
          </ul>
        `,
        code: `/* Sélecteur d'élément */
h1 {
    color: #3498db;
    font-size: 32px;
    text-align: center;
}

/* Sélecteur de classe */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Sélecteur d'ID */
#header {
    background-color: #333;
    color: white;
    padding: 20px;
}

/* Pseudo-classe */
a:hover {
    color: red;
    text-decoration: underline;
}`,
        explanation: 'Cet exemple montre les sélecteurs essentiels : élément (h1), classe (.container), ID (#header), et pseudo-classe (:hover).'
      },
      {
        title: 'Le modèle de boîte (Box Model)',
        content: `
          <p>Le <strong>Box Model</strong> est le concept fondamental de CSS. Chaque élément HTML est représenté comme une <strong>boîte rectangulaire</strong> composée de 4 couches concentriques.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📦 Les 4 couches du Box Model</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><strong>Content</strong> : le contenu réel (texte, image, etc.)</li>
            <li><strong>Padding</strong> : espace entre le contenu et la bordure (intérieur)</li>
            <li><strong>Border</strong> : la bordure de la boîte</li>
            <li><strong>Margin</strong> : espace entre cette boîte et les autres (extérieur)</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)"> Syntaxe</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">.box {<br>&nbsp;&nbsp;width: 300px;<br>&nbsp;&nbsp;height: 200px;<br>&nbsp;&nbsp;padding: 20px;              <span style="color:#6272a4">/* 20px partout */</span><br>&nbsp;&nbsp;padding: 10px 20px;           <span style="color:#6272a4">/* haut/bas 10px, gauche/droite 20px */</span><br>&nbsp;&nbsp;padding: 10px 20px 30px 40px; <span style="color:#6272a4">/* haut droite bas gauche */</span><br>&nbsp;&nbsp;border: 2px solid #333;       <span style="color:#6272a4">/* width style color */</span><br>&nbsp;&nbsp;border-radius: 8px;           <span style="color:#6272a4">/* Coins arrondis */</span><br>&nbsp;&nbsp;margin: 20px;                 <span style="color:#6272a4">/* 20px partout */</span><br>&nbsp;&nbsp;margin: 0 auto;               <span style="color:#6272a4">/* Centrage horizontal */</span><br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">️ Le problème du Box Model par défaut</h3>
          <p>Par défaut, <code>width</code> et <code>height</code> ne concernent <strong>que le contenu</strong>. Le padding et la border s'ajoutent :</p>
          <div style="background:rgba(239,68,68,0.1);padding:16px;border-radius:8px;margin:12px 0;border-left:3px solid var(--accent-error)">
            <p><strong>Exemple :</strong> width: 300px + padding: 20px + border: 2px = largeur réelle de <strong>344px</strong> ❌</p>
          </div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ La solution : box-sizing</h3>
          <p>Utilisez <code>box-sizing: border-box</code> pour inclure padding et border dans width/height :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">/* Bonne pratique universelle */<br>* {<br>&nbsp;&nbsp;box-sizing: border-box;<br>}<br><br>.box {<br>&nbsp;&nbsp;width: 300px; <span style="color:#6272a4">/* Maintenant = 300px total */</span><br>&nbsp;&nbsp;padding: 20px;<br>&nbsp;&nbsp;border: 2px solid #333;<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Centrage horizontal</h3>
          <p>Pour centrer un bloc avec une largeur fixe :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace">.container {<br>&nbsp;&nbsp;width: 800px;<br>&nbsp;&nbsp;margin: 0 auto; <span style="color:#6272a4">/* 0 haut/bas, auto gauche/droite */</span><br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Toujours utiliser <code>* { box-sizing: border-box; }</code> en début de CSS</li>
            <li>Utilisez <code>margin: 0 auto</code> pour centrer horizontalement</li>
            <li>Préférez le padding au margin pour l'espacement interne</li>
            <li>Utilisez les DevTools pour visualiser le Box Model</li>
          </ul>
        `,
        code: `/* Bonne pratique universelle */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 2px solid #333;
    border-radius: 8px;
    margin: 20px auto;
    background-color: #f0f0f0;
}`,
        explanation: 'Cet exemple montre l\'utilisation correcte du Box Model : box-sizing: border-box pour simplifier, padding pour l\'espacement interne, border pour les bordures, et margin: 0 auto pour le centrage horizontal.'
      },
      {
        title: 'Flexbox : mise en page moderne',
        content: `
          <p><strong>Flexbox</strong> est un modèle de mise en page <strong>unidimensionnel</strong> (ligne OU colonne) qui facilite l'alignement et la distribution de l'espace entre les éléments.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Activation de Flexbox</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">.container {<br>&nbsp;&nbsp;display: flex;<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📐 Propriétés du conteneur</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">.container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;flex-direction: row;        <span style="color:#6272a4">/* row | column | row-reverse | column-reverse */</span><br>&nbsp;&nbsp;justify-content: center;    <span style="color:#6272a4">/* Axe principal */</span><br>&nbsp;&nbsp;align-items: center;        <span style="color:#6272a4">/* Axe secondaire */</span><br>&nbsp;&nbsp;gap: 20px;                  <span style="color:#6272a4">/* Espace entre éléments */</span><br>&nbsp;&nbsp;flex-wrap: wrap;            <span style="color:#6272a4">/* Passage à la ligne */</span><br>}</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">justify-content (axe principal)</h4>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><code>flex-start</code> : aligne au début (défaut)</li>
            <li><code>flex-end</code> : aligne à la fin</li>
            <li><code>center</code> : centre</li>
            <li><code>space-between</code> : espace égal entre (pas aux extrémités)</li>
            <li><code>space-around</code> : espace égal autour de chaque élément</li>
            <li><code>space-evenly</code> : espace égal partout</li>
          </ul>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">align-items (axe secondaire)</h4>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><code>stretch</code> : étire (défaut)</li>
            <li><code>flex-start</code> : aligne en haut</li>
            <li><code>flex-end</code> : aligne en bas</li>
            <li><code>center</code> : centre verticalement</li>
            <li><code>baseline</code> : aligne sur la ligne de base du texte</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📦 Propriétés des enfants</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">.item {<br>&nbsp;&nbsp;flex: 1;                    <span style="color:#6272a4">/* Shorthand pour flex-grow, flex-shrink, flex-basis */</span><br>&nbsp;&nbsp;flex-grow: 1;               <span style="color:#6272a4">/* Capacité à grandir */</span><br>&nbsp;&nbsp;flex-shrink: 0;             <span style="color:#6272a4">/* Capacité à rétrécir */</span><br>&nbsp;&nbsp;flex-basis: 200px;          <span style="color:#6272a4">/* Taille de base */</span><br>&nbsp;&nbsp;align-self: flex-end;       <span style="color:#6272a4">/* Alignment individuel */</span><br>&nbsp;&nbsp;order: 2;                   <span style="color:#6272a4">/* Ordre d'affichage */</span><br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Cas d'usage classique : centrer un élément</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace">.container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;justify-content: center; <span style="color:#6272a4">/* Centre horizontalement */</span><br>&nbsp;&nbsp;align-items: center;     <span style="color:#6272a4">/* Centre verticalement */</span><br>&nbsp;&nbsp;min-height: 100vh;<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez <code>gap</code> plutôt que des marges pour l'espacement</li>
            <li>Préférez <code>flex: 1</code> pour des éléments de taille égale</li>
            <li>Utilisez <code>flex-wrap: wrap</code> pour le responsive</li>
            <li>Flexbox est parfait pour les composants (navbar, cards, formulaires)</li>
          </ul>
        `,
        code: `/* Centrage parfait */
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Navbar avec espace */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

/* Grille de cartes responsive */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* grow shrink basis */
}`,
        explanation: 'Cet exemple montre les cas d\'usage classiques de Flexbox : centrage parfait, navbar avec espace, et grille responsive avec flex-wrap.'
      },
      {
        title: 'CSS Grid : mise en page bidimensionnelle',
        content: `
          <p><strong>CSS Grid</strong> est un modèle de mise en page <strong>bidimensionnel</strong> (lignes ET colonnes simultanément). C'est l'outil le plus puissant pour créer des layouts complexes.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Activation de Grid</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">.container {<br>&nbsp;&nbsp;display: grid;<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📐 Définir les colonnes et lignes</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">.container {<br>&nbsp;&nbsp;display: grid;<br>&nbsp;&nbsp;grid-template-columns: 200px 1fr 2fr; <span style="color:#6272a4">/* 3 colonnes */</span><br>&nbsp;&nbsp;grid-template-rows: 100px auto;     <span style="color:#6272a4">/* 2 lignes */</span><br>&nbsp;&nbsp;gap: 20px;                            <span style="color:#6272a4">/* Espace entre cellules */</span><br>}</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">L'unité fr (fraction)</h4>
          <p>L'unité <code>fr</code> représente une fraction de l'espace disponible :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">grid-template-columns: 1fr 1fr 1fr;  <span style="color:#6272a4">/* 3 colonnes égales */</span><br>grid-template-columns: 1fr 2fr;      <span style="color:#6272a4">/* 1/3 et 2/3 */</span><br>grid-template-columns: repeat(3, 1fr); <span style="color:#6272a4">/* Raccourci */</span></div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">La fonction minmax()</h4>
          <p>Permet de définir une taille minimale et maximale :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</div>
          <p>Cette combinaison crée une grille <strong>responsive sans media queries</strong> !</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)"> Placer les éléments</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">.item {<br>&nbsp;&nbsp;grid-column: 1 / 3;    <span style="color:#6272a4">/* De la ligne 1 à 3 */</span><br>&nbsp;&nbsp;grid-row: 2 / 4;       <span style="color:#6272a4">/* De la ligne 2 à 4 */</span><br>&nbsp;&nbsp;grid-area: header;     <span style="color:#6272a4">/* Zone nommée */</span><br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Zones nommées</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">.container {<br>&nbsp;&nbsp;display: grid;<br>&nbsp;&nbsp;grid-template-areas:<br>&nbsp;&nbsp;&nbsp;&nbsp;"header header header"<br>&nbsp;&nbsp;&nbsp;&nbsp;"sidebar main aside"<br>&nbsp;&nbsp;&nbsp;&nbsp;"footer footer footer";<br>}<br><br>.header { grid-area: header; }<br>.sidebar { grid-area: sidebar; }<br>.main { grid-area: main; }<br>.aside { grid-area: aside; }<br>.footer { grid-area: footer; }</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔄 Alignment dans Grid</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">.container {<br>&nbsp;&nbsp;justify-items: center;  <span style="color:#6272a4">/* Axe horizontal */</span><br>&nbsp;&nbsp;align-items: center;    <span style="color:#6272a4">/* Axe vertical */</span><br>&nbsp;&nbsp;place-items: center;    <span style="color:#6272a4">/* Les deux */</span><br>}<br><br>.item {<br>&nbsp;&nbsp;justify-self: end;    <span style="color:#6272a4">/* Individuel horizontal */</span><br>&nbsp;&nbsp;align-self: start;    <span style="color:#6272a4">/* Individuel vertical */</span><br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez Grid pour les layouts de page complets</li>
            <li>Utilisez Flexbox pour les composants (navbar, cards)</li>
            <li><code>repeat(auto-fit, minmax(250px, 1fr))</code> pour les grilles responsive</li>
            <li><code>gap</code> plutôt que des marges pour l'espacement</li>
            <li>Les zones nommées rendent le code très lisible</li>
          </ul>
        `,
        code: `/* Grille responsive automatique */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Layout de page avec zones nommées */
.page {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive : une colonne sur mobile */
@media (max-width: 768px) {
    .page {
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}`,
        explanation: 'Cet exemple montre une grille responsive automatique et un layout de page complet avec zones nommées. Le media query adapte le layout pour mobile.'
      },
      {
        title: 'Positionnement : static, relative, absolute, fixed, sticky',
        content: `
          <p>La propriété <code>position</code> contrôle comment un élément est positionné dans le document. C'est essentiel pour les overlays, les modals, les headers fixes, etc.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📍 Les 5 valeurs de position</h3>
          
          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">1. static (défaut)</h4>
          <p>L'élément suit le flux normal du document. <code>top</code>, <code>left</code>, etc. n'ont aucun effet.</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">2. relative</h4>
          <p>L'élément reste dans le flux normal mais peut être décalé par rapport à sa position d'origine :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">.box {<br>&nbsp;&nbsp;position: relative;<br>&nbsp;&nbsp;top: 20px;    <span style="color:#6272a4">/* Décale de 20px vers le bas */</span><br>&nbsp;&nbsp;left: 30px;   <span style="color:#6272a4">/* Décale de 30px vers la droite */</span><br>}</div>
          <p><strong>Important :</strong> L'espace original est conservé.</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">3. absolute</h4>
          <p>L'élément est retiré du flux et positionné par rapport à son <strong>ancêtre positionné</strong> le plus proche (relative, absolute, fixed, sticky) :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">.parent {<br>&nbsp;&nbsp;position: relative; <span style="color:#6272a4">/* Devient le référent */</span><br>}<br><br>.enfant {<br>&nbsp;&nbsp;position: absolute;<br>&nbsp;&nbsp;top: 0;<br>&nbsp;&nbsp;right: 0;<br>}</div>
          <p><strong>Cas d'usage :</strong> Badges, tooltips, modals, menus déroulants.</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">4. fixed</h4>
          <p>L'élément est positionné par rapport au <strong>viewport</strong> (fenêtre du navigateur). Il reste fixe même lors du scroll :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">.navbar {<br>&nbsp;&nbsp;position: fixed;<br>&nbsp;&nbsp;top: 0;<br>&nbsp;&nbsp;left: 0;<br>&nbsp;&nbsp;right: 0;<br>&nbsp;&nbsp;z-index: 1000;<br>}</div>
          <p><strong>Cas d'usage :</strong> Navigation fixe, bouton "retour en haut", chat widget.</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">5. sticky</h4>
          <p>Hybride entre relative et fixed. L'élément devient fixe quand on scroll au-delà d'un seuil :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">.header-sticky {<br>&nbsp;&nbsp;position: sticky;<br>&nbsp;&nbsp;top: 0; <span style="color:#6272a4">/* Se "colle" en haut */</span><br>&nbsp;&nbsp;z-index: 100;<br>}</div>
          <p><strong>Cas d'usage :</strong> Headers de tableaux, navigation de section.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📊 La propriété z-index</h3>
          <p>Contrôle l'ordre d'empilement (axe Z) des éléments positionnés :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">.modal { z-index: 1000; }    <span style="color:#6272a4">/* Au-dessus de tout */</span><br>.dropdown { z-index: 100; }  <span style="color:#6272a4">/* Au-dessus du contenu */</span><br>.content { z-index: 1; }     <span style="color:#6272a4">/* Niveau de base */</span></div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Toujours définir un <code>z-index</code> pour les éléments fixed/absolute</li>
            <li>Utilisez <code>position: relative</code> sur le parent pour contenir les enfants absolute</li>
            <li>Évitez les z-index trop élevés (gardez une échelle cohérente : 10, 100, 1000)</li>
            <li><code>sticky</code> nécessite un <code>top</code>, <code>bottom</code>, <code>left</code> ou <code>right</code> pour fonctionner</li>
          </ul>
        `,
        code: `/* Header fixe */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 20px;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Badge sur une icône */
.icon-wrapper {
    position: relative;
    display: inline-block;
}

.badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Header sticky de tableau */
table th {
    position: sticky;
    top: 0;
    background: #f0f0f0;
    z-index: 10;
}`,
        explanation: 'Cet exemple montre les 3 cas d\'usage les plus courants : navbar fixed, badge absolute sur icône relative, et header de tableau sticky.'
      },
      {
        title: 'Animations et transitions CSS',
        content: `
          <p>Les animations CSS permettent de créer des effets visuels fluides sans JavaScript. Il existe deux approches : <strong>transitions</strong> (simples) et <strong>animations</strong> (complexes).</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎬 Transitions (simples)</h3>
          <p>Une transition anime le changement d'une propriété CSS :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">.button {<br>&nbsp;&nbsp;background: blue;<br>&nbsp;&nbsp;transition: background 0.3s ease, transform 0.2s;<br>}<br><br>.button:hover {<br>&nbsp;&nbsp;background: darkblue;<br>&nbsp;&nbsp;transform: scale(1.05);<br>}</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">Syntaxe de transition</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">transition: propriété durée timing-function délai;</div>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><strong>propriété</strong> : laquelle animer (ou <code>all</code>)</li>
            <li><strong>durée</strong> : en secondes (0.3s) ou millisecondes (300ms)</li>
            <li><strong>timing-function</strong> : <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, <code>ease-in-out</code>, <code>cubic-bezier()</code></li>
            <li><strong>délai</strong> : avant de commencer (optionnel)</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎞️ Animations complexes (@keyframes)</h3>
          <p>Pour des animations multi-étapes, utilisez <code>@keyframes</code> :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">@keyframes slideIn {<br>&nbsp;&nbsp;from {<br>&nbsp;&nbsp;&nbsp;&nbsp;opacity: 0;<br>&nbsp;&nbsp;&nbsp;&nbsp;transform: translateX(-100%);<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;to {<br>&nbsp;&nbsp;&nbsp;&nbsp;opacity: 1;<br>&nbsp;&nbsp;&nbsp;&nbsp;transform: translateX(0);<br>&nbsp;&nbsp;}<br>}<br><br>.animated {<br>&nbsp;&nbsp;animation: slideIn 0.5s ease forwards;<br>}</div>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">Pourcentages dans keyframes</h4>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">@keyframes pulse {<br>&nbsp;&nbsp;0% { transform: scale(1); }<br>&nbsp;&nbsp;50% { transform: scale(1.1); }<br>&nbsp;&nbsp;100% { transform: scale(1); }<br>}<br><br>.pulse {<br>&nbsp;&nbsp;animation: pulse 2s infinite;<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Propriétés de animation</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">.element {<br>&nbsp;&nbsp;animation-name: slideIn;     <span style="color:#6272a4">/* Nom du keyframe */</span><br>&nbsp;&nbsp;animation-duration: 0.5s;    <span style="color:#6272a4">/* Durée */</span><br>&nbsp;&nbsp;animation-timing-function: ease; <span style="color:#6272a4">/* Courbe */</span><br>&nbsp;&nbsp;animation-delay: 0.2s;       <span style="color:#6272a4">/* Délai */</span><br>&nbsp;&nbsp;animation-iteration-count: infinite; <span style="color:#6272a4">/* Boucle */</span><br>&nbsp;&nbsp;animation-direction: alternate;    <span style="color:#6272a4">/* Alternance */</span><br>&nbsp;&nbsp;animation-fill-mode: forwards;     <span style="color:#6272a4">/* État final */</span><br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">⚡ Performances</h3>
          <p>Certaines propriétés sont <strong>plus performantes</strong> à animer :</p>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>✅ <code>transform</code> (translate, scale, rotate) — GPU加速</li>
            <li>✅ <code>opacity</code> — GPU加速</li>
            <li>❌ <code>width</code>, <code>height</code>, <code>top</code>, <code>left</code> — déclenchent reflow</li>
            <li>❌ <code>margin</code>, <code>padding</code> — déclenchent reflow</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Préférez <code>transform</code> et <code>opacity</code> pour les animations</li>
            <li>Utilisez <code>will-change: transform</code> pour les animations complexes (avec modération)</li>
            <li>Les transitions sont parfaites pour les états hover/focus</li>
            <li>Les keyframes sont idéales pour les animations en boucle</li>
            <li>Testez sur mobile : les animations peuvent être gourmandes</li>
          </ul>
        `,
        code: `/* Transition simple */
.button {
    background: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Animation keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animated-card {
    animation: fadeInUp 0.6s ease forwards;
}

/* Animation en boucle */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.loader {
    width: 40px;
    height: 40px;
    border: 4px solid #f0f0f0;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}`,
        explanation: 'Cet exemple montre une transition hover sur bouton, une animation d\'entrée fadeInUp, et un loader qui tourne en boucle.'
      },
      {
        title: 'Responsive Design et Media Queries',
        content: `
          <p>Le <strong>responsive design</strong> permet à un site de s'adapter à toutes les tailles d'écran : mobile, tablette, desktop, grand écran.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📱 Approche Mobile-First</h3>
          <p>La meilleure pratique est de <strong>commencer par le mobile</strong>, puis d'ajouter des styles pour les écrans plus larges :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">/* Styles de base (mobile) */<br>.container {<br>&nbsp;&nbsp;padding: 16px;<br>&nbsp;&nbsp;font-size: 14px;<br>}<br><br>/* Tablette (768px et plus) */<br>@media (min-width: 768px) {<br>&nbsp;&nbsp;.container {<br>&nbsp;&nbsp;&nbsp;&nbsp;padding: 24px;<br>&nbsp;&nbsp;&nbsp;&nbsp;font-size: 16px;<br>&nbsp;&nbsp;}<br>}<br><br>/* Desktop (1024px et plus) */<br>@media (min-width: 1024px) {<br>&nbsp;&nbsp;.container {<br>&nbsp;&nbsp;&nbsp;&nbsp;max-width: 1200px;<br>&nbsp;&nbsp;&nbsp;&nbsp;margin: 0 auto;<br>&nbsp;&nbsp;}<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📐 Breakpoints standards</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><strong>Mobile</strong> : 0 - 767px</li>
            <li><strong>Tablette</strong> : 768px - 1023px</li>
            <li><strong>Desktop</strong> : 1024px - 1439px</li>
            <li><strong>Grand desktop</strong> : 1440px+</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📏 Unités relatives</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2"><span style="color:#6272a4">/* Relatif au parent */</span><br>%                   <span style="color:#6272a4">/* Pourcentage du parent */</span><br>em                  <span style="color:#6272a4">/* Relatif à la font-size parent */</span><br>rem                 <span style="color:#6272a4">/* Relatif à la font-size root */</span><br><br><span style="color:#6272a4">/* Relatif au viewport */</span><br>vw                  <span style="color:#6272a4">/* 1% de la largeur du viewport */</span><br>vh                  <span style="color:#6272a4">/* 1% de la hauteur du viewport */</span><br>vmin                <span style="color:#6272a4">/* Le plus petit entre vw et vh */</span><br>vmax                <span style="color:#6272a4">/* Le plus grand entre vw et vh */</span></div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 La fonction clamp()</h3>
          <p>Permet des valeurs fluides sans media queries :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">h1 {<br>&nbsp;&nbsp;font-size: clamp(1.5rem, 4vw, 3rem);<br>}</div>
          <p>La taille sera au minimum 1.5rem, au maximum 3rem, et entre les deux elle suivra 4vw.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">️ Images responsives</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">img {<br>&nbsp;&nbsp;max-width: 100%;   <span style="color:#6272a4">/* Ne dépasse jamais son conteneur */</span><br>&nbsp;&nbsp;height: auto;      <span style="color:#6272a4">/* Conserve les proportions */</span><br>}<br><br>/* Ou avec object-fit */<br>.cover-image {<br>&nbsp;&nbsp;width: 100%;<br>&nbsp;&nbsp;height: 300px;<br>&nbsp;&nbsp;object-fit: cover;  <span style="color:#6272a4">/* Remplit sans déformer */</span><br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📱 Meta viewport (HTML)</h3>
          <p>Indispensable dans le <code>&lt;head&gt;</code> :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Toujours inclure le meta viewport</li>
            <li>Approche mobile-first (min-width)</li>
            <li>Utilisez des unités relatives (rem, %, vw)</li>
            <li>Testez sur plusieurs appareils (DevTools → Responsive)</li>
            <li><code>clamp()</code> pour la typographie fluide</li>
            <li>Grid et Flexbox facilitent le responsive</li>
          </ul>
        `,
        code: `/* Reset et base mobile */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-size: 16px;
    line-height: 1.6;
}

.container {
    padding: 16px;
    width: 100%;
}

h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Images responsives */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Tablette */
@media (min-width: 768px) {
    .container {
        padding: 24px;
        max-width: 720px;
        margin: 0 auto;
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}`,
        explanation: 'Cet exemple montre une approche mobile-first complète avec breakpoints, typographie fluide avec clamp(), et grille responsive.'
      },
      {
        title: 'Variables CSS et personnalisation',
        content: `
          <p>Les <strong>variables CSS</strong> (custom properties) permettent de stocker des valeurs réutilisables et de créer des systèmes de design cohérents.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📦 Déclaration et utilisation</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">/* Déclaration dans :root (global) */<br>:root {<br>&nbsp;&nbsp;--primary-color: #3498db;<br>&nbsp;&nbsp;--secondary-color: #2ecc71;<br>&nbsp;&nbsp;--font-size-base: 16px;<br>&nbsp;&nbsp;--spacing: 20px;<br>&nbsp;&nbsp;--border-radius: 8px;<br>}<br><br>/* Utilisation */<br>.button {<br>&nbsp;&nbsp;background: var(--primary-color);<br>&nbsp;&nbsp;padding: var(--spacing);<br>&nbsp;&nbsp;border-radius: var(--border-radius);<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Portée des variables</h3>
          <p>Les variables suivent la cascade CSS. Vous pouvez les redéfinir localement :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">:root {<br>&nbsp;&nbsp;--text-color: #333;<br>}<br><br>.dark-theme {<br>&nbsp;&nbsp;--text-color: #fff;  <span style="color:#6272a4">/* Redéfinition locale */</span><br>}<br><br>p {<br>&nbsp;&nbsp;color: var(--text-color);  <span style="color:#6272a4">/* #333 ou #fff selon le parent */</span><br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">💡 Valeur de fallback</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">color: var(--custom-color, #333);  <span style="color:#6272a4">/* Utilise #333 si --custom-color n'existe pas */</span></div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)"> Système de design avec variables</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">:root {<br>&nbsp;&nbsp;<span style="color:#6272a4">/* Couleurs */</span><br>&nbsp;&nbsp;--color-primary: #667eea;<br>&nbsp;&nbsp;--color-secondary: #764ba2;<br>&nbsp;&nbsp;--color-success: #10b981;<br>&nbsp;&nbsp;--color-error: #ef4444;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<span style="color:#6272a4">/* Espacement */</span><br>&nbsp;&nbsp;--space-xs: 4px;<br>&nbsp;&nbsp;--space-sm: 8px;<br>&nbsp;&nbsp;--space-md: 16px;<br>&nbsp;&nbsp;--space-lg: 24px;<br>&nbsp;&nbsp;--space-xl: 32px;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<span style="color:#6272a4">/* Typographie */</span><br>&nbsp;&nbsp;--font-family: 'Inter', sans-serif;<br>&nbsp;&nbsp;--font-size-sm: 14px;<br>&nbsp;&nbsp;--font-size-base: 16px;<br>&nbsp;&nbsp;--font-size-lg: 20px;<br>&nbsp;&nbsp;--font-size-xl: 24px;<br>&nbsp;&nbsp;<br>&nbsp;&nbsp;<span style="color:#6272a4">/* Border radius */</span><br>&nbsp;&nbsp;--radius-sm: 4px;<br>&nbsp;&nbsp;--radius-md: 8px;<br>&nbsp;&nbsp;--radius-lg: 16px;<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔄 Modification en JavaScript</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">// Lire une variable<br>const color = getComputedStyle(document.documentElement)<br>&nbsp;&nbsp;.getPropertyValue('--primary-color');<br><br>// Modifier une variable<br>document.documentElement.style<br>&nbsp;&nbsp;.setProperty('--primary-color', '#e74c3c');</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Déclarez les variables globales dans <code>:root</code></li>
            <li>Utilisez une convention de nommage cohérente (<code>--color-primary</code>)</li>
            <li>Créez un système de design complet (couleurs, espacements, typo)</li>
            <li>Les variables facilitent les thèmes (clair/sombre)</li>
            <li>Utilisez les fallbacks pour la robustesse</li>
          </ul>
        `,
        code: `:root {
    /* Palette de couleurs */
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-error: #ef4444;
    
    /* Espacement */
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    
    /* Typographie */
    --font-family: system-ui, sans-serif;
    --font-size-base: 16px;
    
    /* Border radius */
    --radius: 8px;
}

/* Thème sombre */
[data-theme="dark"] {
    --color-primary: #8b9cf7;
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
}

/* Utilisation */
.button {
    background: var(--color-primary);
    color: white;
    padding: var(--space-md);
    border-radius: var(--radius);
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    transition: all 0.3s ease;
}

.button:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
}`,
        explanation: 'Cet exemple montre un système de design complet avec variables CSS, et un thème sombre qui redéfinit les variables.'
      }
    ],
    exercises: [
      {
        title: 'Exercice 1 — Styliser un bouton',
        description: 'Créez un bouton avec :\n• Fond bleu (#3498db)\n• Texte blanc\n• Padding de 15px 30px\n• Border-radius de 8px\n• Effet au survol (couleur plus foncée)\n\n📝 ÉCRIVEZ VOTRE CSS dans l\'éditeur ci-dessous.',
        initialCode: `<button class="btn">Cliquez-moi</button>

<style>
/* ÉCRIVEZ VOTRE CSS ICI */
.btn {
    /* Ajoutez vos styles ici */
    
}

.btn:hover {
    /* Ajoutez l'effet au survol */
    
}
</style>`,
        solution: `<button class="btn">Cliquez-moi</button>

<style>
.btn {
    background-color: #3498db;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #2980b9;
}
</style>`,
        hints: [
          '💡 background-color: #3498db pour le fond bleu',
          '💡 color: white pour le texte blanc',
          '💡 padding: 15px 30px (vertical horizontal)',
          '💡 border-radius: 8px pour arrondir les coins',
          '💡 .btn:hover { background-color: #2980b9; } pour l\'effet au survol'
        ],
        validate: (c) => /background-color:\s*#3498db/i.test(c) && /color:\s*white/i.test(c) && /padding:\s*15px\s+30px/i.test(c) && /border-radius:\s*8px/i.test(c) && /\.btn:hover[\s\S]*background-color/i.test(c)
      },
      {
        title: 'Exercice 2 — Centrer avec Flexbox',
        description: 'Centre verticalement et horizontalement une boîte bleue dans un conteneur gris de 400px de haut.\n\n📝 ÉCRIVEZ VOTRE CSS dans l\'éditeur ci-dessous.',
        initialCode: `<div class="container">
    <div class="box">Centré</div>
</div>

<style>
.container {
    width: 100%;
    height: 400px;
    background: #f0f0f0;
    /* ÉCRIVEZ VOTRE CSS ICI pour centrer .box */
    
}

.box {
    width: 150px;
    height: 150px;
    background: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}
</style>`,
        solution: `<div class="container">
    <div class="box">Centré</div>
</div>

<style>
.container {
    width: 100%;
    height: 400px;
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width: 150px;
    height: 150px;
    background: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}
</style>`,
        hints: [
          '💡 display: flex sur .container',
          '💡 justify-content: center pour centrer horizontalement',
          '💡 align-items: center pour centrer verticalement'
        ],
        validate: (c) => /\.container[\s\S]*display:\s*flex/i.test(c) && /justify-content:\s*center/i.test(c) && /align-items:\s*center/i.test(c)
      },
      {
        title: 'Exercice 3 — Grille responsive',
        description: 'Créez une grille de cartes qui passe de 1 colonne (mobile) à 3 colonnes (desktop ≥ 768px).\n\n📝 ÉCRIVEZ VOTRE CSS dans l\'éditeur ci-dessous.',
        initialCode: `<div class="grid">
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
</div>

<style>
/* ÉCRIVEZ VOTRE CSS ICI */
.grid {
    
}

@media (min-width: 768px) {
    .grid {
        
    }
}

.card {
    background: #3498db;
    color: white;
    padding: 40px;
    text-align: center;
    border-radius: 8px;
}
</style>`,
        solution: `<div class="grid">
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
</div>

<style>
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.card {
    background: #3498db;
    color: white;
    padding: 40px;
    text-align: center;
    border-radius: 8px;
}
</style>`,
        hints: [
          ' display: grid sur .grid',
          ' Commencez par grid-template-columns: 1fr',
          '💡 Utilisez @media (min-width: 768px)',
          '💡 grid-template-columns: repeat(3, 1fr) pour 3 colonnes égales'
        ],
        validate: (c) => /display:\s*grid/i.test(c) && /@media[^{]*\{[\s\S]*repeat\(3/i.test(c)
      },
      {
        title: 'Exercice 4 — Position fixed et sticky',
        description: 'Créez une navbar fixe en haut de page et un header de tableau sticky.\n\n📝 ÉCRIVEZ VOTRE CSS dans l\'éditeur ci-dessous.',
        initialCode: `<nav class="navbar">Navigation fixe</nav>
<table>
    <thead>
        <tr><th>Colonne 1</th><th>Colonne 2</th></tr>
    </thead>
    <tbody>
        <tr><td>Donnée 1</td><td>Donnée 2</td></tr>
    </tbody>
</table>

<style>
/* ÉCRIVEZ VOTRE CSS ICI */
.navbar {
    
}

th {
    
}

body {
    padding-top: 80px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 12px;
    border: 1px solid #ddd;
}
</style>`,
        solution: `<nav class="navbar">Navigation fixe</nav>
<table>
    <thead>
        <tr><th>Colonne 1</th><th>Colonne 2</th></tr>
    </thead>
    <tbody>
        <tr><td>Donnée 1</td><td>Donnée 2</td></tr>
    </tbody>
</table>

<style>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #333;
    color: white;
    padding: 20px;
    z-index: 1000;
}

th {
    position: sticky;
    top: 0;
    background: #f0f0f0;
    z-index: 10;
}

body {
    padding-top: 80px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 12px;
    border: 1px solid #ddd;
}
</style>`,
        hints: [
          ' .navbar : position: fixed; top: 0; z-index: 1000;',
          '💡 th : position: sticky; top: 0; z-index: 10;',
          '💡 body : padding-top pour compenser la navbar fixe'
        ],
        validate: (c) => /\.navbar[\s\S]*position:\s*fixed/i.test(c) && /th[\s\S]*position:\s*sticky/i.test(c) && /z-index/i.test(c)
      },
      {
        title: 'Exercice 5 — Animation au survol',
        description: 'Créez une carte avec une animation au survol : elle monte légèrement et son ombre s\'intensifie.\n\n📝 ÉCRIVEZ VOTRE CSS dans l\'éditeur ci-dessous.',
        initialCode: `<div class="card">
    <h3>Titre de la carte</h3>
    <p>Contenu de la carte...</p>
</div>

<style>
/* ÉCRIVEZ VOTRE CSS ICI */
.card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
}

.card:hover {
    
}
</style>`,
        solution: `<div class="card">
    <h3>Titre de la carte</h3>
    <p>Contenu de la carte...</p>
</div>

<style>
body {
    background: #f0f0f0;
    padding: 40px;
}

.card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
</style>`,
        hints: [
          '💡 transition: transform 0.3s ease, box-shadow 0.3s ease;',
          '💡 .card:hover { transform: translateY(-8px); }',
          '💡 Augmentez le box-shadow au hover'
        ],
        validate: (c) => /transition[\s\S]*transform/i.test(c) && /\.card:hover[\s\S]*transform:\s*translateY/i.test(c) && /box-shadow/i.test(c)
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { question: 'Quelle propriété CSS inclut padding/border dans width ?', options: ['display: block', 'box-sizing: border-box', 'overflow: hidden', 'position: relative'], correctIndex: 1, explanation: 'box-sizing: border-box fait que width/height incluent padding et border.' },
        { question: 'Quelle propriété Flexbox aligne sur l\'axe vertical ?', options: ['justify-content', 'align-items', 'flex-direction', 'flex-wrap'], correctIndex: 1, explanation: 'align-items aligne sur l\'axe secondaire (vertical par défaut).' },
        { question: 'Quelle unité CSS est relative à la largeur du viewport ?', options: ['px', 'em', 'vw', 'rem'], correctIndex: 2, explanation: 'vw = viewport width. 1vw = 1% de la largeur du viewport.' },
        { question: 'Comment créer une grille responsive sans media query ?', options: ['1fr 1fr 1fr', 'repeat(auto-fit, minmax(250px, 1fr))', 'display: flex', 'width: 100%'], correctIndex: 1, explanation: 'auto-fit + minmax crée des colonnes auto-adaptatives.' },
        { question: 'Quelle fonction CSS permet des valeurs fluides min/max ?', options: ['calc()', 'var()', 'clamp()', 'min()'], correctIndex: 2, explanation: 'clamp(min, preferred, max) combine min, max et valeur fluide.' },
        { question: 'Quelle position CSS reste fixe lors du scroll ?', options: ['relative', 'absolute', 'fixed', 'static'], correctIndex: 2, explanation: 'fixed positionne par rapport au viewport et reste fixe au scroll.' },
        { question: 'Quelle propriété anime le changement d\'état ?', options: ['animation', 'transition', 'transform', 'keyframes'], correctIndex: 1, explanation: 'transition anime le changement entre deux états (ex: hover).' }
      ]
    }
  },

  js: {
    id: 'js', title: 'JavaScript', icon: '⚡', color: 'var(--gradient-js)',
    description: 'Interactivité et logique',
    lessons: [
      {
        title: 'Variables et types de données',
        content: `
          <p><strong>JavaScript</strong> est le langage de programmation du web. Il rend les pages interactives et dynamiques. Contrairement à HTML/CSS qui sont des langages de balisage et de style, JavaScript permet de créer de la <strong>logique</strong>.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Objectifs de cette leçon</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Comprendre les 3 façons de déclarer des variables</li>
            <li>Maîtriser les types de données primitifs</li>
            <li>Utiliser les template literals</li>
            <li>Effectuer des opérations de base</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📦 Déclarer des variables</h3>
          <p>JavaScript propose 3 mots-clés pour déclarer des variables :</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">1. const — RECOMMANDÉ par défaut</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">const nom = "Alice";<br>const age = 25;<br>const actif = true;</div>
          <p><code>const</code> crée une <strong>constante</strong> : la valeur ne peut pas être réassignée. Utilisez-le par défaut.</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">2. let — Quand la valeur change</h4>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">let compteur = 0;<br>compteur = compteur + 1; // OK</div>
          <p><code>let</code> permet de <strong>réassigner</strong> la valeur. Utilisez-le seulement quand la valeur doit changer.</p>

          <h4 style="margin-top:16px;margin-bottom:8px;color:var(--text-primary)">3. var — À ÉVITER</h4>
          <div style="background:rgba(239,68,68,0.1);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace;border-left:3px solid var(--accent-error)">var nom = "Alice"; // ❌ Ancienne syntaxe, à éviter</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📊 Types de données primitifs</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">const nom = "Alice";        <span style="color:#6272a4">// String (texte)</span><br>const age = 25;             <span style="color:#6272a4">// Number (nombre)</span><br>const actif = true;         <span style="color:#6272a4">// Boolean (vrai/faux)</span><br>let utilisateur = null;     <span style="color:#6272a4">// null (vide intentionnel)</span><br>let valeur;                 <span style="color:#6272a4">// undefined (non défini)</span></div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔤 Template literals (ES6)</h3>
          <p>Les template literals permettent d'insérer des variables dans une chaîne avec <code>\${}</code> :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const nom = "Alice";<br>const age = 25;<br><br>// Ancienne méthode (concaténation)<br>const message1 = "Bonjour " + nom + ", vous avez " + age + " ans";<br><br>// Nouvelle méthode (template literal)<br>const message2 = \`Bonjour \${nom}, vous avez \${age} ans\`;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez <code>const</code> par défaut (90% des cas)</li>
            <li>Utilisez <code>let</code> uniquement si la valeur doit changer</li>
            <li>Ne jamais utiliser <code>var</code></li>
            <li>Utilisez les template literals (\` \`) au lieu de la concaténation</li>
            <li>Nommez vos variables de manière descriptive (<code>userAge</code> plutôt que <code>x</code>)</li>
            <li>Utilisez le camelCase pour les noms de variables (<code>firstName</code>)</li>
          </ul>
        `,
        code: `// Déclaration de variables
const prenom = "Alice";
let age = 25;
const estEtudiant = true;

// Template literal
const message = \`Bonjour \${prenom}, vous avez \${age} ans.\`;
console.log(message);

// Opération
age = age + 1;
console.log(\`L'année prochaine, vous aurez \${age} ans.\`);`,
        explanation: 'Cet exemple montre l\'usage correct de const (pour prenom et estEtudiant) et let (pour age, qui change). Le template literal rend la concaténation lisible.'
      },
      {
        title: 'Les fonctions et la logique conditionnelle',
        content: `
          <p>Les fonctions sont des blocs de code réutilisables. Les conditions permettent d'exécuter du code uniquement si certaines règles sont remplies.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📦 Déclarer une fonction</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">// 1. Fonction classique (déclaration)<br>function saluer(nom) {<br>&nbsp;&nbsp;return \`Bonjour \${nom}!\`;<br>}<br><br>// 2. Fonction fléchée (moderne, recommandée)<br>const ajouter = (a, b) => a + b;<br><br>// 3. Avec valeur par défaut<br>const direBonjour = (nom = "Inconnu") => \`Bonjour \${nom}\`;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔀 Conditions (if / else)</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const age = 18;<br><br>if (age >= 18) {<br>&nbsp;&nbsp;console.log("Majeur");<br>} else if (age >= 13) {<br>&nbsp;&nbsp;console.log("Adolescent");<br>} else {<br>&nbsp;&nbsp;console.log("Enfant");<br>}</div>
          <p><strong>Opérateurs de comparaison :</strong> <code>===</code> (égal strict, à toujours préférer), <code>!==</code> (différent), <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)"> L'opérateur ternaire</h3>
          <p>Raccourci pour un if/else simple :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">const statut = (age >= 18) ? "Majeur" : "Mineur";</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Préférez les fonctions fléchées pour leur concision</li>
            <li>Utilisez toujours <code>===</code> au lieu de <code>==</code></li>
            <li>Une fonction doit faire <strong>une seule chose</strong></li>
            <li>Nommez vos fonctions avec un verbe d'action (<code>calculateTotal</code>)</li>
          </ul>
        `,
        code: `// Fonction fléchée
const calculerTTC = (prixHT, tva = 0.2) => {
    return prixHT * (1 + tva);
};

const prix = 100;
const prixFinal = calculerTTC(prix);
console.log(\`Prix TTC : \${prixFinal}€\`);

// Condition
const age = 20;
const message = age >= 18 ? "Accès autorisé" : "Accès refusé";
console.log(message);`,
        explanation: 'Exemple de fonction fléchée avec paramètre par défaut (tva = 0.2) et utilisation de l\'opérateur ternaire pour une condition simple et lisible.'
      },
      {
        title: 'Tableaux et objets',
        content: `
          <p>Les <strong>tableaux</strong> (arrays) et les <strong>objets</strong> sont les structures de données fondamentales en JavaScript. Ils permettent de stocker et organiser des informations complexes.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📋 Tableaux (Arrays)</h3>
          <p>Un tableau est une liste ordonnée de valeurs :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const fruits = ["Pomme", "Banane", "Orange"];<br><br>// Accès par index (commence à 0)<br>console.log(fruits[0]); // "Pomme"<br>console.log(fruits[2]); // "Orange"<br><br>// Longueur<br>console.log(fruits.length); // 3<br><br>// Modification<br>fruits[1] = "Kiwi"; // Remplace "Banane"<br>fruits.push("Mangue"); // Ajoute à la fin<br>fruits.pop(); // Retire le dernier</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Méthodes essentielles des tableaux</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const nombres = [1, 2, 3, 4, 5];<br><br>// map : transforme chaque élément<br>const doubles = nombres.map(n => n * 2);<br>// [2, 4, 6, 8, 10]<br><br>// filter : garde selon condition<br>const pairs = nombres.filter(n => n % 2 === 0);<br>// [2, 4]<br><br>// find : trouve le premier match<br>const premier = nombres.find(n => n > 3);<br>// 4<br><br>// reduce : agrège en une valeur<br>const somme = nombres.reduce((acc, n) => acc + n, 0);<br>// 15<br><br>// forEach : parcourt sans retour<br>nombres.forEach(n => console.log(n));</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📦 Objets</h3>
          <p>Un objet stocke des paires <strong>clé-valeur</strong> :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const utilisateur = {<br>&nbsp;&nbsp;nom: "Alice",<br>&nbsp;&nbsp;age: 25,<br>&nbsp;&nbsp;email: "alice@example.com",<br>&nbsp;&nbsp;actif: true<br>};<br><br>// Accès<br>console.log(utilisateur.nom); // "Alice"<br>console.log(utilisateur["age"]); // 25<br><br>// Modification<br>utilisateur.age = 26;<br>utilisateur.ville = "Paris"; // Ajoute<br><br>// Suppression<br>delete utilisateur.actif;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔓 Déstructuration</h3>
          <p>Extrait facilement des valeurs :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">// Objet<br>const { nom, age } = utilisateur;<br><br>// Tableau<br>const [premier, deuxieme] = fruits;<br><br>// Avec renommage<br>const { nom: userName, age: userAge } = utilisateur;</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez <code>const</code> pour les tableaux/objets (le contenu peut changer, pas la référence)</li>
            <li>Préférez <code>map</code>, <code>filter</code>, <code>reduce</code> aux boucles <code>for</code></li>
            <li>Utilisez la déstructuration pour un code plus lisible</li>
            <li>Nommez les clés d'objet en camelCase</li>
          </ul>
        `,
        code: `// Tableau d'utilisateurs
const utilisateurs = [
    { nom: "Alice", age: 25, ville: "Paris" },
    { nom: "Bob", age: 30, ville: "Lyon" },
    { nom: "Charlie", age: 22, ville: "Paris" }
];

// Filtrer les Parisiens
const parisiens = utilisateurs.filter(u => u.ville === "Paris");

// Extraire les noms
const noms = utilisateurs.map(u => u.nom);

// Calculer la moyenne d'âge
const moyenneAge = utilisateurs.reduce((sum, u) => sum + u.age, 0) / utilisateurs.length;

console.log("Parisiens:", parisiens);
console.log("Noms:", noms);
console.log("Moyenne d'âge:", moyenneAge);`,
        explanation: 'Cet exemple montre les opérations courantes sur tableaux d\'objets : filter, map, et reduce.'
      },
      {
        title: 'Boucles et structures de contrôle',
        content: `
          <p>Les boucles permettent de répéter du code. JavaScript propose plusieurs types de boucles adaptés à différents cas d'usage.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔄 Boucle for classique</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">for (let i = 0; i < 5; i++) {<br>&nbsp;&nbsp;console.log("Itération", i);<br>}<br>// 0, 1, 2, 3, 4</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Boucle for...of (tableaux)</h3>
          <p>La plus lisible pour parcourir un tableau :</p>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">const fruits = ["Pomme", "Banane", "Orange"];<br><br>for (const fruit of fruits) {<br>&nbsp;&nbsp;console.log(fruit);<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📦 Boucle for...in (objets)</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">const user = { nom: "Alice", age: 25 };<br><br>for (const cle in user) {<br>&nbsp;&nbsp;console.log(cle, ":", user[cle]);<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🔁 Boucle while</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">let compteur = 0;<br><br>while (compteur < 5) {<br>&nbsp;&nbsp;console.log(compteur);<br>&nbsp;&nbsp;compteur++;<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">⚠️ Attention aux boucles infinies</h3>
          <div style="background:rgba(239,68,68,0.1);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace;border-left:3px solid var(--accent-error)">while (true) {<br>&nbsp;&nbsp;// ❌ Boucle infinie !<br>&nbsp;&nbsp;// Le navigateur va planter<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)"> break et continue</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">for (let i = 0; i < 10; i++) {<br>&nbsp;&nbsp;if (i === 5) break;      <span style="color:#6272a4">// Arrête la boucle</span><br>&nbsp;&nbsp;if (i % 2 === 0) continue; <span style="color:#6272a4">// Passe à l'itération suivante</span><br>&nbsp;&nbsp;console.log(i);<br>}<br>// Affiche : 1, 3</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Préférez <code>for...of</code> pour les tableaux</li>
            <li>Utilisez <code>map</code>, <code>filter</code>, <code>reduce</code> quand c'est possible</li>
            <li>Évitez les boucles <code>while</code> sauf cas spécifiques</li>
            <li>Toujours assurer une condition de sortie</li>
          </ul>
        `,
        code: `const notes = [15, 12, 18, 9, 16, 14];

// Calculer la moyenne avec for...of
let somme = 0;
for (const note of notes) {
    somme += note;
}
const moyenne = somme / notes.length;
console.log("Moyenne:", moyenne);

// Trouver les notes au-dessus de la moyenne
const bonnesNotes = notes.filter(note => note >= moyenne);
console.log("Bonnes notes:", bonnesNotes);

// Trouver la note maximale
const maxNote = Math.max(...notes);
console.log("Note max:", maxNote);`,
        explanation: 'Cet exemple combine boucle for...of et méthodes de tableau pour calculer une moyenne et filtrer.'
      },
      {
        title: 'Manipulation du DOM',
        content: `
          <p>Le <strong>DOM</strong> (Document Object Model) est la représentation de la page en JavaScript. Il permet de modifier le contenu, la structure et le style dynamiquement.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Sélectionner des éléments</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">// Par sélecteur CSS (recommandé)<br>const titre = document.querySelector('h1');<br>const bouton = document.querySelector('.btn');<br>const header = document.querySelector('#header');<br><br>// Plusieurs éléments<br>const items = document.querySelectorAll('.item');<br><br>// Par ID (ancienne méthode)<br>const element = document.getElementById('monId');</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📝 Modifier le contenu</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:2">const titre = document.querySelector('h1');<br><br>// Texte<br>titre.textContent = "Nouveau titre";<br><br>// HTML<br>titre.innerHTML = "&lt;em&gt;Nouveau&lt;/em&gt; titre";<br><br>// Attributs<br>titre.setAttribute('id', 'main-title');<br><br>// Classes<br>titre.classList.add('active');<br>titre.classList.remove('hidden');<br>titre.classList.toggle('visible');<br><br>// Style<br>titre.style.color = 'blue';<br>titre.style.fontSize = '32px';</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)"> Créer et ajouter des éléments</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const nouveau = document.createElement('p');<br>nouveau.textContent = "Paragraphe ajouté";<br>nouveau.classList.add('highlight');<br>document.body.appendChild(nouveau);</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🗑️ Supprimer des éléments</h3>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;margin:12px 0;font-family:monospace">const element = document.querySelector('.old');<br>element.remove();</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez <code>querySelector</code> plutôt que <code>getElementById</code></li>
            <li>Préférez <code>textContent</code> à <code>innerHTML</code> (plus sécurisé)</li>
            <li>Utilisez <code>classList</code> plutôt que de manipuler <code>className</code></li>
            <li>Placez vos scripts en bas de <code>&lt;body&gt;</code> ou utilisez <code>defer</code></li>
          </ul>
        `,
        code: `// Sélection
const titre = document.querySelector('h1');
const boutons = document.querySelectorAll('.btn');

// Modification
titre.textContent = "Nouveau titre";
titre.style.color = "blue";
titre.classList.add('actif');

// Création
const nouveau = document.createElement('p');
nouveau.textContent = "Paragraphe ajouté";
document.body.appendChild(nouveau);

// Parcours
boutons.forEach(btn => {
    btn.style.background = "red";
});`,
        explanation: 'Cet exemple montre les opérations DOM essentielles : sélection, modification, création, et parcours.'
      },
      {
        title: 'Événements et interactivité',
        content: `
          <p>Les <strong>événements</strong> permettent de réagir aux actions utilisateur : clic, saisie, soumission, scroll, etc.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)"> addEventListener</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const bouton = document.querySelector('#btn');<br><br>bouton.addEventListener('click', (e) => {<br>&nbsp;&nbsp;console.log("Clic !");<br>&nbsp;&nbsp;console.log("Cible:", e.target);<br>});</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📋 Événements courants</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li><code>click</code> : clic de souris</li>
            <li><code>dblclick</code> : double-clic</li>
            <li><code>mouseover</code>, <code>mouseout</code> : survol</li>
            <li><code>keydown</code>, <code>keyup</code> : touches clavier</li>
            <li><code>input</code> : saisie dans un champ</li>
            <li><code>change</code> : changement de valeur</li>
            <li><code>submit</code> : soumission de formulaire</li>
            <li><code>scroll</code> : défilement</li>
            <li><code>load</code> : chargement terminé</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🛑 preventDefault()</h3>
          <p>Empêche le comportement par défaut (ex: rechargement sur submit) :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const form = document.querySelector('form');<br><br>form.addEventListener('submit', (e) => {<br>&nbsp;&nbsp;e.preventDefault(); <span style="color:#6272a4">// Empêche le rechargement</span><br>&nbsp;&nbsp;const data = new FormData(form);<br>&nbsp;&nbsp;console.log(data.get('email'));<br>});</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Délégation d'événements</h3>
          <p>Pour gérer les événements sur des éléments dynamiques :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">document.querySelector('.liste').addEventListener('click', (e) => {<br>&nbsp;&nbsp;if (e.target.matches('.item')) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Item cliqué:", e.target.textContent);<br>&nbsp;&nbsp;}<br>});</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Utilisez <code>addEventListener</code> plutôt que les attributs HTML (<code>onclick</code>)</li>
            <li>N'oubliez pas <code>e.preventDefault()</code> pour les formulaires</li>
            <li>Utilisez la délégation pour les listes dynamiques</li>
            <li>Supprimez les listeners quand nécessaire (<code>removeEventListener</code>)</li>
          </ul>
        `,
        code: `// Compteur
let count = 0;
const display = document.querySelector('#counter');
const btnPlus = document.querySelector('#plus');
const btnMinus = document.querySelector('#minus');

btnPlus.addEventListener('click', () => {
    count++;
    display.textContent = count;
});

btnMinus.addEventListener('click', () => {
    count--;
    display.textContent = count;
});

// Formulaire
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = document.querySelector('#nom').value;
    alert(\`Bienvenue \${nom} !\`);
    form.reset();
});`,
        explanation: 'Cet exemple montre un compteur interactif et la gestion d\'un formulaire avec preventDefault.'
      },
      {
        title: 'localStorage et persistance des données',
        content: `
          <p><strong>localStorage</strong> permet de stocker des données dans le navigateur. Les données persistent même après fermeture du navigateur.</p>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">💾 API localStorage</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">// Sauvegarder<br>localStorage.setItem('cle', 'valeur');<br><br>// Lire<br>const valeur = localStorage.getItem('cle');<br><br>// Supprimer<br>localStorage.removeItem('cle');<br><br>// Tout effacer<br>localStorage.clear();</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">📦 Stocker des objets</h3>
          <p>localStorage ne stocke que des <strong>strings</strong>. Utilisez JSON :</p>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">const user = { nom: "Alice", age: 25 };<br><br>// Sauvegarder<br>localStorage.setItem('user', JSON.stringify(user));<br><br>// Lire<br>const stored = JSON.parse(localStorage.getItem('user'));<br>console.log(stored.nom); // "Alice"</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">🎯 Cas d'usage : sauvegarder les préférences</h3>
          <div style="background:var(--bg-tertiary);padding:16px;border-radius:8px;margin:12px 0;font-family:monospace;font-size:13px;line-height:1.8">// Sauvegarder le thème<br>const themeToggle = document.querySelector('#theme');<br>themeToggle.addEventListener('click', () => {<br>&nbsp;&nbsp;const current = document.body.classList.toggle('dark');<br>&nbsp;&nbsp;localStorage.setItem('theme', current ? 'dark' : 'light');<br>});<br><br>// Restaurer au chargement<br>const savedTheme = localStorage.getItem('theme');<br>if (savedTheme === 'dark') {<br>&nbsp;&nbsp;document.body.classList.add('dark');<br>}</div>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">⚠️ Limitations</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>~5-10 Mo de stockage par domaine</li>
            <li>Données accessibles uniquement côté client</li>
            <li>Ne stockez jamais de données sensibles (mots de passe, tokens)</li>
            <li>Les données sont spécifiques au navigateur</li>
          </ul>

          <h3 style="margin-top:24px;margin-bottom:12px;color:var(--text-primary)">✅ Bonnes pratiques</h3>
          <ul style="margin-left:20px;color:var(--text-secondary)">
            <li>Toujours utiliser <code>JSON.stringify</code> et <code>JSON.parse</code> pour les objets</li>
            <li>Vérifiez l'existence avant de parser : <code>JSON.parse(data || 'null')</code></li>
            <li>Utilisez <code>try/catch</code> autour de <code>JSON.parse</code></li>
            <li>Préférez <code>sessionStorage</code> pour les données temporaires</li>
          </ul>
        `,
        code: `// Application de notes avec localStorage
const input = document.querySelector('#note-input');
const btn = document.querySelector('#add-btn');
const list = document.querySelector('#notes-list');

// Charger les notes sauvegardées
let notes = JSON.parse(localStorage.getItem('notes') || '[]');

const render = () => {
    list.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.addEventListener('click', () => {
            notes.splice(index, 1);
            save();
            render();
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
};

const save = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

btn.addEventListener('click', () => {
    if (input.value.trim()) {
        notes.push(input.value);
        input.value = '';
        save();
        render();
    }
});

render();`,
        explanation: 'Cet exemple montre une application de notes complète avec sauvegarde localStorage, ajout, suppression, et rendu dynamique.'
      }
    ],
    exercises: [
      {
        title: 'Exercice 1 — Variables et calcul',
        description: 'Déclarez deux variables : `a` avec la valeur 10 et `b` avec la valeur 5.\nAffichez leur somme dans l\'élément HTML ayant l\'id "result".\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<p id="result"></p>

<script>
// ÉCRIVEZ VOTRE CODE ICI
// 1. Déclarez a = 10 et b = 5
// 2. Calculez la somme
// 3. Affichez le résultat dans #result en utilisant textContent
</script>`,
        solution: `<p id="result"></p>

<script>
const a = 10;
const b = 5;
const somme = a + b;
document.querySelector('#result').textContent = "La somme est : " + somme;
</script>`,
        hints: [
          '💡 Utilisez const pour déclarer a et b',
          '💡 document.querySelector("#result") permet de sélectionner l\'élément',
          '💡 Utilisez .textContent pour modifier le texte'
        ],
        validate: (c) => /const\s+a\s*=\s*10/i.test(c) && /const\s+b\s*=\s*5/i.test(c) && /querySelector\(['"]#result['"]\)/i.test(c) && /textContent/i.test(c)
      },
      {
        title: 'Exercice 2 — Fonction de salutation',
        description: 'Créez une fonction `saluer` qui prend un paramètre `nom` et retourne "Bonjour [nom] !".\nAppelez cette fonction avec "Alice" et affichez le résultat dans #output.\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<p id="output"></p>

<script>
// ÉCRIVEZ VOTRE CODE ICI
// 1. Créez la fonction saluer(nom)
// 2. Appelez-la avec "Alice"
// 3. Affichez le résultat dans #output
</script>`,
        solution: `<p id="output"></p>

<script>
const saluer = (nom) => {
    return \`Bonjour \${nom} !\`;
};

const message = saluer("Alice");
document.querySelector('#output').textContent = message;
</script>`,
        hints: [
          '💡 const saluer = (nom) => `Bonjour ${nom} !`;',
          '💡 Appelez la fonction : saluer("Alice")',
          '💡 Sélectionnez #output pour y mettre le résultat'
        ],
        validate: (c) => {
          const hasFunction = /const\s+saluer\s*=\s*\(\s*nom\s*\)\s*=>/i.test(c) || /function\s+saluer\s*\(\s*nom\s*\)/i.test(c);
          const hasReturn = /return[\s\S]*Bonjour/i.test(c);
          const hasCall = /saluer\(['"]Alice['"]\)/i.test(c);
          return hasFunction && hasReturn && hasCall;
        }
      },
      {
        title: 'Exercice 3 — Manipulation du DOM et boucle',
        description: 'Vous avez un tableau `fruits = ["Pomme", "Banane", "Orange"]`.\nParcourez ce tableau et ajoutez chaque fruit comme un élément `<li>` dans la liste `<ul id="liste">`.\n\n ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<ul id="liste"></ul>

<script>
const fruits = ["Pomme", "Banane", "Orange"];
const liste = document.querySelector('#liste');

// ÉCRIVEZ VOTRE CODE ICI
// Utilisez une boucle for...of pour parcourir le tableau
// Créez un élément <li> pour chaque fruit et ajoutez-le à la liste
</script>`,
        solution: `<ul id="liste"></ul>

<script>
const fruits = ["Pomme", "Banane", "Orange"];
const liste = document.querySelector('#liste');

for (const fruit of fruits) {
    const li = document.createElement('li');
    li.textContent = fruit;
    liste.appendChild(li);
}
</script>`,
        hints: [
          '💡 Utilisez `for (const fruit of fruits) { ... }`',
          '💡 `document.createElement(\'li\')` crée l\'élément',
          '💡 `liste.appendChild(li)` l\'ajoute à la liste'
        ],
        validate: (c) => /for\s*\(\s*(const|let)\s+\w+\s+of\s+fruits\s*\)/i.test(c) && /createElement\(['"]li['"]\)/i.test(c) && /appendChild/i.test(c)
      },
      {
        title: 'Exercice 4 — Événement et compteur',
        description: 'Créez un compteur. Au clic sur le bouton "Ajouter", la variable `count` doit augmenter de 1 et l\'affichage dans #counter doit se mettre à jour.\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<p id="counter">0</p>
<button id="btn">Ajouter</button>

<script>
let count = 0;
const display = document.querySelector('#counter');
const btn = document.querySelector('#btn');

// ÉCRIVEZ VOTRE CODE ICI
// Ajoutez un écouteur d'événement 'click' sur le bouton
// Incrémentez count et mettez à jour display.textContent
</script>`,
        solution: `<p id="counter">0</p>
<button id="btn">Ajouter</button>

<script>
let count = 0;
const display = document.querySelector('#counter');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    count++;
    display.textContent = count;
});
</script>`,
        hints: [
          '💡 `btn.addEventListener(\'click\', () => { ... })`',
          '💡 `count++` ou `count = count + 1` pour incrémenter',
          '💡 `display.textContent = count` pour mettre à jour l\'affichage'
        ],
        validate: (c) => /addEventListener\(['"]click['"]/i.test(c) && /count\+\+|count\s*=\s*count\s*\+\s*1/i.test(c) && /textContent\s*=\s*count/i.test(c)
      },
      {
        title: 'Exercice 5 — Formulaire interactif',
        description: 'Empêchez le rechargement de la page lors de la soumission du formulaire.\nRécupérez la valeur du champ "nom" et affichez "Bienvenue [nom]" dans #output.\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<form id="form">
    <input type="text" id="nom" placeholder="Votre nom" required>
    <button type="submit">Envoyer</button>
</form>
<p id="output"></p>

<script>
const form = document.querySelector('#form');
const output = document.querySelector('#output');

// ÉCRIVEZ VOTRE CODE ICI
// 1. Écoutez l'événement 'submit' sur le formulaire
// 2. Utilisez e.preventDefault() pour bloquer le rechargement
// 3. Récupérez la valeur du champ #nom
// 4. Affichez "Bienvenue [nom]" dans #output
</script>`,
        solution: `<form id="form">
    <input type="text" id="nom" placeholder="Votre nom" required>
    <button type="submit">Envoyer</button>
</form>
<p id="output"></p>

<script>
const form = document.querySelector('#form');
const output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = document.querySelector('#nom').value;
    output.textContent = \`Bienvenue \${nom} !\`;
});
</script>`,
        hints: [
          '💡 `form.addEventListener(\'submit\', (e) => { ... })`',
          ' `e.preventDefault()` est indispensable pour éviter le rechargement',
          '💡 `document.querySelector(\'#nom\').value` récupère le texte saisi'
        ],
        validate: (c) => /addEventListener\(['"]submit['"]/i.test(c) && /preventDefault/i.test(c) && /\.value/i.test(c) && /Bienvenue/i.test(c)
      },
      {
        title: 'Exercice 6 — localStorage : sauvegarder des notes',
        description: 'Créez un système qui sauvegarde une note dans localStorage au clic sur "Sauvegarder", et la restaure au chargement.\n\n📝 ÉCRIVEZ VOTRE CODE dans l\'éditeur ci-dessous.',
        initialCode: `<textarea id="note" rows="5" placeholder="Votre note..."></textarea>
<button id="save">Sauvegarder</button>
<p id="status"></p>

<script>
const noteInput = document.querySelector('#note');
const saveBtn = document.querySelector('#save');
const status = document.querySelector('#status');

// ÉCRIVEZ VOTRE CODE ICI
// 1. Au chargement, restaurez la note depuis localStorage
// 2. Au clic sur "Sauvegarder", sauvegardez la note
// 3. Affichez un message de confirmation
</script>`,
        solution: `<textarea id="note" rows="5" placeholder="Votre note..."></textarea>
<button id="save">Sauvegarder</button>
<p id="status"></p>

<script>
const noteInput = document.querySelector('#note');
const saveBtn = document.querySelector('#save');
const status = document.querySelector('#status');

// Restaurer au chargement
const saved = localStorage.getItem('maNote');
if (saved) {
    noteInput.value = saved;
}

// Sauvegarder au clic
saveBtn.addEventListener('click', () => {
    localStorage.setItem('maNote', noteInput.value);
    status.textContent = '✓ Note sauvegardée !';
    setTimeout(() => status.textContent = '', 2000);
});
</script>`,
        hints: [
          '💡 `localStorage.getItem(\'maNote\')` pour lire',
          '💡 `localStorage.setItem(\'maNote\', valeur)` pour sauvegarder',
          '💡 Faites-le au chargement (hors événement)'
        ],
        validate: (c) => /localStorage\.getItem/i.test(c) && /localStorage\.setItem/i.test(c) && /addEventListener/i.test(c)
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { question: 'Quelle déclaration crée une variable dont la valeur peut changer ?', options: ['const', 'let', 'var', 'static'], correctIndex: 1, explanation: 'let permet la réassignation, contrairement à const.' },
        { question: 'Quelle méthode ajoute un élément à la fin d\'un tableau ?', options: ['append()', 'push()', 'add()', 'insert()'], correctIndex: 1, explanation: 'push() ajoute un ou plusieurs éléments à la fin du tableau.' },
        { question: 'Comment sélectionner un élément par son ID en JavaScript ?', options: ['document.getElement(id)', 'document.querySelector("#id")', 'document.find(id)', 'document.select(id)'], correctIndex: 1, explanation: 'querySelector("#id") ou getElementById("id") sont les méthodes correctes.' },
        { question: 'Quelle méthode empêche le comportement par défaut d\'un événement ?', options: ['e.stopPropagation()', 'e.preventDefault()', 'e.cancel()', 'e.stop()'], correctIndex: 1, explanation: 'preventDefault() annule l\'action par défaut du navigateur.' },
        { question: 'Que retourne la méthode Array.map() ?', options: ['Le même tableau modifié', 'Un nouveau tableau transformé', 'Une valeur unique', 'undefined'], correctIndex: 1, explanation: 'map() crée et retourne un NOUVEAU tableau avec les éléments transformés.' },
        { question: 'Quelle méthode stocke une valeur dans localStorage ?', options: ['localStorage.save()', 'localStorage.setItem()', 'localStorage.add()', 'localStorage.put()'], correctIndex: 1, explanation: 'setItem(cle, valeur) stocke une valeur dans localStorage.' },
        { question: 'Comment convertir un objet en JSON string ?', options: ['JSON.stringify(obj)', 'JSON.parse(obj)', 'obj.toString()', 'JSON.convert(obj)'], correctIndex: 0, explanation: 'JSON.stringify() convertit un objet en chaîne JSON.' }
      ]
    }
  }
};