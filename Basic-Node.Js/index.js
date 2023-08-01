const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});