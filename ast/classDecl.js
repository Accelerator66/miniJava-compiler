function classDeclAST() {
    return this;
}

classDeclAST.prototype.id = null;
classDeclAST.prototype.extend = null;
classDeclAST.prototype.varDecl_list = [];
classDeclAST.prototype.methodDecl_list = [];
classDeclAST.prototype.CLASS = 'CLASSDECL';

exports.classDeclAST = classDeclAST;