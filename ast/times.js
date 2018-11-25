function timesAST() {
    return this;
}

timesAST.prototype.exp1 = null;
timesAST.prototype.exp2 = null;

timesAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp1.toPrinter());
    children.push(this.exp2.toPrinter());
    return {
        text: {name: 'Times'},
        children: children
    };
};

exports.timesAST = timesAST;