/* server-test
 *
 * /routes/main.js - main express routes declarations
 */

"use strict";

exports.init = function( oServerInstance ) {

    oServerInstance.get( "/", function( oRequest, oResponse ) {
        oResponse.render( "page.jade", {
            "page_title": "Hello, internet visitors!",
            "image_src": "pixel.jpg"
        } );
    } );

    oServerInstance.get( "/elements/:id", function( oRequest, oResponse ) {
        oResponse.send( "Hello, element:" + oRequest.params.id );
    } );

};
