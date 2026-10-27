const Certificate = (() => {
  const STORAGE_KEY = 'webmaster_certificates';

  const getCertificates = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; } };
  const saveCertificate = (cert) => { const certs = getCertificates(); certs.push(cert); localStorage.setItem(STORAGE_KEY, JSON.stringify(certs)); };

  const generate = (name, stats) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600; canvas.height = 1100;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 1600, 1100);
    gradient.addColorStop(0, '#0a0e27'); gradient.addColorStop(0.5, '#1a1f4a'); gradient.addColorStop(1, '#0a0e27');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 1600, 1100);

    ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 8; ctx.strokeRect(40, 40, 1520, 1020);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)'; ctx.lineWidth = 2; ctx.strokeRect(60, 60, 1480, 980);

    const drawCorner = (x, y, dx, dy) => {
      ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x, y + dy * 40); ctx.lineTo(x, y); ctx.lineTo(x + dx * 40, y); ctx.stroke();
    };
    drawCorner(40, 40, 1, 1); drawCorner(1560, 40, -1, 1); drawCorner(40, 1060, 1, -1); drawCorner(1560, 1060, -1, -1);

    ctx.fillStyle = '#d4af37'; ctx.font = 'bold 28px Georgia'; ctx.textAlign = 'center';
    ctx.fillText('★ CERTIFICAT DE RÉUSSITE ★', 800, 160);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 56px Georgia';
    ctx.fillText('WebMaster Academy', 800, 240);

    ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(500, 280); ctx.lineTo(1100, 280); ctx.stroke();

    ctx.fillStyle = '#b4b8d4'; ctx.font = '24px Georgia';
    ctx.fillText('Ce certificat est décerné à', 800, 360);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 64px Georgia';
    ctx.fillText(name || 'Apprenant', 800, 450);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.beginPath(); ctx.moveTo(400, 475); ctx.lineTo(1200, 475); ctx.stroke();

    ctx.fillStyle = '#b4b8d4'; ctx.font = '22px Georgia';
    ctx.fillText('Ayant complété avec succès la formation complète en', 800, 540);
    ctx.font = 'bold 32px Georgia'; ctx.fillStyle = '#ffffff';
    ctx.fillText('Développement Web : HTML, CSS & JavaScript', 800, 590);

    ctx.fillStyle = '#b4b8d4'; ctx.font = '20px Georgia';
    ctx.fillText(`Score global : ${stats.totalScore}% • ${stats.modulesCompleted}/3 modules validés`, 800, 670);

    const dateStr = stats.date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    ctx.fillStyle = '#b4b8d4'; ctx.font = 'italic 20px Georgia';
    ctx.fillText(`Délivré le ${dateStr}`, 800, 740);

    ctx.fillStyle = '#d4af37'; ctx.font = 'italic 24px Georgia';
    ctx.fillText('WebMaster Academy', 800, 900);
    ctx.strokeStyle = '#d4af37';
    ctx.beginPath(); ctx.moveTo(600, 920); ctx.lineTo(1000, 920); ctx.stroke();
    ctx.fillStyle = '#b4b8d4'; ctx.font = '16px Georgia';
    ctx.fillText('Direction pédagogique', 800, 950);

    ctx.fillStyle = 'rgba(180, 184, 212, 0.5)'; ctx.font = '14px monospace'; ctx.textAlign = 'right';
    ctx.fillText(`ID: ${stats.certificateId}`, 1520, 1030);

    return canvas;
  };

  const downloadPNG = (canvas, filename = 'certificat-webmaster.png') => {
    const link = document.createElement('a');
    link.download = filename; link.href = canvas.toDataURL('image/png'); link.click();
  };

  const printPDF = (canvas) => {
    const win = window.open('', '_blank');
    win.document.write(`<!DOCTYPE html><html><head><title>Certificat</title><style>@page{size:landscape;margin:0}body{margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#0a0e27}img{max-width:100%;height:auto}</style></head><body><img src="${canvas.toDataURL('image/png')}" onload="setTimeout(()=>window.print(),500)"></body></html>`);
    win.document.close();
  };

  return { generate, downloadPNG, printPDF, saveCertificate, getCertificates };
})();