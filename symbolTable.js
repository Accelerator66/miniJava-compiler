var _ = require('lodash');

function SymbolTableList(){
    this.list = [];
    return this;
}

SymbolTableList.prototype.getSymbol = function(t){
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
        return tmp;
    }
};

SymbolTableList.prototype.insertVariable = function(t, type){
    var stackSize = this.list.length;
    if(stackSize === 0) return false;
    return this.list[stackSize-1].insertVariable(t, type);
};

SymbolTableList.prototype.addClass = function(t){
    var stackSize = this.list.length;
    if(stackSize === 0) return false;
    return this.list[stackSize-1].insertClass(t);
};

SymbolTableList.prototype.addMethodToClass = function(t, className, r, params){
    var stackSize = this.list.length;
    if(stackSize === 0) return false;
    var target = this.getSymbol(className);
    if(target === undefined) return false;
    var ind = _.findIndex(target.methods, function(o) { return o.name === t; });
    if(ind === -1){
        target.methods.push({
            name: t,
            type: 'function',
            returnType: r,
            params: params
        });
        return true;
    }
    else return false;
};

SymbolTableList.prototype.addVariableToClass = function(t, type, className){
    var stackSize = this.list.length;
    if(stackSize === 0) return false;
    var target = this.getSymbol(className);
    if(target === undefined) return false;
    var ind = _.findIndex(target.variables, function(o) { return o.name === t; });
    if(ind === -1){
        target.variables.push({
            name: t,
            type: type
        });
        return true;
    }
    else return false;
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

SymbolTable.prototype.insertVariable = function(t, type){
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

SymbolTable.prototype.insertClass = function(t){
    var target = this.searchSymbol(t);
    if(target === undefined){
        this.symbols.push({
            name: t,
            type: 'class',
            variables: [],
            methods: []
        });
        return true;
    }
    else{
        return false;
    }
};

exports.SymbolTableList = SymbolTableList;