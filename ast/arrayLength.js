function arrayLengthAST() {
    return this;
}

arrayLengthAST.prototype.exp = null;
arrayLengthAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp.toPrinter());
    return {
        text: {name: 'ArrayLength'},
        children: children
    };
};

exports.arrayLengthAST = arrayLengthAST;