function MainClassAST() {
    return this;
}

MainClassAST.prototype.id1 = null;
MainClassAST.prototype.id2 = null;
MainClassAST.prototype.stat = null;

MainClassAST.prototype.toPrinter = function() {
    var children = [];
    children.push({text: {name: this.id1} });
    children.push({text: {name: this.id2} });
    children.push(this.stat.toPrinter());
    return {
        text: {name: 'MainClass'},
        children: children
    };
};

exports.MainClassAST = MainClassAST;