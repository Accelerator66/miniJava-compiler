// Generated from grammar\miniJava.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by miniJavaParser.
function miniJavaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

miniJavaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
miniJavaListener.prototype.constructor = miniJavaListener;

// Enter a parse tree produced by miniJavaParser#prog.
miniJavaListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#prog.
miniJavaListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by miniJavaParser#mainClass.
miniJavaListener.prototype.enterMainClass = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#mainClass.
miniJavaListener.prototype.exitMainClass = function(ctx) {
};


// Enter a parse tree produced by miniJavaParser#classDeclaration.
miniJavaListener.prototype.enterClassDeclaration = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#classDeclaration.
miniJavaListener.prototype.exitClassDeclaration = function(ctx) {
};


// Enter a parse tree produced by miniJavaParser#varDeclaration.
miniJavaListener.prototype.enterVarDeclaration = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#varDeclaration.
miniJavaListener.prototype.exitVarDeclaration = function(ctx) {
};


// Enter a parse tree produced by miniJavaParser#methodDeclaration.
miniJavaListener.prototype.enterMethodDeclaration = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#methodDeclaration.
miniJavaListener.prototype.exitMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by miniJavaParser#type.
miniJavaListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#type.
miniJavaListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by miniJavaParser#statement.
miniJavaListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#statement.
miniJavaListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by miniJavaParser#expression.
miniJavaListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#expression.
miniJavaListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by miniJavaParser#expression_.
miniJavaListener.prototype.enterExpression_ = function(ctx) {
};

// Exit a parse tree produced by miniJavaParser#expression_.
miniJavaListener.prototype.exitExpression_ = function(ctx) {
};



exports.miniJavaListener = miniJavaListener;