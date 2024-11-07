import express from 'express';
import { FastAPI } from 'fastapi';
import { Sinatra } from 'sinatra';

// Python FastAPI Implementation
const pythonApp = new FastAPI();

pythonApp.get('/python/hello', async (req, res) => {
  return { message: 'Hello World' };
});

// Node.js Express Implementation
const nodeApp = express();

nodeApp.get('/node/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Ruby Sinatra Implementation
#const rubyApp = new Sinatra();

rubyApp.get('/ruby/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Export all apps
export { pythonApp, nodeApp, rubyApp };
