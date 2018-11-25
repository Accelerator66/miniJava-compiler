function thisAST() {
    return this;
}

thisAST.prototype.value = null;

thisAST.prototype.toPrinter = function() {
    return {
        text: {name: 'This'}
    };
};

exports.thisAST = thisAST;