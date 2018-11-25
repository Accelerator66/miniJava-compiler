function formalAST() {
    return this;
}

formalAST.prototype.value_type = null;
formalAST.prototype.id = null;

formalAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.value_type.toPrinter());
    children.push({text: {name: this.id} });
    return {
        text: {name: 'Formal'},
        children: children
    };
};

exports.formalAST = formalAST;