function andAST() {
    return this;
}

andAST.prototype.exp1 = null;
andAST.prototype.exp2 = null;
andAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp1.toPrinter());
    children.push(this.exp2.toPrinter());
    return {
        text: {name: 'And'},
        children: children
    };
};

exports.andAST = andAST;