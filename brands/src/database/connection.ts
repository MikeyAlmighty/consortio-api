import mongoose from 'mongoose'

const databaseConnection = async () => {
  const MONGODB_URI = process.env.MONGODB_URI
  try {
      if (MONGODB_URI) {
        await mongoose.connect(MONGODB_URI);
        console.log("Database Connected");
      } else {
        console.log('Failed to connect to Database');
          throw new Error('[Database]: Failed to connect')
      }
  } catch (error) {
    console.log(error);
  }
};

export default databaseConnection
