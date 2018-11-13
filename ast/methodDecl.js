function methodDeclAST() {
    return this;
}

methodDeclAST.prototype.value_type = null;
methodDeclAST.prototype.id = null;
methodDeclAST.prototype.formal_list = [];
methodDeclAST.prototype.varDecl_list = [];
methodDeclAST.prototype.stat_list = [];
methodDeclAST.prototype.exp = null;
methodDeclAST.prototype.CLASS = 'METHODDECL';

exports.methodDeclAST = methodDeclAST;