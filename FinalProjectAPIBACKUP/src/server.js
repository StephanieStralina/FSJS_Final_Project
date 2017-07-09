// required modules
const path = require('path'); //Node API documentation
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./routes');

//Connect mongoose to MongoDB database
mongoose.connect(`mongodb://${config.db.host}/${config.db.dbName}`);
//Import mongoose models
require('./models/file.model.js');


//express application object
const app = express();
//Finds directory to serve static files
const publicPath = path.resolve(__dirname, '../public');
//tell app to use the routes index.js
app.use(express.static(publicPath));

//parse body json when served
app.use(bodyParser.json());

app.use('/api', router);

//start the server
app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
