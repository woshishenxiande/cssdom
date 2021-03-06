var assert = require('assert');
var fs = require('fs');
var path = require('path');
var CssDom = require('../cssdom');


function readFileSync(filepath) {
  return fs.readFileSync(path.join(__dirname, filepath), { encoding: 'utf8' });
}

function writeFileSync(filepath, content) {
  return fs.writeFileSync(path.join(__dirname, filepath), content, { encoding: 'utf8' });
}

describe('bootstrap', function() {
  it('stringify', function() {
    var contentmin = readFileSync('vendor/bootstrap.css');
    var cssmin = new CssDom(contentmin);

    writeFileSync('vendor/bootstrap.dest.css', cssmin.stringify());
  });

  it('beautify', function() {
    var content = readFileSync('vendor/bootstrap.css');
    var css = new CssDom(content);

    writeFileSync('vendor/bootstrap.beautify.css', css.beautify());
  });
});