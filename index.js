require('dotenv').config({
  quiet: true,
});

const express = require('express');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.set('view engine', 'ejs');

// HOME ROUTE
app.get('/', (req, res) => {
  res.send('Home Page Working');
});

// IMPORT ROUTES
const userRoutes = require('./routes/userRoutes');

// USERS ROUTE
app.use('/users', userRoutes);

// START SERVER
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
