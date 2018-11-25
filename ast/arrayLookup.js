function arrayLookupAST() {
    return this;
}

arrayLookupAST.prototype.exp1 = null;
arrayLookupAST.prototype.exp2 = null;

arrayLookupAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp1.toPrinter());
    children.push(this.exp2.toPrinter());
    return {
        text: {name: 'ArrayLookup'},
        children: children
    };
};

exports.arrayLookupAST = arrayLookupAST;