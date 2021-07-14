import express from 'express';
import morgan from 'morgan';

import siteRouter from './data/routes/siteRouter.js';
import mealRouter from './data/routes/mealRouter.js';
import userRouter from './data/routes/userRouter.js';

const app = express();

//! 1) MIDDLEWARE

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static('././src'));

//! 3) ROUTE Mounting

// Site routes
app.use('/site', siteRouter);

// Api
// meal routes
app.use('/api/meals', mealRouter);

// user routes
// not implemented
app.use('/api/users', userRouter);

export default app;
