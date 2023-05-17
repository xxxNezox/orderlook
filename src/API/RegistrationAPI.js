const express = require('express');
const app = express();

const fs = require('fs')
const path = require('path')

app.use(express.json());

app.post('/api/registration', (req, res) => {
  const {restaurantName, adminPassword, employeePassword} = req.body;
  console.log(`Restaurant: ${restaurantName}, Admin: ${adminPassword}, Employee: ${employeePassword}`);
  res.json({ message: 'Registration successful!' });
});

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});