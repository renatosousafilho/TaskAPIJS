const Task = require('../models/Task');
const TaskSchema = require('../schemas/TaskSchema');

const getAll = async () => {
  return await Task.getAll();
};

const findById = async (id) => {
  return await Task.findById(id);
};

const create = async (name, user) => {
  const validations = TaskSchema.validate(name, user);

  if (validations.message) return validations;

  const task = await Task.create(name, user);

  return { code: 200, task };
};

const update = async (id, name,) => {
  return await Task.update(id, name);
};

const remove = async (id) => {
  return await Task.remove(id);
};



module.exports = {
  getAll,
  create,
  findById,
  update,
  remove,
};