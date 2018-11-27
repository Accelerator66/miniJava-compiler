var ErrorListener = require('antlr4').error.ErrorListener;

function miniJavaErrorListener() {
	ErrorListener.call(this);
	return this;
}

miniJavaErrorListener.prototype = Object.create(ErrorListener.prototype);
miniJavaErrorListener.prototype.constructor = miniJavaErrorListener;

miniJavaErrorListener.INSTANCE = new miniJavaErrorListener();

miniJavaErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e){
	// var stack = recognizer.getRuleInvocationStack();
	// console.log(stack);
	var buf = "";
	// buf += "rule stack: " + stack + " ";
	buf += "line " + line + ":" + column + " at " + offendingSymbol + ": " + msg;
	console.error(buf);
};

exports.miniJavaErrorListener = miniJavaErrorListener;