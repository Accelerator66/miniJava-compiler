function falseAST() {
    return this;
}

falseAST.prototype.value = 'false';

falseAST.prototype.toPrinter = function() {
    return {
        text: {name: 'False'}
    };
};

exports.falseAST = falseAST;