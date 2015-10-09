/* server-test
 *
 * /core/express.js - express configuration
 */

"use strict";

var express = require( "express" );

var oApp;

// instantiate express
oApp = express();

// configure middlewares
oApp.use( require( "./express/middlewares/log.js" ) );

// configure engine
oApp.set( "views", __dirname + "/../views" );
oApp.set( "view engine", "jade" );

// configure static
oApp.use( express.static( __dirname + "/../assets" ) );

// configure routes
require( __dirname + "/../routes/main.js" ).init( oApp );

// listen port
oApp.listen( 12345 );
console.log( "Server is listening port 12345." );
