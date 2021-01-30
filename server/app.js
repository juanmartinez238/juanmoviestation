require('./db/config');
const express = require('express'),
// axios = require('axios'),
morgan = require('morgan'),
cookieParser = require('cookie-parser'),
openRoutes = require('./routes/open'),
userRouter = require('./routes/secure/users'),
// passport = require('./middleware/authentication'),
path = require('path'),
app = express();

//Parse incoming JSON into objects
app.use(express.json());

// Log all requests
app.use(morgan('dev'));

// Unauthenticated routes
app.use('/api/users', openRoutes);

app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


//Authenticated routes
app.use('/api/users', userRouter);


if (process.env.NODE_ENV === 'production') {
    // Handle React routing, return all requests to React app
    app.get('*', (request, response) => {
      response.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    });
  }
  
  module.exports = app;
  