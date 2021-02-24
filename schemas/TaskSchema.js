const errors = {
  blank_name: { 
    code: 422, 
    message: 'Nome deve ser preenchido' 
  },
  name_min_length: {
    code: 422, 
    message: 'Nome deve ter pelo menos 3 caracteres' 
  },
  blank_user: { 
    code: 422, 
    message: 'Usuário deve ser preenchido' 
  },
  user_min_length: { 
    code: 422, 
    message: 'Usuário deve ter pelo menos 3 caracteres' 
  },
  no_error: {}
}

module.exports = (name, user) => {
  const MIN_LENGTH = 3;
  // if (!name) errors.blank_name;
  // if (name.length < MIN_LENGTH) return errors.name_min_length;
  // if (!user) return errors.blank_user;
  // if (user.length < MIN_LENGTH) return errors.user_min_length;

  // return errors.no_error;

  switch (true) {
    case (!name): return errors.blank_name;
    case (name.length < MIN_LENGTH): return errors.name_min_length;
    case (!user): return errors.blank_user;
    case (user.length < MIN_LENGTH): return errors.user_min_length;
    default: return errors.no_error;
  }
};
