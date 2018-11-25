function numberAST() {
    return this;
}

numberAST.prototype.number = null;

numberAST.prototype.toPrinter = function() {
    return {
        text: {name: 'Number_' + this.number}
    };
};

exports.numberAST = numberAST;