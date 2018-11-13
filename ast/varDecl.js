function varDeclAST() {
    return this;
}

varDeclAST.prototype.val_type = null;
varDeclAST.prototype.id = null;
varDeclAST.prototype.CLASS = 'VARDECL';

exports.varDeclAST = varDeclAST;