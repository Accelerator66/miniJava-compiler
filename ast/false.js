function falseAST() {
    return this;
}

falseAST.prototype.value = 'false';

exports.falseAST = falseAST;