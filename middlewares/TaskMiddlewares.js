const TaskSchema = require('../schemas/TaskSchema');

const validateTask = (req, res, next) => {
  const { name, user } = req.body;

  const { code, message } = TaskSchema.validate(name, user);

  if (message) return res.status(code).json({ message: message });

  next();
};


const validateTasks = async (req, res, next) => {
  const tasks = req.body;

  const promises = tasks.map(({name, user}) => (validate(name, user)));

  const validations = await Promise.all(promises);

  const [{ code, message }] = validations.filter(({code}) => code);

  if (message) return res.status(code).json({ message });

  next();
};

module.exports = {
  validateTask,
}