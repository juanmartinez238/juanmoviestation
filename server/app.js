require('./db/config');
const express = require('express'),
morgan = require('morgan'),
openRoutes = require('./routes/open'),
cookieParser = require('cookie-parser'),
passport = require('./middleware/authentication'),
app = express();

//Parse incoming JSON into objects
app.use(express.json());

// Log all requests
app.use(morgan('dev'));

// Unauthenticated routes
app.use('/api/users', openRoutes);

app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
    // Handle React routing, return all requests to React app
    app.get('*', (request, response) => {
      response.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    });
  }
  
  module.exports = app;
  