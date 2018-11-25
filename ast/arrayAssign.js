function arrayAssignAST() {
    return this;
}

arrayAssignAST.prototype.id = null;
arrayAssignAST.prototype.exp1 = null;
arrayAssignAST.prototype.exp2 = null;
arrayAssignAST.prototype.CLASS = 'STATEMENT';
arrayAssignAST.prototype.toPrinter = function() {
    var children = [];
    children.push({text: {name: this.id} });
    children.push(this.exp1.toPrinter());
    children.push(this.exp2.toPrinter());
    return {
        text: {name: 'ArrayAssign'},
        children: children
    };
};

exports.arrayAssignAST = arrayAssignAST;