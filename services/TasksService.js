const Task = require('../models/Task');

const getAll = async () => {
  return await Task.getAll();
};

const findById = async (id) => {
  return await Task.findById(id);
};

const create = async (name, user) => {
  if (!name) return { code: 422, message: "Nome é obrigatório" }
  if (!user) return { code: 422, message: "Usuário é obrigatório" }

  const task = await Task.create(name, user);

  return { code: 200, task };
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