const { MongoClient } = require('mongodb');

const MONGODB_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
console.log(MONGODB_URL);
const DATABASE = 'TaskDB';

const connection = async () => {
  return await MongoClient.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then((conn) => conn.db(DATABASE))
    .catch((err) => {
      console.err(err);
      process.exit();
    });
};

module.exports = connection;