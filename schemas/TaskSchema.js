const errors = {
  name_blank: "Nome é obrigatório",
  name_not_string: "Nome deve ser uma string",
  name_length: "Nome deve ter pelo menos 3 caracteres",
  user_blank: "Usuário é obrigatório",
  user_not_string: "Usuário deve ser uma string",
  user_length: "Usuário deve ter pelo menos 5 caracteres",
}

const blank = (value) => (!value);
const isNotString = (value) => (typeof value !== 'string');
const isLenghtLetterThan = (value, min) => (value.length < min );

const validate = (name, user) => {
  const code = 422;

  switch (true) {
    case blank(name): return { code, message: errors.name_blank }
    case isNotString(name): return { code, message: errors.name_not_string  }
    case isLenghtLetterThan(name, 3): return { code, message: errors.name_length }
    case blank(user): return { code, message: errors.user_blank };
    case isNotString(user): return { code, message: errors.user_not_string }
    case isLenghtLetterThan(user, 5): return { code, message: errors.user_length }
    default: return {};
  }
}

module.exports = {
  validate
}