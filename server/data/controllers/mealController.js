const htmlRanklist = fs.readFileSync(`./src/templates/ranklist.html`, 'utf-8');

const htmlRankBox = fs.readFileSync(`./src/templates/rank_box.html`, 'utf-8');

const meals = 'dummy'; //fill with db query

export const checkID = (req, res, next) => {
  const id = parseInt(req.params.id);
  const meal = meals.find(el => el.id === id);

  if (!meal) {
    return res.status(404).json({ status: 'fail', message: 'id not found' });
  }
  next();
};

export const getRankPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getRanklistPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getAllMealPage = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};

export const getMeal = (req, res) => {
  res.status(500).json({ status: 'error', message: 'Not yet implemented.' });
};
