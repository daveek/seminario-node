/*
 Breve introducción a node como servidor web
 -------------------------------------------------------------
 
 Hola Mundo en Express
 
*/

var express     = require('express');
var bodyParser  = require('body-parser');
var config      = require('./config.json');
var app         = express();

// routers
// ==============================================
var api         = require('./routers/api');
var web			= require('./routers/web');

// configuramos la aplicacion 
// ==============================================
app.use(bodyParser.urlencoded({ extended: true }));   //nos permite obtener urlencode data desde body
app.use(bodyParser.json());                           //nos permite obtener json data desde body
app.use("/public", express.static(__dirname + '/public'));
app.set('view engine', 'jade');

// rutas
// ==============================================
app.use('/api', api);
app.use('/', 	web);

// servidor
// ==============================================
var port = process.env.PORT || config.port;
var server = app.listen(port, function() {
  console.log('Servidor preparado en http://localhost:%s', server.address().port);
});