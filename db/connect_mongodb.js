const { MongoClient } = require('mongodb');

const connectDB = async () => {
  let client;
  try {
    if (!client) {
      client = new MongoClient(process.env.uri);
      await client.connect();
      console.log('MongoDB is now connected');
    } else {
      console.log('MongoDB already connected!!');
    }
    return client;
  } catch (error) {
    console.log('Error connecting - ', error);
    await client.close();
  }
};

const getTasksClient = async () => {
  const client = await connectDB();
  return client.db(process.env.DB_NAME).collection(process.env.COLLECTION);
};

module.exports = getTasksClient;
