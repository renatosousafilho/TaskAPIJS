const express = require('express');
const createToken = require('../auth/createToken');
const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');
const { StatusCodes } = require('http-status-codes');

const LoginController = express.Router();

LoginController.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.end();

  const salt = bcrypt.genSaltSync(5);

  const passwordHash = bcrypt.hashSync(password, salt);

  const { passwordHash: _, ...userWithoutPassword } = 
    await User.create(email, passwordHash);

  res.status(StatusCodes.OK).json(userWithoutPassword);
});

module.exports = LoginController;