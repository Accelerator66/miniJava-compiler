function printAST() {
    return this;
}

printAST.prototype.exp = null;
printAST.prototype.CLASS = 'STATEMENT';

printAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp.toPrinter());
    return {
        text: {name: 'Print'},
        children: children
    };
};

exports.printAST = printAST;