function programAST() {
    return this;
}

programAST.prototype.main_class = null;
programAST.prototype.classDecl_list = [];

programAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.main_class.toPrinter());
    for(var i=0; i<this.classDecl_list.length; i++){
        children.push(this.classDecl_list[i].toPrinter());
    }
    return {
        text: {name: 'Program'},
        children: children
    };
};

exports.programAST = programAST;