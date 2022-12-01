const userService = require('../service/userService');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;
  
    const token = await userService.readOne(email, password);
  
    return res.status(200).json({ token });
  },

  async userRegister(req, res) {
    const { email, name, password } = req.body;

    const data = { email, name, password };

    const token = await userService.create(data);

    return res.status(201).json({ token });
  },
};
