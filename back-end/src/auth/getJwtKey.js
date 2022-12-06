const fs = require('fs/promises');
const { join } = require('path');

async function getJwtKey() {
  return fs.readFile(join(__dirname, '../../jwt.evaluation.key'), 'utf-8');
}

module.exports = getJwtKey;
