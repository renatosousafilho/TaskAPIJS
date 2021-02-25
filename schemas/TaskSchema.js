const errors = require('./messages');
const Task = require('../models/Task');

const blank = (value) => (!value);
const isNotString = (value) => (typeof value !== 'string');
const isLenghtLetterThan = (value, min) => (value.length < min );
const taskAlreadyExists = async (name) => (await Task.findByName(name) !== null);

const validate = async (name, user) => {
  const code = 422;

  switch (true) {
  case blank(name): return { code, message: errors.name_blank };
  case isNotString(name): return { code, message: errors.name_not_string  };
  case isLenghtLetterThan(name, 3): return { code, message: errors.name_length };
  case (await taskAlreadyExists(name)): return { code, message: errors.already_exists };
  case blank(user): return { code, message: errors.user_blank };
  case isNotString(user): return { code, message: errors.user_not_string };
  case isLenghtLetterThan(user, 5): return { code, message: errors.user_length };
  default: return {};
  }
};



module.exports = {
  validate,
}