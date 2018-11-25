function intArrayTypeAST() {
    return this;
}

intArrayTypeAST.prototype.value = 'int array type';
intArrayTypeAST.prototype.CLASS = 'TYPE';

intArrayTypeAST.prototype.toPrinter = function() {
    return {
        text: {name: 'IntArrayType'}
    };
};

exports.intArrayTypeAST = intArrayTypeAST;