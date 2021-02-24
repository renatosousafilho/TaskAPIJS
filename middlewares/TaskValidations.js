const TaskSchema = require('../schemas/TaskSchema');

module.exports= (req, res, next) => {
  const { name, user } = req.body;

  const { code, message } = TaskSchema(name, user);

  if (code) return res.status(code).json({ message });

  next();
};