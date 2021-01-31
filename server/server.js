import './loadEnv.js'; //makes dotEnv work with ES6 imports
import app from './app.js';

const port = prcoess.env.PORT || 3000;

const DB = process.env.DATABASE;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
