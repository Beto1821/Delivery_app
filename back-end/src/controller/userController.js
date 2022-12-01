const userService = require('../service/userService');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
  
    const token = await userService.readOne(email, password);
  
    return res.status(200).json({ token });
  },
};
