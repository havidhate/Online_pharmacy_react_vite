const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

exports.signup = async (req, res) => {
  const user = await User.create(req.body);
  const token = generateToken(user);
  res.json({ token, user });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await user.comparePassword(req.body.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = generateToken(user);
  res.json({ token, user });
};
