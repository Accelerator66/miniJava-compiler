var _ = require('lodash');
var jLexer = require('./build/miniJavaLexer').miniJavaLexer;

var errors = function(){
    this.arrays = [];
    return this;
};

var isKeyWord = function (s) {
    var keys = jLexer.prototype.literalNames.map(function(e){
        if(e === null) return null;
        else{
            return e.slice(1, e.length-1);
        }
    });
    // console.log(keys);
    var tmp = _.find(keys, function(o) { return o === s; });
    if(tmp === undefined) return false;
    else return true;
};

var isNum = function (s) {
    if(s.length === 0) return false;
    var charCodeMin = '0'.charCodeAt(0);
    var charCodeMax = '9'.charCodeAt(0);
    for(var i=0; i<s.length; i++){
        if(s.charCodeAt(i) < charCodeMin || s.charCodeAt(i) > charCodeMax) return false;
    }
    return true;
};

var isID = function (s) {
    if(s.length === 0) return false;
    var charCodeLowerMin = 'a'.charCodeAt(0);
    var charCodeLowerMax = 'z'.charCodeAt(0);
    var charCodeUpperMin = 'A'.charCodeAt(0);
    var charCodeUpperMax = 'Z'.charCodeAt(0);
    var charCodeNumMin = '0'.charCodeAt(0);
    var charCodeNumMax = '9'.charCodeAt(0);
    if((s.charCodeAt(0) < charCodeLowerMin || s.charCodeAt(0) > charCodeLowerMax) &&
        (s.charCodeAt(0) < charCodeUpperMin || s.charCodeAt(0) > charCodeUpperMax)){
        return false;
    }
    for(var i=1; i<s.length; i++){
        if((s.charCodeAt(i) < charCodeLowerMin || s.charCodeAt(i) > charCodeLowerMax) &&
            (s.charCodeAt(i) < charCodeUpperMin || s.charCodeAt(i) > charCodeUpperMax) &&
            (s.charCodeAt(i) < charCodeNumMin || s.charCodeAt(i) > charCodeNumMax) &&
            s.charCodeAt(i) !== '_'.charCodeAt(0)){
            return false;
        }
    }
    return true;
};

var filter_undefined = function (array) {
    if(!Array.isArray(array)) return array;
    var filtered_array =  _.filter(array, function (o) {
        return o !== undefined;
    });
    if(filtered_array.length === 1){
        return filtered_array[0];
    }
    else if(filtered_array.length === 0){
        return null;
    }
    return filtered_array;
};

var semanticErrorPrinter = function(line, e){
    console.log('[Line ' + line + ']' + e);
}

exports.errors = errors;
exports.isID = isID;
exports.isNum = isNum;
exports.filter_undefined = filter_undefined;
exports.isKeyWord = isKeyWord;
exports.semanticErrorPrinter = semanticErrorPrinter;