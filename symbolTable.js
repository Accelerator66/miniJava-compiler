var _ = require('lodash');

function SymbolTableList(){
    this.list = [];
    return this;
}

SymbolTableList.prototype.getSymbolType = function(t){
    var stackSize = this.list.length;
    if(stackSize === 0) return undefined;
    var tmp = undefined;
    for(var i=stackSize-1; i>=0; i--){
        tmp = this.list[i].searchSymbol(t);
        if(tmp !== undefined) break;
    }
    if(tmp === undefined){
        return undefined;
    }
    else{
        return tmp.type;
    }
};

SymbolTableList.prototype.insertSymbol = function(t, type){
    var stackSize = this.list.length;
    if(stackSize === 0) return false;
    return this.list[stackSize-1].insertSymbol(t, type);
};

SymbolTableList.prototype.addTable = function(){
    this.list.push(new SymbolTable());
};

SymbolTableList.prototype.removeTable = function(){
    this.list = _.dropRight(this.list);
};

function SymbolTable(){
    this.symbols = [];
    return this;
}

SymbolTable.prototype.searchSymbol = function(t){
    return _.find(this.symbols, function(o){
        return o.name === t;
    });
};

SymbolTable.prototype.insertSymbol = function(t, type){
    var target = this.searchSymbol(t);
    if(target === undefined){
        this.symbols.push({
            name: t,
            type: type
        });
        return true;
    }
    else{
        return false;
    }
};

exports.SymbolTableList = SymbolTableList;