/**
 * Represent a gulp task which we need to build.
 * 
 * @param {object} options
 */
function Task(options) {
    this.options = options;
    this.name = 'task';
    
    if (this.options.hasOwnProperty('name')) {
        this.name = this.options.name;
    }
}

/**
 * Set the inputs of this task.
 * 
 * @param  {string|array} input
 * @return {Task}
 */
Task.prototype.input = function(input) {
    this.options.input = input;

    return this;
};

/**
 * Set the outputs of this task.
 * 
 * @param  {string|array} output
 * @return {Task}
 */
Task.prototype.output = function(output) {
    this.options.ouput = output;

    return this;
};

module.exports = Task;