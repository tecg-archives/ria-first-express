/* Gruntfile - tasks for grunt */

"use strict";

module.exports = function( grunt ) {

    // 1. on charge les tâches
    grunt.loadNpmTasks( "grunt-eslint" );

    // 2. on configure les tâches
    grunt.initConfig( {
        "eslint": {
            "server": [
                "server/**/*.js"
            ]
        }
    } );

    // 3. on créé des aliases (si on veut)
    grunt.registerTask( "default", [
        "eslint"
    ] );

};
