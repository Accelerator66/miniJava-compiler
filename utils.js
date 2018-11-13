var _ = require('lodash');

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
    for(var i=0; i<s.length; i++){
        if((s.charCodeAt(i) < charCodeLowerMin || s.charCodeAt(i) > charCodeLowerMax) &&
            (s.charCodeAt(i) < charCodeUpperMin || s.charCodeAt(i) > charCodeUpperMax)){
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

exports.isID = isID;
exports.isNum = isNum;
exports.filter_undefined = filter_undefined;