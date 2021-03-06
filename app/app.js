const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  return res.json({
    status: '000',
    message: 'Success'
  })
});

app.use((req, res) => {
  res.status(404).json({
    status: '404',
    message: 'The route is not defined (yet)'
  });
});

app.listen(3000, () => {
  console.log('The application is initialised on the port %s', 3000);
});