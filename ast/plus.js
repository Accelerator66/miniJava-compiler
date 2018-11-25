function plusAST() {
    return this;
}

plusAST.prototype.exp1 = null;
plusAST.prototype.exp2 = null;

plusAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp1.toPrinter());
    children.push(this.exp2.toPrinter());
    return {
        text: {name: 'Plus'},
        children: children
    };
};

exports.plusAST = plusAST;