const validateToken = require('../auth/validateToken');

const validateAuthorization = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) 
    return res.status(StatusCodes.FORBIDDEN).json({message: 'Token é obrigatório'});

  const payload = validateToken(token);

  if (!payload) 
    return res.status(StatusCodes.FORBIDDEN).json({message: 'Não autorizado'});

  next();
};

module.exports = {
  validateAuthorization
}