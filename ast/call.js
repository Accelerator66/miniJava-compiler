function callAST() {
    return this;
}

callAST.prototype.exp = null;
callAST.prototype.id = null;
callAST.prototype.exp_list = [];

exports.callAST = callAST;