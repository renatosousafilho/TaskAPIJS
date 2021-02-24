const errors = {
  blank_name: { 
    code: 422, 
    message: 'Nome deve ser preenchido' 
  },
  name_min_length: {
    code: 422, 
    message: 'Nome deve ter pelo menos 3 caracteres' 
  },
  name_string: {
    code:  422,
    message: "Deveria ser uma string"
  },
  blank_user: { 
    code: 422, 
    message: 'Usuário deve ser preenchido' 
  },
  user_min_length: { 
    code: 422, 
    message: 'Usuário deve ter pelo menos 5 caracteres' 
  },
  no_error: {}
}

const blank = (value) => (!value);
const isNotString  = (value) => (typeof value !== 'string')
const lengthLessThan = (value, length) => (value.length < length);

module.exports = (name, user) => {
  const MIN_LENGTH = 3;
  
  switch (true) {
    case blank(name): return errors.blank_name;
    case isNotString(name): return errors.name_string;
    case lengthLessThan(name, 3): return errors.name_min_length;
    case blank(user): return errors.blank_user;
    case lengthLessThan(user, 5): return errors.user_min_length;
    default: return errors.no_error;
  }
};
