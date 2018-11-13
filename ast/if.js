function ifAST() {
    return this;
}

ifAST.prototype.exp = null;
ifAST.prototype.stat1 = null;
ifAST.prototype.stat2 = null;
ifAST.prototype.CLASS = 'STATEMENT';

exports.ifAST = ifAST;