import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routes);

const PORT = process.env.PORT;

const URL = process.env.MONGODB_URI;

Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();




