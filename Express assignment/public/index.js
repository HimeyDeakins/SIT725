const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('common'));



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use(express.static('/public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello welcome to the Express server!");
});


app.use( (req, res) => {
  res.status(404).send('404: File not found');
});


app.get('/add', (req, res) => {

  bodyParser.
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if(isNaN(num1) || isNaN(num2)) {
    res.status(400).send('400: Invalid input');
  } else {
    const sum = num1 + num2;
    res.render('calculate', { num1: num1, num2: num2, sum: sum });
  }
});



app.use( (error, request, response, next) => {
  console.error('Error occurred:', error);
  let errorStatus = error.status || 500;
  response.status(errorStatus);
  response.send('ERROR('+errorStatus+'): ' + error.toString());
});
