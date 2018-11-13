var _ = require('lodash');
var utils = require('./utils');
var jVisitor = require('./build/miniJavaVisitor').miniJavaVisitor;
var expValueNode = require('./ast/expValue').expValueAST;
var falseNode = require('./ast/false').falseAST;
var trueNode = require('./ast/true').trueAST;
var thisNode = require('./ast/this').thisAST;
var identifierNode = require('./ast/identifier').identifierAST;
var numberNode = require('./ast/number').numberAST;
var newObjectNode = require('./ast/newObject').newObjectAST;
var notNode = require('./ast/not').notAST;
var newArrayNode = require('./ast/newArray').newArrayAST;
var arrayLengthNode = require('./ast/arrayLength').arrayLengthAST;
var callNode = require('./ast/call').callAST;
var arrayLookupNode = require('./ast/arrayLookup').arrayLookupAST;
var timesNode = require('./ast/times').timesAST;
var plusNode = require('./ast/plus').plusAST;
var minusNode = require('./ast/minus').minusAST;
var lessThanNode = require('./ast/lessThan').lessThanAST;
var andNode = require('./ast/and').andAST;
var blockNode = require('./ast/block').blockAST;
var ifNode = require('./ast/if').ifAST;
var whileNode = require('./ast/while').whileAST;
var printNode = require('./ast/print').printAST;
var assignNode = require('./ast/assign').assignAST;
var arrayAssignNode = require('./ast/arrayAssign').arrayAssignAST;
var booleanTypeNode = require('./ast/booleanType').booleanTypeAST;
var identifierTypeNode = require('./ast/identifierType').identifierTypeAST;
var intArrayTypeNode = require('./ast/intArrayType').intArrayTypeAST;
var integerTypeNode = require('./ast/integerType').integerTypeAST;
var formalNode = require('./ast/formal').formalAST;
var varDeclNode = require('./ast/varDecl').varDeclAST;
var methodDeclNode = require('./ast/methodDecl').methodDeclAST;
var classDeclNode = require('./ast/classDecl').classDeclAST;
var mainClassNode = require('./ast/mainClass').MainClassAST;
var programNode = require('./ast/program').programAST;


var conVisitor = function() {
    jVisitor.call(this);
    return this;
};

// continue inheriting default visitor
conVisitor.prototype = Object.create(jVisitor.prototype);
conVisitor.prototype.constructor = conVisitor;

// override default visitor behavior
conVisitor.prototype.visitProg = function(ctx) {
    var childNode = utils.filter_undefined(this.visitChildren(ctx));
    var result = new programNode();
    if(Array.isArray(childNode)){
        result.main_class = childNode[0];
        result.classDecl_list = _.slice(childNode, 1);
    }
    else{
        result.main_class = childNode;
    }
    return result;
};

// Visit a parse tree produced by mainClass.
conVisitor.prototype.visitMainClass = function(ctx) {
    var childNode = utils.filter_undefined(this.visitChildren(ctx));
    var result = new mainClassNode();
    result.id1 = ctx.getChild(1).getText();
    result.id2 = ctx.getChild(11).getText();
    result.stat = childNode;
    return result;
};


// Visit a parse tree produced by miniJavaParser#classDeclaration.
conVisitor.prototype.visitClassDeclaration = function(ctx) {
    var childNode = utils.filter_undefined(this.visitChildren(ctx));
    var result = new classDeclNode();
    result.id = ctx.getChild(1).getText();
    if(ctx.getChild(2).getText() === 'extends'){
        result.extend = ctx.getChild(3).getText();
    }
    if(Array.isArray(childNode)){
        var current = 0;
        while(current < childNode.length && childNode[current].CLASS === 'VARDECL'){
            result.varDecl_list.push(childNode[current]);
            current += 1;
        }
        while(current < childNode.length && childNode[current].CLASS === 'METHODDECL'){
            result.methodDecl_list.push(childNode[current]);
            current += 1;
        }
    }
    else if(childNode !== null){
        if(childNode.CLASS === 'VARDECL'){
            result.varDecl_list.push(childNode);
        }
        else if(childNode.CLASS === 'METHODDECL'){
            result.methodDecl_list.push(childNode);
        }
    }
    return result;
};


// Visit a parse tree produced by miniJavaParser#varDeclaration.
conVisitor.prototype.visitVarDeclaration = function(ctx) {
    var childNode = utils.filter_undefined(this.visitChildren(ctx));
    var result = new varDeclNode();
    result.value_type = childNode;
    result.id = ctx.getChild(1).getText();
    return result;
};


// Visit a parse tree produced by miniJavaParser#methodDeclaration.
conVisitor.prototype.visitMethodDeclaration = function(ctx) {
    var childNode = utils.filter_undefined(this.visitChildren(ctx));
    var result = new methodDeclNode();
    result.value_type = childNode[0];
    result.id = ctx.getChild(2).getText();
    var current = 1;
    var current_id = 5;
    while(childNode[current].CLASS === 'TYPE'){
        var formal = new formalNode();
        formal.value_type = childNode[current];
        formal.id = ctx.getChild(current_id).getText();
        result.formal_list.push(formal);
        current_id += 3;
        current += 1;
    }
    while(childNode[current].CLASS === 'VARDECL'){
        result.varDecl_list.push(childNode[current]);
        current += 1;
    }
    while(childNode[current].CLASS === 'STATEMENT'){
        result.stat_list.push(childNode[current]);
        current += 1;
    }
    result.exp = childNode[current];
    return result;
};


// Visit a parse tree produced by miniJavaParser#type.
conVisitor.prototype.visitType = function(ctx) {
    var result;
    if(ctx.getChildCount() === 3){
        result = new intArrayTypeNode();
        return result;
    }
    else if(ctx.getText() === 'boolean'){
        result = new booleanTypeNode();
        return result;
    }
    else if(ctx.getText() === 'int'){
        result = new integerTypeNode();
        return result;
    }
    else if(utils.isID(ctx.getText())){
        result = new identifierTypeNode();
        result.id = ctx.getText();
        return result;
    }
};


// Visit a parse tree produced by miniJavaParser#statement.
conVisitor.prototype.visitStatement = function(ctx) {
    var childNode = utils.filter_undefined(this.visitChildren(ctx));
    var result;
    if(ctx.getChild(0).getText() === '{'){
        result = new blockNode();
        if(childNode !== null && Array.isArray(childNode)) result.exp_list = childNode;
        else if(childNode !== null) result.exp_list.push(childNode);
        return result;
    }
    else if(ctx.getChild(0).getText() === 'if'){
        result = new ifNode();
        result.exp = childNode[0];
        result.stat1 = childNode[1];
        result.stat2 = childNode[2];
        return result;
    }
    else if(ctx.getChild(0).getText() === 'while'){
        result = new whileNode();
        result.exp = childNode[0];
        result.stat = childNode[1];
        return result;
    }
    else if(ctx.getChild(0).getText() === 'System.out.println'){
        result = new printNode();
        result.exp = childNode;
        return result;
    }
    else if(ctx.getChild(1).getText() === '='){
        result = new assignNode();
        result.id = ctx.getChild(0).getText();
        result.exp = childNode;
        return result;
    }
    else if(ctx.getChild(1).getText() === '['){
        result = new arrayAssignNode();
        result.id = ctx.getChild(0).getText();
        result.exp1 = childNode[0];
        result.exp2 = childNode[1];
        return result;
    }
};


// Visit a parse tree produced by miniJavaParser#expression.
conVisitor.prototype.visitExpression = function(ctx) {
    if(ctx.children !== null) var childNode = utils.filter_undefined(this.visitChildren(ctx));
    else childNode = null;
    var result;
    if(Array.isArray(childNode)){
        if(childNode.length >= 2){
            if(ctx.getChild(1).getText() === '['){
                result = new arrayLookupNode();
                result.exp1 = childNode[0];
                result.exp2 = childNode[1];
                return result;
            }
            else if(ctx.getChild(1).getText() === '*'){
                result = new timesNode();
                result.exp1 = childNode[0];
                result.exp2 = childNode[1];
                return result;
            }
            else if(ctx.getChild(1).getText() === '+'){
                result = new plusNode();
                result.exp1 = childNode[0];
                result.exp2 = childNode[1];
                return result;
            }
            else if(ctx.getChild(1).getText() === '-'){
                result = new minusNode();
                result.exp1 = childNode[0];
                result.exp2 = childNode[1];
                return result;
            }
            else if(ctx.getChild(1).getText() === '<'){
                result = new lessThanNode();
                result.exp1 = childNode[0];
                result.exp2 = childNode[1];
                return result;
            }
            else if(ctx.getChild(1).getText() === '&&'){
                result = new andNode();
                result.exp1 = childNode[0];
                result.exp2 = childNode[1];
                return result;
            }
            else if(ctx.getChild(1).getText() === '.' && ctx.getChild(3).getText() === '('){
                result = new callNode();
                result.exp = childNode[0];
                result.id = ctx.getChild(2).getText();
                result.exp_list = _.slice(childNode, 1);
                return result;
            }
        }
    }
    else{
        if(childNode === null){
            if(ctx.getText() === 'false'){
                result = new expValueNode();
                result.value = new falseNode();
                return result;
            }
            else if(ctx.getText() === 'true'){
                result = new expValueNode();
                result.value = new trueNode();
                return result;
            }
            else if(ctx.getText() === 'this'){
                result = new expValueNode();
                result.value = new thisNode();
                return result;
            }
            else if(utils.isID(ctx.getText())){
                result = new expValueNode();
                result.value = new identifierNode();
                result.value.string = ctx.getChild(0).getText();
                return result;
            }
            else if(utils.isNum(ctx.getText())){
                result = new expValueNode();
                result.value = new numberNode();
                result.value.number = ctx.getChild(0).getText();
                return result;
            }
            else if(ctx.getChildCount() === 4){
                result = new newObjectNode();
                result.id = ctx.getChild(1).getText();
                return result;
            }
        }
        else{
            if(ctx.getChildCount() === 3 && ctx.getChild(0).getText() === '(') {
                return childNode;
            }
            else if(ctx.getChildCount() === 3 && ctx.getChild(2).getText() === 'length'){
                result = new arrayLengthNode();
                result.exp = childNode;
                return result;
            }
            else if(ctx.getChildCount() === 2 && ctx.getChild(0).getText() === '!'){
                result = new notNode();
                result.exp = childNode;
                return result;
            }
            else if(ctx.getChildCount() === 5 && ctx.getChild(0).getText() === 'new'){
                result = new newArrayNode();
                result.exp = childNode;
                return result;
            }
            else if(ctx.getChild(1).getText() === '.' && ctx.getChild(3).getText() === '('){
                result = new callNode();
                result.exp = childNode;
                result.id = ctx.getChild(2).getText();
                return result;
            }
        }
    }
};

exports.conVisitor = conVisitor;