function lessThanAST() {
    return this;
}

lessThanAST.prototype.exp1 = null;
lessThanAST.prototype.exp2 = null;

lessThanAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp1.toPrinter());
    children.push(this.exp2.toPrinter());
    return {
        text: {name: 'LessThan'},
        children: children
    };
};

exports.lessThanAST = lessThanAST;