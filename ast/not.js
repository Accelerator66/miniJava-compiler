function notAST() {
    return this;
}

notAST.prototype.exp = null;

exports.notAST = notAST;