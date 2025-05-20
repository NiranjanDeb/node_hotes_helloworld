// db.js  file is essentially responsible for  establishing a connection between your node.js application and your MongoDB database.
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// define the mongodb url
// const mongoURL = process.env.MONGODB_URL_LOCAL; // Local MongoDB URL
const mongoURL = process.env.MONGODB_URL; // Use environment variable or fallback to local URL

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// db stores the connection object
const db = mongoose.connection;

// Define event listeners for the connection
db.on('connected', () => {
  console.log('Mongoose connected to the database');
});
db.on('error', (error) => {
  console.error('Mongoose connection error:', error);
});
db.on('disconnected', () => {
  console.log('Mongoose disconnected from the database');
});


// Export the mongoose connection
export default db;





