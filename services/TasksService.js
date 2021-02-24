const Task = require('../models/Task');

const getAll = async () => {
  return await Task.getAll();
};

const findById = async (id) => {
  return await Task.findById(id);
};

const create = async (name) => {
  const task = await Task.create(name);

  return task;
};

const update = async (id, name) => {
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