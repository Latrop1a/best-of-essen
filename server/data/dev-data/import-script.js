// Script to crudely deal with database data
// execute with option --import to import all data from meals.json

import mongoose from 'mongoose';
import { dirname } from 'path'; // to use __dirname
import { fileURLToPath } from 'url'; // to use __dirname
import '../../loadEnv.js';
import fs from 'fs';
import Meal from '../../data/models/mealModel.js';

const __filename = fileURLToPath(import.meta.url); // to use __dirname
const __dirname = dirname(__filename); // to use __dirname
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(con => console.log('DB connection successful!'))
  .catch(err => console.log(err));

// get meal data from file
let meals = fs.readFileSync(`${__dirname}/meals.json`);
meals = JSON.parse(meals);

// IMPORT DATA INTO DB
const importDevData = async () => {
  try {
    await Meal.create(meals);
    console.log('Data loaded');
    process.exit();
  } catch (e) {
    console.log(e);
  }
};

// DELETE ALL DATA FROM db document
const deleteAllData = async Document => {
  try {
    await Meal.deleteMany();
    console.log('Data deleted');
    process.exit();
  } catch (e) {
    console.log(e);
  }
};

// command line interface for using with --options
if (process.argv[2] === '--import') {
  importDevData();
} else if (process.argv[2].includes('--deleteAll')) {
  deleteAllData();
} else {
  console.log('no options specified');
  process.exit();
}
