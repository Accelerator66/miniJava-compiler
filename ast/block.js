function blockAST() {
    return this;
}

blockAST.prototype.stat_list = [];
blockAST.prototype.CLASS = 'STATEMENT';

blockAST.prototype.toPrinter = function() {
    var children = [];
    for(var i=0; i<this.stat_list.length; i++) {
        children.push(this.stat_list[i].toPrinter());
    }
    return {
        text: {name: 'Block'},
        children: children
    };
};

exports.blockAST = blockAST;