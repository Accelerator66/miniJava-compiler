function newArrayAST() {
    return this;
}

newArrayAST.prototype.exp = null;

newArrayAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp.toPrinter());
    return {
        text: {name: 'NewArray'},
        children: children
    };
};

exports.newArrayAST = newArrayAST;