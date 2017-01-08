var Task = require('./task.js');

var StylesTask = Object.create(Task);

StylesTask.name = 'styles';

StylesTask.prototype.scss = function() {
    this.options.language = 'scss';
    // Add gulp-sass to stream
    
    return this;
};

StylesTask.prototype.minify = function() {
    this.options.minify = true;
    // Add gulp-compact to stream
    
    return this;
};

module.exports = StylesTask;