import express from 'express';
import mongoose from 'mongoose';
import commentRoutes from './routes/commentRoutes';

const app = express();

app.use(express.json());
app.use('/comments', commentRoutes);

mongoose.connect('mongodb://commentdb:27017/comments', {
    
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

export default app;
