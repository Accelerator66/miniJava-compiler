function minusAST() {
    return this;
}

minusAST.prototype.exp1 = null;
minusAST.prototype.exp2 = null;

minusAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp1.toPrinter());
    children.push(this.exp2.toPrinter());
    return {
        text: {name: 'Minus'},
        children: children
    };
};

exports.minusAST = minusAST;