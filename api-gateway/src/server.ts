import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/users', createProxyMiddleware({ target: 'http://user-service:3000', changeOrigin: true }));
app.use('/posts', createProxyMiddleware({ target: 'http://post-service:3000', changeOrigin: true }));
app.use('/comments', createProxyMiddleware({ target: 'http://comment-service:3000', changeOrigin: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
