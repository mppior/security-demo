const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/user', (req, res) => {
  const query = "SELECT * FROM users WHERE id = " + req.query.id;
  db.query(query, (err, result) => {
    res.send(result);
  });
});

// XSS vulnerability  
app.get('/search', (req, res) => {
  res.send('<h1>' + req.query.term + '</h1>');
});

app.listen(3000);
