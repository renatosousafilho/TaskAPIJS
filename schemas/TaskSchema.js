const errors = {
  name_blank: 'Nome é obrigatório',
  name_not_string: 'Nome deve ser uma string',
  name_length: 'Nome deve ter pelo menos 3 caracteres',
  user_blank: 'Usuário é obrigatório',
  user_not_string: 'Usuário deve ser uma string',
  user_length: 'Usuário deve ter pelo menos 5 caracteres',
};

const blank = (value) => (!value);
const isNotString = (value) => (typeof value !== 'string');
const isLenghtLetterThan = (value, min) => (value.length < min );


const MIN_LENGHT_NAME = 3;
const MIN_LENGHT_USER = 5;

const getMessase = (name, user) => {
  switch (true) {
  case blank(name): return errors.name_blank;
  case isNotString(name): return errors.name_not_string;
  case isLenghtLetterThan(name, MIN_LENGHT_NAME): return errors.name_length;
  case blank(user): return errors.user_blank;
  case isNotString(user): return errors.user_not_string;
  case isLenghtLetterThan(user, MIN_LENGHT_USER): return user_length;
  default: return null;
  }
};

const validate = (name, user) => {
  const code = 422;

  const message = getMessase(name, user);

  if (message) return { code, message };

  return {};
};

module.exports = {
  validate
};