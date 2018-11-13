function whileAST() {
    return this;
}

whileAST.prototype.exp = null;
whileAST.prototype.stat = null;
whileAST.prototype.CLASS = 'STATEMENT';

exports.whileAST = whileAST;