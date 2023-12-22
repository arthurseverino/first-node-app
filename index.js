const express = require('express');
const app = express();
const port = 8081;

//if you were to visit localhost:8081/index, it would still show the index.html page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + '/contact-me.html');
});

app.get((req, res) => {
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
