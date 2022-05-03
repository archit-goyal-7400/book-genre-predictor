// Importing Libs
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const config = require('config');
const spawn = require('child_process').spawn;
const fileUpload = require('express-fileupload');
const { StringDecoder } = require('string_decoder');
const cors = require('cors');
// Initialising App
const app = express();

// Fetching Routes
const genre = require('./routes/genres/genre');
const login = require('./routes/user/login');
const register = require('./routes/user/register');
const books = require('./routes/books/books');
const info = require('./routes/user/info');
const predictor = require("./routes/predictor/prediction");

if(!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: jwtPrivateKey is not defined');
  process.exit(1);    
}

if(!config.get('mongoURI')) {
  console.log('FATAL ERROR: mongoURI is not defined');
  process.exit(1);    
}

// Getting MongoCloud Db URI
let db = config.get('mongoURI');
// Connecting to MongoDB
mongoose.connect(db, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err));

// Setting Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors());

// Using the Routes
app.use('/api/genres', genre);
app.use('/api/user/login', login);
app.use('/api/user/register', register);
app.use('/api/books', books);
app.use('/api/user/me', info);
app.use("/api/prediction",predictor);


// Starting Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port = ${port}`));