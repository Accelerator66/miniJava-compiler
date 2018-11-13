function assignAST() {
    return this;
}

assignAST.prototype.id = null;
assignAST.prototype.exp = null;
assignAST.prototype.CLASS = 'STATEMENT';

exports.assignAST = assignAST;