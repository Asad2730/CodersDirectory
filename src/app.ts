import express , { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/main';


const app : Application = express();

const startServer = async () => {
  try {
    const mongoUrl: string = 'mongodb+srv://asad:123@cluster0.mpfckh9.mongodb.net/?retryWrites=true&w=majority';   
    await mongoose.connect(mongoUrl);
    console.log('Connected to MongoDB');

    app.use(express.json());
    app.use(cors());
    app.use('/api',router);

    app.listen(3000, () : void => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

startServer();
