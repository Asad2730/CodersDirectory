import express , { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app:Application = express();

const mongo_Url:string = '';

const startServer = async () => {
  try {
    await mongoose.connect(`${mongo_Url}`);
    console.log('Connected to MongoDB');
    app.use(express.json());
    app.use(cors);
    app.listen(3000, ():void => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

startServer();
