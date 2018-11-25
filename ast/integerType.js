function integerTypeAST() {
    return this;
}

integerTypeAST.prototype.value = 'integer type';
integerTypeAST.prototype.CLASS = 'TYPE';

integerTypeAST.prototype.toPrinter = function() {
    return {
        text: {name: 'IntegerType'}
    };
};

exports.integerTypeAST = integerTypeAST;