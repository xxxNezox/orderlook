const express = require('express');
const app = express();

const fs = require('fs')
const path = require('path')

const data = require('../DATA/users.json');
const dirFilePath = path.join(__dirname, '..', 'DATA');
const usersFilePath = path.join(__dirname, '..', 'DATA', 'users.json');

app.use(express.json());

app.post('/api/registration', (req, res) => {
  const {restaurantName, adminPassword, employeePassword} = req.body;
  
  if (data.hasOwnProperty(restaurantName)) {
    res.status(400).json({ message: 'Account with this restaurant name already exists' });
    return;
  }

  data[restaurantName] = {
    adminPassword,
    employeePassword,
  }

  const restaurantFolderPath = path.join(dirFilePath, restaurantName);
  fs.mkdirSync(restaurantFolderPath);

  const aboutFilePath = path.join(restaurantFolderPath, 'about.json');
  const menuFilePath = path.join(restaurantFolderPath, 'menu.json');
  const ordersFilePath = path.join(restaurantFolderPath, 'orders.json');
  fs.writeFileSync(aboutFilePath, JSON.stringify({}, null, 2), 'utf-8');
  fs.writeFileSync(menuFilePath, JSON.stringify({}, null, 2), 'utf-8');
  fs.writeFileSync(ordersFilePath, JSON.stringify({}, null, 2), 'utf-8');

  console.log(data)

  fs.writeFileSync(usersFilePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Restaurant: ${restaurantName}, Admin: ${adminPassword}, Employee: ${employeePassword}`);
  res.json({sucsess: true});

});

app.post('/api/login', (req, res) => {
  const { restaurantName, password } = req.body;

  if (!data.hasOwnProperty(restaurantName)) {
    res.status(400).json({ message: 'Account with this restaurant name does not exist' });
    return;
  }

  const account = data[restaurantName];
  const isAdmin = account.adminPassword === password;

  if (!isAdmin && account.employeePassword !== password) {
    res.status(400).json({ message: 'Invalid password' });
    return;
  }

  const response = {
    sucsess: true,
    restaurantName,
    isAdmin
  };

  console.log(`restaurant: ${restaurantName}, status: ${isAdmin}`);
  res.json(response);
});

app.get('/api/getdata', (req, res) => {
  console.log(req.query.restaurantName);
  const restaurantName = req.query.restaurantName;
  const dirPath = path.join(dirFilePath, restaurantName);

  try {
    const aboutData = require(path.join(dirPath, 'about.json'));
    const menuData = require(path.join(dirPath, 'menu.json'));
    const ordersData = require(path.join(dirPath, 'orders.json'));


    const response = {
      about: aboutData,
      menu: menuData,
      orders: ordersData
    };
    console.log(response)
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: 'Restaurant data not found' });
  }
});

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});