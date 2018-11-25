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

methodDeclAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.value_type.toPrinter());
    children.push({text: {name: this.id} });
    for(var i=0; i<this.formal_list.length; i++){
        children.push(this.formal_list[i].toPrinter());
    }
    for(var i=0; i<this.varDecl_list.length; i++){
        children.push(this.varDecl_list[i].toPrinter());
    }
    for(var i=0; i<this.stat_list.length; i++){
        children.push(this.stat_list[i].toPrinter());
    }
    children.push(this.exp.toPrinter());
    return {
        text: {name: 'MethodDeclare'},
        children: children
    };
};

exports.methodDeclAST = methodDeclAST;