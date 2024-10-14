import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const URL = process.env.MONGODB_URI;

Connection(URL);

app.use(express.static(path.join(__dirname, 'build')));

// Example API route: /products
app.get('/products', (req, res) => {
  res.json({ message: "Here are your products!" });
});

// Catch-all route for React app (single-page application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server (this is mainly for local dev, Vercel will use the serverless function)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

DefaultData();




