//This file serves as the entry point for the application. It sets up the Express server, establishes a connection to the SQL Server database, and defines the API routes.


require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./users/users.controller');

const errorHandler = require('_middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
app.use('/users', routes);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));