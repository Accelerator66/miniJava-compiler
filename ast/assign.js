function assignAST() {
    return this;
}

assignAST.prototype.id = null;
assignAST.prototype.exp = null;
assignAST.prototype.CLASS = 'STATEMENT';

assignAST.prototype.toPrinter = function() {
    var children = [];
    children.push({text: {name: this.id} });
    children.push(this.exp.toPrinter());
    return {
        text: {name: 'Assign'},
        children: children
    };
};

exports.assignAST = assignAST;