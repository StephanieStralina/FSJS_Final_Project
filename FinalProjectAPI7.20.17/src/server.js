// required modules
const path = require('path'); //Node API documentation
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./routes');
const http = require('http');
const exphbs = require('express-handlebars');
const layouts = require('handlebars-layouts');


//Connect mongoose to MongoDB database
mongoose.connect(`mongodb://${config.db.host}/${config.db.dbName}`);
//Import mongoose models
require('./models/file.model.js');

//express application object
const app = express();

//parse body json when served
app.use(bodyParser.json());


//view engine
// app.set('views', path.join(__dirname, '/views'));
// app.engine('handlebars', exphbs({extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}));
// app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '../public')));


//api router
app.use('/api', router);

//start the server
app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
