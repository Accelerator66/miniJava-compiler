function trueAST() {
    return this;
}

trueAST.prototype.value = 'true';

exports.trueAST = trueAST;