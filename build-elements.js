const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/tweet-ngxkh/runtime.js',
    './dist/tweet-ngxkh/polyfills.js',
    './dist/tweet-ngxkh/scripts.js',
    './dist/tweet-ngxkh/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/tweet-ngxkh.js');
})();