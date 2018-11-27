// Generated from C:/SHIFAN/大学/编译原理/miniJava-compiler/grammar\miniJava.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by miniJavaParser.

function miniJavaVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

miniJavaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
miniJavaVisitor.prototype.constructor = miniJavaVisitor;

// Visit a parse tree produced by miniJavaParser#prog.
miniJavaVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#mainClass.
miniJavaVisitor.prototype.visitMainClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#classDeclaration.
miniJavaVisitor.prototype.visitClassDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#varDeclaration.
miniJavaVisitor.prototype.visitVarDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#methodDeclaration.
miniJavaVisitor.prototype.visitMethodDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#type.
miniJavaVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#statement.
miniJavaVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniJavaParser#expression.
miniJavaVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};



exports.miniJavaVisitor = miniJavaVisitor;