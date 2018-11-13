function printAST() {
    return this;
}

printAST.prototype.exp = null;
printAST.prototype.CLASS = 'STATEMENT';

exports.printAST = printAST;