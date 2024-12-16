import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes';

const app = express();

app.use(express.json());
app.use('/posts', postRoutes);

mongoose.connect('mongodb://postdb:27017/posts',{
    
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
export default app;
