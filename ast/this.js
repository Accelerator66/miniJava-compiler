function thisAST() {
    return this;
}

thisAST.prototype.value = null;

exports.thisAST = thisAST;