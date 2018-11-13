function identifierTypeAST() {
    return this;
}

identifierTypeAST.prototype.id = null;
identifierTypeAST.prototype.CLASS = 'TYPE';

exports.identifierTypeAST = identifierTypeAST;