import { Request, Response } from 'express';
import Post from '../models/postModel';

const createPost = async (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  const post = new Post({ title, content, author });
  await post.save();
  res.status(201).send('Post created');
};

const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
};

export { createPost, getPosts };
