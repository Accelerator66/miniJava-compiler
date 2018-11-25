function identifierTypeAST() {
    return this;
}

identifierTypeAST.prototype.id = null;
identifierTypeAST.prototype.CLASS = 'TYPE';

identifierTypeAST.prototype.toPrinter = function() {
    var children = [];
    children.push({text: {name: this.id} });
    return {
        text: {name: 'IdentifierType'},
        children: children
    };
};

exports.identifierTypeAST = identifierTypeAST;