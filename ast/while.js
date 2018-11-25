function whileAST() {
    return this;
}

whileAST.prototype.exp = null;
whileAST.prototype.stat = null;
whileAST.prototype.CLASS = 'STATEMENT';

whileAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp.toPrinter());
    children.push(this.stat.toPrinter());
    return {
        text: {name: 'While'},
        children: children
    };
};

exports.whileAST = whileAST;