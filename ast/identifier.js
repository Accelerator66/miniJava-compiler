function identifierAST() {
    return this;
}

identifierAST.prototype.string = null;

identifierAST.prototype.toPrinter = function() {
    return {
        text: {name: 'Identifier_' + this.string}
    };
};

exports.identifierAST = identifierAST;