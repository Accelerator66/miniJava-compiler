function ifAST() {
    return this;
}

ifAST.prototype.exp = null;
ifAST.prototype.stat1 = null;
ifAST.prototype.stat2 = null;
ifAST.prototype.CLASS = 'STATEMENT';

ifAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp.toPrinter());
    children.push(this.stat1.toPrinter());
    children.push(this.stat2.toPrinter());
    return {
        text: {name: 'If'},
        children: children
    };
};

exports.ifAST = ifAST;