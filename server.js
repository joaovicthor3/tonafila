// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://cordeirocoder:weareawesome@cluster0.q0ido.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tonafila_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("mongoose is connected!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// HTTP request logger
app.use(morgan('tiny'));

// Routes
app.use('/api', require('./routes/api'));


//Step 3
if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
