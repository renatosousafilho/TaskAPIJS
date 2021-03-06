const connection = require('./connection');
const { ObjectId } = require('mongodb');

const create = async (email, passwordHash) => {
  const { ops } = 
  await connection()
    .then(db => db.collection('users')
      .insertOne({ email, passwordHash }));
  
  return ops[0];
};

const findByEmail = async (email) => {
  return await connection().then(db => db.collection('users').findOne({ email }));
};

module.exports = {
  create,
  findByEmail
};