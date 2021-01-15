const fs = require('fs');
const server = require('http').createServer();
const url = require('url');

const query = {
  name: "Leber mit Hirse",

}

const replaceTemplate = (template, meal) => {
  let output = template.replace(/{%MEALNAME%}/g, meal.name)
  output = template.replace(/{%RANKING%}/g, meal.rank)
  output = template.replace(/{%%}/g, meal.)
  output = template.replace(/{%%}/g, meal.)
  output = template.replace(/{%%}/g, meal.)
};

// DATA LOADING
const htmlRanklist = fs.readFileSync(`./src/templates/ranklist.html`, 'utf-8');

const htmlRankBox = fs.readFileSync(`./src/templates/rank_box.html`, 'utf-8');

server.on('request', async (req, res) => {
  try {
    const request = await req.url;
    const { query, pathname } = url.parse(request, true);
    if (pathname === '/') {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('blablub');
      console.log(request);
    } else if (pathname === '/ranklist') {

      const boxHtml = htmlRankBox.
      const htmlRanklistRdy = 123;
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(htmlRanklistRdy);
    }
  } catch (error) {
    console.log(error);
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening on port 8000');
});
