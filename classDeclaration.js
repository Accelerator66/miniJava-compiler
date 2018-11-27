var jVisitor = require('./build/miniJavaVisitor').miniJavaVisitor;
var SymbolTableList = require('./SymbolTable').SymbolTableList;
var utils = require('./utils');

var DeclarationVisitor = function() {
    jVisitor.call(this);
    this.symbolTable = new SymbolTableList();
    this.currentClass = null;
    this.isInFunction = false;
    return this;
};

// continue inheriting default visitor
DeclarationVisitor.prototype = Object.create(jVisitor.prototype);
DeclarationVisitor.prototype.constructor = DeclarationVisitor;

// override default visitor behavior
DeclarationVisitor.prototype.visitProg = function(ctx) {
    this.symbolTable.addTable();
    this.visitChildren(ctx);
};

// Visit a parse tree produced by mainClass.
DeclarationVisitor.prototype.visitMainClass = function(ctx) {
    var className = ctx.getChild(1).getText();
    this.symbolTable.addClass(className);
    this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#classDeclaration.
DeclarationVisitor.prototype.visitClassDeclaration = function(ctx) {
    var className = ctx.getChild(1).getText();
    if(this.symbolTable.addClass(className) === false){
        console.log('Duplicated class declaration: ' + className);
    }
    this.currentClass = className;
    this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#varDeclaration.
DeclarationVisitor.prototype.visitVarDeclaration = function(ctx) {
    if(!this.isInFunction){
        var type = ctx.getChild(0).getText().replace(' ', '');
        var id = ctx.getChild(1).getText();
        if(this.symbolTable.addVariableToClass(id, type, this.currentClass) === false){
            console.log('Duplicated declaration variable: ' + id);
        }
    }
    this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#methodDeclaration.
DeclarationVisitor.prototype.visitMethodDeclaration = function(ctx) {
    var r = ctx.getChild(1).getText().replace(' ', '');
    var methodName = ctx.getChild(2).getText();
    var params = [];
    var paramType;
    for(var i=3; i<ctx.getChildCount(); i++) {
        if(ctx.getChild(i).constructor.name === 'TypeContext') {
            paramType = ctx.getChild(i).getText().replace(' ','');
            params.push(paramType);
        }
    }
    if(this.symbolTable.addMethodToClass(methodName, this.currentClass, r, params) === false){
        console.log('Duplicated declaration method: ' + methodName);
    }
    this.isInFunction = true;
    this.visitChildren(ctx);
    this.isInFunction = false;
};


// Visit a parse tree produced by miniJavaParser#type.
DeclarationVisitor.prototype.visitType = function(ctx) {
};


// Visit a parse tree produced by miniJavaParser#statement.
DeclarationVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by miniJavaParser#expression.
DeclarationVisitor.prototype.visitExpression = function(ctx) {
};

exports.DeclarationVisitor = DeclarationVisitor;