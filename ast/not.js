function notAST() {
    return this;
}

notAST.prototype.exp = null;

notAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp.toPrinter());
    return {
        text: {name: 'Not'},
        children: children
    };
};

exports.notAST = notAST;