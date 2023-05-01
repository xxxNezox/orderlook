const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/registration', (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  res.json({ message: 'Registration successful!' });
});

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});