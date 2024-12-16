import { Request, Response } from 'express';
import Comment from '../models/commentModel';

const createComment = async (req: Request, res: Response) => {
  const { content, author, post } = req.body;
  const comment = new Comment({ content, author, post });
  await comment.save();
  res.status(201).send('Comment created');
};

const getComments = async (req: Request, res: Response) => {
  const comments = await Comment.find().populate('author').populate('post');
  res.json(comments);
};

export { createComment, getComments };
