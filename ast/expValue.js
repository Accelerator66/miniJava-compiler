function expValueAST() {
    return this;
}

expValueAST.prototype.value = null;

expValueAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.value.toPrinter());
    return {
        text: {name: 'ExpValue'},
        children: children
    };
};

exports.expValueAST = expValueAST;