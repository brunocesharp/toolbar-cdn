const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  // 1. Garante que a pasta de destino exista
  const files = [
    //'./dist/meu-widget-cdn/browser/runtime.js',
    './dist/meu-widget-cdn/browser/polyfills.js',
    './dist/meu-widget-cdn/browser/main.js'
  ];

  await fs.ensureDir('elements');
  
  // 2. Concatena os arquivos em um único 'widget-final.js'
  await concat(files, 'elements/widget-final.js');
  
  // 3. Copia o CSS (se houver CSS global, senão é opcional)
  // await fs.copy('./dist/meu-widget-cdn/styles.css', 'elements/styles.css');
  
  console.log('Build finalizado! Arquivo pronto em: elements/widget-final.js');
})();