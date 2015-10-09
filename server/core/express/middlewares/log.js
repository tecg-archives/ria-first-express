/* server-test
 *
 * /core/express/middlewares/log.js - logging express middleware
 */

"use strict";

module.exports = function( oRequest, oResponse, fNext ) {
    console.log( "[" + oRequest.method + "] " + oRequest.url );
    fNext();
};
