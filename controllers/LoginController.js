const express = require('express');
const createToken = require('../auth/createToken');
const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');
const { StatusCodes } = require('http-status-codes');

const LoginController = express.Router();

LoginController.post('/', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) return res.end();
  
  const user = await User.findByEmail(email);
  
  if (!user) 
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Não autorizado' });

  const { passwordHash, ...userWithoutPassword } = user;
  
  const isMatch = bcrypt.compareSync(password, passwordHash);
  
  if (!isMatch) 
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Não autorizado' });
  
  const token = createToken(userWithoutPassword);
  
  
  res.status(StatusCodes.OK).json({ token });
});

module.exports = LoginController;