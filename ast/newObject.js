function newObjectAST() {
    return this;
}

newObjectAST.prototype.id = null;

newObjectAST.prototype.toPrinter = function() {
    var children = [];
    children.push({text: {name: this.id} });
    return {
        text: {name: 'NewObject'},
        children: children
    };
};

exports.newObjectAST = newObjectAST;