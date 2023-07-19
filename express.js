const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
