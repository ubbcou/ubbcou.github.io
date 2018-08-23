const fs = require('fs');
const path = require('path')
const devDirectory = fs.realpathSync(process.cwd());

module.exports = {
  contextPath: path.resolve(devDirectory),
  outputPath: path.resolve(devDirectory, '..'),
  appHtml: path.resolve(devDirectory, 'index.html'),
  appIndexJs: path.resolve(devDirectory, 'src/index.js'),
  devServerPath: path.resolve(devDirectory, 'dist'),
  ComponentsPath: path.resolve(devDirectory, 'src/components'),
}