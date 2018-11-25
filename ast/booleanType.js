function booleanTypeAST() {
    return this;
}

booleanTypeAST.prototype.value = 'boolean type';
booleanTypeAST.prototype.CLASS = 'TYPE';

booleanTypeAST.prototype.toPrinter = function() {
    return {
        text: {name: 'BooleanType'}
    };
};

exports.booleanTypeAST = booleanTypeAST;