const TaskSchema = require('../schemas/TaskSchema');

const validateTask = (req, res, next) => {
  const { name, user } = req.body;

  const { code, message } = TaskSchema.validate(name, user);

  if (message) return res.status(code).json({ message: message });

  next();
};

module.exports = {
  validateTask,
}