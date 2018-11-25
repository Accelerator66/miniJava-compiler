function varDeclAST() {
    return this;
}

varDeclAST.prototype.value_type = null;
varDeclAST.prototype.id = null;
varDeclAST.prototype.CLASS = 'VARDECL';

varDeclAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.value_type.toPrinter());
    children.push({text: {name: this.id} });
    return {
        text: {name: 'VariableDeclare'},
        children: children
    };
};

exports.varDeclAST = varDeclAST;