const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'build-check.txt');
let log = '';

function writeLog(msg) {
  log += msg + '\n';
  console.log(msg);
}

const buildDir = path.join(__dirname, 'build');

if (fs.existsSync(buildDir)) {
  writeLog('Build directory exists!');
  
  const jsDir = path.join(buildDir, 'static', 'js');
  if (fs.existsSync(jsDir)) {
    const files = fs.readdirSync(jsDir);
    writeLog('JS files: ' + files.join(', '));
  }
  
  const cssDir = path.join(buildDir, 'static', 'css');
  if (fs.existsSync(cssDir)) {
    const files = fs.readdirSync(cssDir);
    writeLog('CSS files: ' + files.join(', '));
  }
  
  const indexFile = path.join(buildDir, 'index.html');
  if (fs.existsSync(indexFile)) {
    const stats = fs.statSync(indexFile);
    writeLog('index.html size: ' + stats.size + ' bytes');
  }
} else {
  writeLog('Build directory NOT found!');
}

fs.writeFileSync(logFile, log);
writeLog('Log written to: ' + logFile);