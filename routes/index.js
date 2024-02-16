var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString('en-GB', { hour12: true }),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString('en-GB', { hour12: true }),
  },
  {
    text: 'You are doing great. Keep going!',
    user: 'anonymous',
    added: new Date().toLocaleString('en-GB', { hour12: true }),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Msg Board', messages });
});

module.exports = router;
