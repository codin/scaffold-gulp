/**
 * Scaffold gulp build system. Includes API to configure
 * your Scaffold install for a number of modern frontend
 * techniques.
 */

var extend = require('extend');
var gulp = require('gulp');

var Task = require('./src/styles-task.js');

function Scaffold() {
    this.gulp = gulp;

    // Default task options.
    this.defaultOptions = {
        styles: {
            name: 'styles',
            input: '/src/styles/**/*.css',
            watch: '/src/styles/**/*.css',
            output: '/public/css/main.css',
            minify: false,
            language: 'css',
        },
        scripts: {
            name: 'scripts',
            input: '/src/js/**/*.js',
            watch: '/src/js/**/*.js',
            output: '/public/js/app.js',
            uglify: false,
            language: 'js',
        },
        images: {
            name: 'images',
            input: '/src/img/**/*',
            watch: '/src/img/**/*',
            output: '/public/img',
            compress: false,
        }
    };
}

/**
 * Create a new styles task, creating the gulp task and
 * setting up the way we're handling the style assets.
 * 
 * @param  {Function} callback
 * @return {void}
 */
Scaffold.prototype.styles = function(callback) {
    // Create a custom task instance, specifically
    // setup to build styles.
    var task = new StylesTask(this.defaultOptions.styles);

    // We want to re-capture the task.
    task = callback(task);

    // Create a new gulp task from our "Task"
    gulp.task(task.name, function() {
        // Build pipe of build using options
        // which have been set on the task.
    });
};

module.exports = new Scaffold;

// var Scaffold = require('scaffold-gulp');
// 

// Scaffold.styles(function(task) {
//     return task.input('/src/scss/main.scss')
//         .scss()
//         .minify()
//         .output('/public/assets/css/main.css');
// });

// 
// Scaffold.scripts()
//     .input('/src/js/**/*')
//     .browserify()
//     .uglify()
//     .output('/public/assets/js/app.js');
//     