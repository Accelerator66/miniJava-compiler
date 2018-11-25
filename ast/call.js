function callAST() {
    return this;
}

callAST.prototype.exp = null;
callAST.prototype.id = null;
callAST.prototype.exp_list = [];

callAST.prototype.toPrinter = function() {
    var children = [];
    children.push(this.exp.toPrinter());
    children.push({text: {name: this.id} });
    for(var i=0; i<this.exp_list.length; i++) {
        children.push(this.exp_list[i].toPrinter());
    }
    return {
        text: {name: 'Call'},
        children: children
    };
};

exports.callAST = callAST;