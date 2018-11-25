function classDeclAST() {
    return this;
}

classDeclAST.prototype.id = null;
classDeclAST.prototype.extend = null;
classDeclAST.prototype.varDecl_list = [];
classDeclAST.prototype.methodDecl_list = [];
classDeclAST.prototype.CLASS = 'CLASSDECL';

classDeclAST.prototype.toPrinter = function() {
    var children = [];
    children.push({text: {name: this.id} });
    if(this.extend !== null) children.push({text: {name: "Extend " + this.extend} });
    for(var i=0; i<this.varDecl_list.length; i++){
        children.push(this.varDecl_list[i].toPrinter());
    }
    for(var i=0; i<this.methodDecl_list.length; i++){
        children.push(this.methodDecl_list[i].toPrinter());
    }
    return {
        text: {name: 'ClassDeclare'},
        children: children
    };
};

exports.classDeclAST = classDeclAST;