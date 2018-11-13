function programAST() {
    return this;
}

programAST.prototype.main_class = null;
programAST.prototype.classDecl_list = [];

exports.programAST = programAST;