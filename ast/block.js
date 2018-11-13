function blockAST() {
    return this;
}

blockAST.prototype.stat_list = [];
blockAST.prototype.CLASS = 'STATEMENT';

exports.blockAST = blockAST;