const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongo
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ message: "User created", token });
};

const dashboard = async (req, res) => {
  const lucky_number = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Hello, ${req.user.username}`,
    secret: `Your lucky number is ${lucky_number}`,
  });
};

module.exports = { login, dashboard };
