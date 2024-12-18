import express from "express"
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes"

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

mongoose.connect('mongodb://userdb:27017/users', {
    
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });


export default app;