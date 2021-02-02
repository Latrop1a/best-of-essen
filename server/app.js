import express from 'express';
import morgan from 'morgan';

import siteRouter from './data/routes/siteRouter.js';

const app = express();

//! 1) MIDDLEWARE

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static('././src'));


//! 3) ROUTE Mounting

// Site routes
app.use("/site", siteRouter);

// Api
// meal routes
app.use("/api/meals", mealRouter);

// user routes
app.use("/api/users", userRouter)


const replaceTemplate = (template, meal) => {
  let output = template.replace(/{%MEALNAME%}/g, meal.name)
  output = template.replace(/{%RANKING%}/g, meal.rank)
  output = template.replace(/{%%}/g, meal.)
  output = template.replace(/{%%}/g, meal.)
  output = template.replace(/{%%}/g, meal.)
};


export default app;