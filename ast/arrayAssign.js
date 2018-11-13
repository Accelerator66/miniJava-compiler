function arrayAssignAST() {
    return this;
}

arrayAssignAST.prototype.id = null;
arrayAssignAST.prototype.exp1 = null;
arrayAssignAST.prototype.exp2 = null;
arrayAssignAST.prototype.CLASS = 'STATEMENT';

exports.arrayAssignAST = arrayAssignAST;