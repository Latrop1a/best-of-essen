import mongoose from 'mongoose';
import './loadEnv.js'; //makes dotEnv work with ES6 imports
import app from './app.js';

const DB = process.env.DATABASE.replace;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(con => console.log('DB connection successfull!'))
  .catch(err => console.log(err));

//* Server Start
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
