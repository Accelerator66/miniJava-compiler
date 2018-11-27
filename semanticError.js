var jVisitor = require('./build/miniJavaVisitor').miniJavaVisitor;
var SymbolTableList = require('./SymbolTable').SymbolTableList;
var utils = require('./utils');

var SemanticVisitor = function() {
    jVisitor.call(this);
    this.symbolTable = new SymbolTableList();
    return this;
};

// continue inheriting default visitor
SemanticVisitor.prototype = Object.create(jVisitor.prototype);
SemanticVisitor.prototype.constructor = SemanticVisitor;

// override default visitor behavior
SemanticVisitor.prototype.visitProg = function(ctx) {
    this.symbolTable.addTable();
    this.visitChildren(ctx);
    this.symbolTable.removeTable();
};

// Visit a parse tree produced by mainClass.
SemanticVisitor.prototype.visitMainClass = function(ctx) {
    var className = ctx.getChild(1).getText();
    this.symbolTable.insertSymbol(className, className);
    this.symbolTable.addTable();
    var stringName = ctx.getChild(11).getText();
    this.symbolTable.insertSymbol(stringName, 'String[]');
    this.visitChildren(ctx);
    this.symbolTable.removeTable();
};


// Visit a parse tree produced by miniJavaParser#classDeclaration.
SemanticVisitor.prototype.visitClassDeclaration = function(ctx) {
    var className = ctx.getChild(1).getText();
    if(this.symbolTable.insertSymbol(className, className) === false){
        console.log('Duplicated class declaration: ' + className);
    }
    if(ctx.getChild(2).getText() === 'extends'){
        var extendClassName = ctx.getChild(3).getText();
        if(this.symbolTable.getSymbolType(extendClassName) === undefined){
            console.log(className + ' extends unknown class ' + extendClassName);
        }
    }
    this.symbolTable.addTable();
    this.visitChildren(ctx);
    this.symbolTable.removeTable();
};


// Visit a parse tree produced by miniJavaParser#varDeclaration.
SemanticVisitor.prototype.visitVarDeclaration = function(ctx) {
    var type = ctx.getChild(0).getText().replace(' ', '');
    var id = ctx.getChild(1).getText();
    if(this.symbolTable.insertSymbol(id, type) === false){
        console.log('Duplicated declaration variable: ' + id);
    }
    this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#methodDeclaration.
SemanticVisitor.prototype.visitMethodDeclaration = function(ctx) {
    var methodName = ctx.getChild(2).getText();
    if(this.symbolTable.insertSymbol(methodName, methodName) === false){
        console.log('Duplicated declaration method: ' + methodName);
    }
    this.symbolTable.addTable();
    var paramName;
    var paramType;
    for(var i=3; i<ctx.getChildCount(); i++) {
        if(ctx.getChild(i-1).constructor.name === 'TypeContext') {
            paramName = ctx.getChild(i).getText();
            paramType = ctx.getChild(i-1).getText().replace(' ','');
            if (this.symbolTable.insertSymbol(paramName, paramType) === false) {
                console.log('Duplicated declaration method: ' + paramName);
            }
        }
    }
    this.visitChildren(ctx);
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
        if(this.symbolTable.getSymbolType(id) === undefined){
            console.log('Unknown variable: ' + id);
        }
        this.visitChildren(ctx);
    }
    else if(ctx.getChild(1).getText() === '['){
        var arrayId = ctx.getChild(0).getText();
        var arrayType = this.symbolTable.getSymbolType(arrayId);
        if(arrayType === undefined){
            console.log('Unknown variable: ' + arrayId);
        }
        else if(arrayType !== 'int[]') console.log(arrayId + ' is not an array');
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
        var methodType = this.symbolTable.getSymbolType(methodId);
        if(methodType === undefined){
            console.log('Unknown method: ' + methodId);
        }
        else if(methodType !== methodId) console.log(methodId + ' is not an method');
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() === 4 && ctx.getChild(0).getText() === 'new' && ctx.getChild(2).getText() === '('){
        var classId = ctx.getChild(1).getText();
        var classType = this.symbolTable.getSymbolType(classId);
        if(classType === undefined){
            console.log('Unknown class: ' + classId);
        }
        else if(classType !== classId) console.log(classId + ' is not an class');
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() === 3 && ctx.getChild(0).getText() === '(') {
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() === 3 && ctx.getChild(2).getText() === 'length'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() === 2 && ctx.getChild(0).getText() === '!'){
        this.visitChildren(ctx);
    }
    else if(ctx.getChildCount() === 5 && ctx.getChild(0).getText() === 'new'){
        this.visitChildren(ctx);
    }
    else if(utils.isID(ctx.getText())){
        var id = ctx.getChild(0).getText();
        var type = this.symbolTable.getSymbolType(id);
        if(type === undefined){
            console.log('Unknown variable: ' + id);
        }
    }
};

exports.SemanticVisitor = SemanticVisitor;