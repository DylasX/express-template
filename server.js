'use strict';
//Server imports
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const database = require('./models/index');
//Server env vars
const port = process.env.PORT || 3000;

//Server routes
const routes = require('./routes/api/user');
//Database
//Initial connection database
database.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection has been established successfully.');
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
    //Server initial configuration
    let app = express();
    if (process.env.NODE_ENV === 'development') {
      const expressSwagger = require('express-swagger-generator')(app);
      let options = {
        swaggerDefinition: {
          info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
          },
          host: 'localhost:3001',
          basePath: '/api',
          produces: ['application/json', 'application/xml'],
          schemes: ['http'],
        },
        basedir: __dirname, //app absolute path
        files: ['./controllers/api/v1/*.js'], //Path to the API handle folder
      };
      expressSwagger(options);
    }

    app.use(cors());
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    //routes
    app.use('/api', routes);

    //Initialize server
    app.listen(port, () => {
      console.log(`Our server is running on port ${port}`);
    });
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
