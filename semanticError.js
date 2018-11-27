var jVisitor = require('./build/miniJavaVisitor').miniJavaVisitor;
var SymbolTableList = require('./SymbolTable').SymbolTableList;
var utils = require('./utils');
var _ = require('lodash');

var SemanticVisitor = function(symbols) {
    jVisitor.call(this);
    if(symbols === undefined) this.symbolTable = new SymbolTableList();
    else this.symbolTable = symbols;
    this.currentThis = null;
    this.isInFunction = false;
    return this;
};

// continue inheriting default visitor
SemanticVisitor.prototype = Object.create(jVisitor.prototype);
SemanticVisitor.prototype.constructor = SemanticVisitor;

// override default visitor behavior
SemanticVisitor.prototype.visitProg = function(ctx) {
    this.visitChildren(ctx);
    this.symbolTable.removeTable();
};

// Visit a parse tree produced by mainClass.
SemanticVisitor.prototype.visitMainClass = function(ctx) {
    this.symbolTable.addTable();
    this.currentThis = ctx.getChild(1).getText();
    var stringName = ctx.getChild(11).getText();
    this.symbolTable.insertVariable(stringName, 'String[]');
    this.visitChildren(ctx);
    this.currentThis = null;
    this.symbolTable.removeTable();
};


// Visit a parse tree produced by miniJavaParser#classDeclaration.
SemanticVisitor.prototype.visitClassDeclaration = function(ctx) {
    var className = ctx.getChild(1).getText();
    if(ctx.getChild(2).getText() === 'extends'){
        var extendClassName = ctx.getChild(3).getText();
        if(this.symbolTable.getSymbol(extendClassName) === undefined){
            var position = ctx.start.line;
            var message = className + ' extends unknown class ' + extendClassName;
            utils.semanticErrorPrinter(position, message);
        }
    }
    this.symbolTable.addTable();
    this.currentThis = className;
    this.visitChildren(ctx);
    this.currentThis = null;
    this.symbolTable.removeTable();
};


// Visit a parse tree produced by miniJavaParser#varDeclaration.
SemanticVisitor.prototype.visitVarDeclaration = function(ctx) {
    var type = ctx.getChild(0).getText().replace(' ', '');
    var id = ctx.getChild(1).getText();
    if(type !== 'int' && type !== 'int[]' && type !== 'boolean'){
        if(this.symbolTable.getSymbol(type) === undefined){
            var position = ctx.start.line;
            var message = 'Unknown type: ' + type;
            utils.semanticErrorPrinter(position, message);
        }
    }
    if(this.symbolTable.insertVariable(id, type) === false) {
        var position = ctx.start.line;
        var message = 'Duplicated declaration variable: ' + id;
        utils.semanticErrorPrinter(position, message);
    }
    this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#methodDeclaration.
SemanticVisitor.prototype.visitMethodDeclaration = function(ctx) {
    var methodName = ctx.getChild(2).getText();
    var returnType = ctx.getChild(1).getText().replace(' ', '');
    // check undefined return value
    if(returnType !== 'int' && returnType !== 'int[]' && returnType !== 'boolean'){
        if(this.symbolTable.getSymbol(returnType) === undefined){
            var position = ctx.start.line;
            var message = 'Unknown type ' + returnType + ' of return value in method: ' + methodName;
            utils.semanticErrorPrinter(position, message);
        }
    }
    this.symbolTable.addTable();
    var paramName;
    var paramType;
    for(var i=3; i<ctx.getChildCount(); i++) {
        if(ctx.getChild(i-1).constructor.name === 'TypeContext') {
            paramName = ctx.getChild(i).getText();
            paramType = ctx.getChild(i-1).getText().replace(' ','');
            // check undefined parameter type
            if(paramType !== 'int' && paramType !== 'int[]' && paramType !== 'boolean'){
                if(this.symbolTable.getSymbol(paramType) === undefined){
                    var position = ctx.start.line;
                    var message = 'Unknown type ' + paramType + ' of parameter in method: ' + methodName;
                    utils.semanticErrorPrinter(position, message);
                }
            }
            if (this.symbolTable.insertVariable(paramName, paramType) === false) {
                var position = ctx.start.line;
                var message = 'Duplicated parameter ' + paramName + ' in method ' + methodName;
                utils.semanticErrorPrinter(position, message);
            }
        }
    }
    this.isInFunction = true;
    this.visitChildren(ctx);
    this.isInFunction = false;
    this.symbolTable.removeTable();
};


// Visit a parse tree produced by miniJavaParser#type.
SemanticVisitor.prototype.visitType = function(ctx) {
};


// Visit a parse tree produced by miniJavaParser#statement.
SemanticVisitor.prototype.visitStatement = function(ctx) {
    if(ctx.getChild(0).getText() === '{'){
        this.symbolTable.addTable();
        this.visitChildren(ctx);
        this.symbolTable.removeTable();
    }
    // if ( expression ) statement else statement
    else if(ctx.getChild(0).getText() === 'if'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types !== 'boolean'){
            var position = ctx.start.line;
            var message = 'Condition sentence should be boolean type';
            utils.semanticErrorPrinter(position, message);
        }
    }
    // while ( expression ) statement
    else if(ctx.getChild(0).getText() === 'while'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types !== 'boolean'){
            var position = ctx.start.line;
            var message = 'Condition sentence should be boolean type';
            utils.semanticErrorPrinter(position, message);
        }
    }
    else if(ctx.getChild(0).getText() === 'System.out.println'){
        this.visitChildren(ctx);
    }
    // Identifier = expression ;
    else if(ctx.getChild(1).getText() === '='){
        var id = ctx.getChild(0).getText();
        var obj = this.symbolTable.getSymbol(id);
        if(obj === undefined){
            var position = ctx.start.line;
            var message = 'Unknown variable: ' + id;
            utils.semanticErrorPrinter(position, message);
        }
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(obj !== undefined && obj.type !== types){
            var position = ctx.start.line;
            var message = 'Different types in assign operator';
            utils.semanticErrorPrinter(position, message);
        }
    }
    // Identifier [ expression ] = expression ;
    else if(ctx.getChild(1).getText() === '['){
        var arrayId = ctx.getChild(0).getText();
        var array = this.symbolTable.getSymbol(arrayId);
        if(array === undefined){
            var position = ctx.start.line;
            var message = 'Unknown variable: ' + arrayId;
            utils.semanticErrorPrinter(position, message);
        }
        else if(array.type !== 'int[]'){
            var position = ctx.start.line;
            var message = arrayId + ' is not an array';
            utils.semanticErrorPrinter(position, message);
        }
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types[0] !== 'int'){
            var position = ctx.start.line;
            var message = 'Index should be type int';
            utils.semanticErrorPrinter(position, message);
        }
        if(types[1] !== 'int'){
            var position = ctx.start.line;
            var message = 'Different types in assign operator';
            utils.semanticErrorPrinter(position, message);
        }
    }
};


// Visit a parse tree produced by miniJavaParser#expression.
SemanticVisitor.prototype.visitExpression = function(ctx) {
    // expression [ expression ]
    if(ctx.getChildCount() === 4 && ctx.getChild(1).getText() === '['){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types[0] !== 'int[]'){
            var position = ctx.start.line;
            var message = 'Only type int[] can be indexed';
            utils.semanticErrorPrinter(position, message);
        }
        if(types[1] !== 'int'){
            var position = ctx.start.line;
            var message = 'Index should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        return 'int';
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '*'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types[0] !== 'int'){
            var position = ctx.start.line;
            var message = 'Param1 in * should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        if(types[1] !== 'int'){
            var position = ctx.start.line;
            var message = 'Param2 in * should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        return 'int';
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '+'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types[0] !== 'int'){
            var position = ctx.start.line;
            var message = 'Param1 in + should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        if(types[1] !== 'int'){
            var position = ctx.start.line;
            var message = 'Param2 in + should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        return 'int';
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '-'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types[0] !== 'int'){
            var position = ctx.start.line;
            var message = 'Param1 in - should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        if(types[1] !== 'int'){
            var position = ctx.start.line;
            var message = 'Param2 in - should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        return 'int';
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '<'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types[0] !== 'int'){
            var position = ctx.start.line;
            var message = 'Param1 in < should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        if(types[1] !== 'int'){
            var position = ctx.start.line;
            var message = 'Param2 in < should be int type';
            utils.semanticErrorPrinter(position, message);
        }
        return 'boolean';
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '&&'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types[0] !== 'boolean'){
            var position = ctx.start.line;
            var message = 'Param1 in && should be boolean type';
            utils.semanticErrorPrinter(position, message);
        }
        if(types[1] !== 'boolean'){
            var position = ctx.start.line;
            var message = 'Param2 in && should be boolean type';
            utils.semanticErrorPrinter(position, message);
        }
        return 'boolean';
    }
    // expression.identifier(...)
    else if(ctx.getChildCount() >= 4 && ctx.getChild(1).getText() === '.' && ctx.getChild(3).getText() === '('){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(!Array.isArray(types)) types = [types];
        if(types[0] === 'int' || types[0] === 'int[]' || types[0] === 'boolean'){
            var position = ctx.start.line;
            var message = '. operator can only be used to class type';
            utils.semanticErrorPrinter(position, message);
        }
        var classObj = this.symbolTable.getSymbol(types[0]);
        var methodId = ctx.getChild(2).getText();
        if(classObj === undefined){
            var position = ctx.start.line;
            var message = 'Unknown class ' + types[0];
            utils.semanticErrorPrinter(position, message);
        }
        else{
            var ind = _.findIndex(classObj.methods, function(o) { return o.name === methodId; });
            if(ind === -1){
                var position = ctx.start.line;
                var message = 'Class ' + classObj.name + ' has no method ' + methodId;
                utils.semanticErrorPrinter(position, message);
            }
            else{
                var methodObj = classObj.methods[ind];
                if(_.isEqual(methodObj.params, types.slice(1, types.length))){
                    return methodObj.returnType;
                }
                else{
                    var position = ctx.start.line;
                    var message = 'Parameters of method ' + methodId + ' is wrong';
                    utils.semanticErrorPrinter(position, message);
                }
            }
        }
        return 'err';
    }
    // new identifier ()
    else if(ctx.getChildCount() === 4 && ctx.getChild(0).getText() === 'new' && ctx.getChild(2).getText() === '('){
        var classId = ctx.getChild(1).getText();
        var classObj = this.symbolTable.getSymbol(classId);
        if(classObj === undefined){
            var position = ctx.start.line;
            var message = 'Unknown class: ' + classId;
            utils.semanticErrorPrinter(position, message);
        }
        else if(classObj.type !== 'class'){
            var position = ctx.start.line;
            var message = classId + ' is not an class';
            utils.semanticErrorPrinter(position, message);
        }
        this.visitChildren(ctx);
        return classId;
    }
    // ( expression )
    else if(ctx.getChildCount() === 3 && ctx.getChild(0).getText() === '(') {
        var types = utils.filter_undefined(this.visitChildren(ctx));
        return types;
    }
    // expression.length
    else if(ctx.getChildCount() === 3 && ctx.getChild(2).getText() === 'length'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types !== 'int[]'){
            var position = ctx.start.line;
            var message = 'Only type int[] has length';
            utils.semanticErrorPrinter(position, message);
        }
        return 'int';
    }
    // ! expression
    else if(ctx.getChildCount() === 2 && ctx.getChild(0).getText() === '!'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types !== 'boolean'){
            var position = ctx.start.line;
            var message = '! operator can only followed by boolean type';
            utils.semanticErrorPrinter(position, message);
        }
        return 'boolean';
    }
    // new int [ expression ]
    else if(ctx.getChildCount() === 5 && ctx.getChild(0).getText() === 'new'){
        var types = utils.filter_undefined(this.visitChildren(ctx));
        if(types !== 'int'){
            var position = ctx.start.line;
            var message = 'Array length can only be int type';
            utils.semanticErrorPrinter(position, message);
        }
        return 'int[]';
    }
    // boolean
    else if(ctx.getText() === 'false' || ctx.getText() === 'true'){
        return 'boolean';
    }
    // this
    else if(ctx.getText() === 'this'){
        return this.currentThis;
    }
    // Identifier
    else if(utils.isID(ctx.getText())){
        var id = ctx.getChild(0).getText();
        var obj = this.symbolTable.getSymbol(id);
        if(obj === undefined){
            var position = ctx.start.line;
            var message = 'Unknown identifier: ' + id;
            utils.semanticErrorPrinter(position, message);
        }
        else{
            if(obj.type === 'class') return id;
            else return obj.type;
        }
        return id;
    }
    // number
    else if(utils.isNum(ctx.getText())){
        return 'int';
    }
};

exports.SemanticVisitor = SemanticVisitor;