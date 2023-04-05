import cors from 'cors';
import express, { json } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { newUserRouter, userRouter } from './routes/user.route';

require('dotenv').config();

const app = express();

app.use(json());
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/new', newUserRouter);
// app.use('/delete',deleteUser);
// app.use('/update', updateUser);


const port =  process.env.PORT_NUMBER;
//backend_connect -> the name of database-> inside that we have the userDetails collection,
mongoose.connect('mongodb://127.0.0.1:27017/backend_connect').then(() => {
  console.log('Connected DB da!');
  app.listen(port, () => {
    console.log(`Running on the port ${port}`);
  });
});

//
