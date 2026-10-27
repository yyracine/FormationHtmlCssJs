const Editor = (() => {
  /**
   * Crée un éditeur de code avec preview live.
   * @param {HTMLElement|string} container - Élément ou ID du conteneur
   * @param {string} initialCode - Code initial à afficher
   * @param {string} language - 'html', 'css' ou 'js'
   * @param {Function} onChange - Callback(optionnel) appelé à chaque modification
   */
  const create = (container, initialCode, language, onChange) => {
    // Support ID ou élément
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }
    
    if (!container) {
      console.error('[Editor] Container introuvable');
      return null;
    }

    // Nettoyer le conteneur
    container.innerHTML = '';
    container.className = 'editor-container';

    // ===== PANNEAU ÉDITEUR =====
    const editorPane = document.createElement('div');
    editorPane.className = 'editor-pane';

    const editorHeader = document.createElement('div');
    editorHeader.className = 'pane-header';
    editorHeader.innerHTML = `<span>📝 Code ${language.toUpperCase()}</span>`;

    const resetBtn = document.createElement('button');
    resetBtn.className = 'code-block__copy';
    resetBtn.textContent = '↺ Réinitialiser';
    resetBtn.title = 'Remettre le code initial';
    editorHeader.appendChild(resetBtn);

    const textarea = document.createElement('textarea');
    textarea.className = 'editor-textarea';
    textarea.value = initialCode || '';
    textarea.spellcheck = false;
    textarea.autocapitalize = 'off';
    textarea.autocomplete = 'off';
    textarea.setAttribute('aria-label', 'Éditeur de code');

    // Support Tab pour indentation
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
        updatePreview();
      }
    });

    editorPane.appendChild(editorHeader);
    editorPane.appendChild(textarea);

    // ===== PANNEAU PREVIEW =====
    const previewPane = document.createElement('div');
    previewPane.className = 'preview-pane';

    const previewHeader = document.createElement('div');
    previewHeader.className = 'pane-header';
    previewHeader.innerHTML = '<span>️ Aperçu</span>';

    const runBtn = document.createElement('button');
    runBtn.className = 'code-block__copy';
    runBtn.textContent = '▶ Exécuter';
    runBtn.title = 'Forcer l\'actualisation de l\'aperçu';
    previewHeader.appendChild(runBtn);

    const iframe = document.createElement('iframe');
    iframe.className = 'preview-frame';
    iframe.sandbox = 'allow-scripts';
    iframe.title = 'Aperçu du code';

    previewPane.appendChild(previewHeader);
    previewPane.appendChild(iframe);

    // Assembler
    container.appendChild(editorPane);
    container.appendChild(previewPane);

    // ===== FONCTIONS =====
    let timeout;
    
    const updatePreview = () => {
      const code = textarea.value;
      let html;
      
      if (language === 'html') {
        html = code;
      } else if (language === 'css') {
        html = `<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: system-ui; padding: 20px; background: #f5f5f5; }
${code}
</style>
</head>
<body>
<div class="demo">
  <h1>Aperçu CSS</h1>
  <p>Paragraphe de démonstration.</p>
  <button class="btn">Bouton exemple</button>
  <div class="box">Boîte exemple</div>
</div>
</body>
</html>`;
      } else {
        html = `<!DOCTYPE html>
<html>
<body>
<div id="js-output" style="font-family:system-ui;padding:20px;"></div>
<script>
try {
  ${code}
} catch(e) {
  document.getElementById('js-output').innerHTML = '<pre style="color:red;background:#fee;padding:10px;border-radius:4px">' + e.message + '</pre>';
}
<\/script>
</body>
</html>`;
      }
      
      iframe.srcdoc = html;
    };

    // Auto-update avec debounce
    textarea.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        updatePreview();
        if (onChange) onChange(textarea.value);
      }, 300);
    });

    // Bouton reset
    resetBtn.addEventListener('click', () => {
      textarea.value = initialCode || '';
      updatePreview();
      if (onChange) onChange(textarea.value);
      textarea.focus();
    });

    // Bouton run
    runBtn.addEventListener('click', () => {
      updatePreview();
      if (onChange) onChange(textarea.value);
    });

    // Preview initiale
    updatePreview();

    // ===== API PUBLIQUE =====
    return {
      getValue: () => textarea.value,
      setValue: (code) => {
        textarea.value = code;
        updatePreview();
      },
      refresh: updatePreview,
      focus: () => textarea.focus()
    };
  };

  return { create };
})();