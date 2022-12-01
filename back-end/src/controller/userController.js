const RestError = require('../errors/RestError');
const userService = require('../service/userService');
const md5 = require('md5');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new RestError(400, 'All fields must be filled');
    }
  
    const token = await userService.readOne(email, md5(password));
  
    return res.status(200).json({ token });
  },
};
