const express = require('express');
const path = require('path');
const cors = require('cors');
const connectToDB = require('./db');

const app = express();

//import dataBase
connectToDB();

//import routes
const ProductRoutes = require('./routes/product.routes');
const UserRouters = require('./routes/user.routes');

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', ProductRoutes);
app.use('/api', UserRouters);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  console.log('server is running on port:8000');
});
app.use((req, res) => {
  res.status(404).send('404 not found');
});
