const { readFile } = require('fs/promises');
const { join } = require('path');
const RestError = require('../errors/RestError');

const getImage = async (fileName) => {
  try {
    const file = await readFile(join(__dirname, '../../public/', fileName));
    return file;
  } catch (error) {
    throw new RestError(404, 'File does not exist');
  }
};

const imageService = {
  getImage,
};

module.exports = imageService;
