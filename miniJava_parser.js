var antlr4 = require('antlr4');
var jLexer = require('./build/miniJavaLexer').miniJavaLexer;
var jParser = require('./build/miniJavaParser').miniJavaParser;
var jListener = require('./build/miniJavaListener').miniJavaListener;

var input = "class BinarySearch { public static void main(String[] a){ test = 1; }}";
var chars = new antlr4.InputStream(input);
var lexer = new jLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new jParser(tokens);
parser.buildParseTrees = true;

var KeyPrinter = function() {
    jListener.call(this);
    return this;
};

// continue inheriting default listener
KeyPrinter.prototype = Object.create(jListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

// override default listener behavior
KeyPrinter.prototype.exitProg = function(ctx) {
    console.log(ctx.getText());
    console.log(ctx.getChild(0));
    console.log("Oh, a key!");
};

var tree = parser.prog();
var printer = new KeyPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);