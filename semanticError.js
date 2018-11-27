var jVisitor = require('./build/miniJavaVisitor').miniJavaVisitor;
var SymbolTableList = require('./SymbolTable').SymbolTableList;
var utils = require('./utils');

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
            console.log(className + ' extends unknown class ' + extendClassName);
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
    if(this.isInFunction === true) {
        if(type !== 'int' && type !== 'int[]' && type !== 'boolean'){
            if(this.symbolTable.getSymbol(type) === undefined){
                console.log('Unknown type: ' + type);
            }
        }
        if(this.symbolTable.insertVariable(id, type) === false) {
            console.log('Duplicated declaration variable: ' + id);
        }
    }
    else{
        if(type !== 'int' && type !== 'int[]' && type !== 'boolean'){
            if(this.symbolTable.getSymbol(type) === undefined){
                console.log('Unknown type: ' + type);
            }
        }
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
            console.log('Unknown type ' + returnType + ' of return value in method: ' + methodName);
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
                    console.log('Unknown type ' + paramType + ' of parameter in method: ' + methodName);
                }
            }
            if (this.symbolTable.insertVariable(paramName, paramType) === false) {
                console.log('Duplicated declaration method: ' + paramName);
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
    else if(ctx.getChild(0).getText() === 'if'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChild(0).getText() === 'while'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChild(0).getText() === 'System.out.println'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChild(1).getText() === '='){
        var id = ctx.getChild(0).getText();
        if(this.symbolTable.getSymbol(id) === undefined){
            console.log('Unknown variable: ' + id);
        }
        this.visitChildren(ctx);
    }
    else if(ctx.getChild(1).getText() === '['){
        var arrayId = ctx.getChild(0).getText();
        var array = this.symbolTable.getSymbol(arrayId);
        if(array === undefined){
            console.log('Unknown variable: ' + arrayId);
        }
        else if(array.type !== 'int[]') console.log(arrayId + ' is not an array');
        this.visitChildren(ctx);
    }
};


// Visit a parse tree produced by miniJavaParser#expression.
SemanticVisitor.prototype.visitExpression = function(ctx) {
    if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '['){
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '*'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '+'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '-'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '<'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() >= 2 && ctx.getChild(1).getText() === '&&'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() >= 4 && ctx.getChild(1).getText() === '.' && ctx.getChild(3).getText() === '('){
        var methodId = ctx.getChild(2).getText();
        // var method = this.symbolTable.getSymbol(methodId);
        // if(method === undefined){
        //     console.log('Unknown method: ' + methodId);
        // }
        // else if(method.type !== methodId) console.log(methodId + ' is not an method');
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() === 4 && ctx.getChild(0).getText() === 'new' && ctx.getChild(2).getText() === '('){
        var classId = ctx.getChild(1).getText();
        var classObj = this.symbolTable.getSymbol(classId);
        if(classObj === undefined){
            console.log('Unknown class: ' + classId);
        }
        else if(classObj.type !== 'class') console.log(classId + ' is not an class');
        this.visitChildren(ctx);
    }
    // ( expression )
    else if(ctx.getChildCount() === 3 && ctx.getChild(0).getText() === '(') {
        this.visitChildren(ctx);
    }
    // expression.length
    else if(ctx.getChildCount() === 3 && ctx.getChild(2).getText() === 'length'){
        this.visitChildren(ctx);
    }
    // ! expression
    else if(ctx.getChildCount() === 2 && ctx.getChild(0).getText() === '!'){
        this.visitChildren(ctx);
    }
    // new int [ expression ]
    else if(ctx.getChildCount() === 5 && ctx.getChild(0).getText() === 'new'){
        this.visitChildren(ctx);
    }
    // Identifier
    else if(utils.isID(ctx.getText())){
        var id = ctx.getChild(0).getText();
        var type = this.symbolTable.getSymbol(id);
        if(type === undefined){
            console.log('Unknown identifier: ' + id);
        }
    }
};

exports.SemanticVisitor = SemanticVisitor;