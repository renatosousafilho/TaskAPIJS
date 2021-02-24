const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection().then(db => db.collection('tasks').find().toArray())
};

const create = async (name, user) => {
  const { insertedId } = await connection().then(db => db.collection('tasks').insertOne({ name, user }));

  return {
    id: insertedId,
    name,
    user
  }
}

const findById = async (id) => {
  return await connection().then(db => db.collection('tasks').findOne(ObjectId(id)));
};

const update = async (id, name, user) => {
  return await connection().then(db => db.collection('tasks').updateOne(
    { _id: ObjectId(id) },
    { $set: { name, user } }
  ));
}

const remove = async (id, name) => {
  return await connection().then(db => db.collection('tasks').deleteOne(
    { _id: ObjectId(id) }
  ));
}

module.exports = {
  getAll,
  create,
  findById,
  update,
  remove,
}