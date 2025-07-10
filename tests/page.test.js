const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('404.html contains #sketch-holder element', () => {
  const htmlPath = path.join(__dirname, '..', '404.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const dom = new JSDOM(html);
  const elem = dom.window.document.querySelector('#sketch-holder');
  expect(elem).not.toBeNull();
});
