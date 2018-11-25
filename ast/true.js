function trueAST() {
    return this;
}

trueAST.prototype.value = 'true';

trueAST.prototype.toPrinter = function() {
    return {
        text: {name: 'True'}
    };
};

exports.trueAST = trueAST;