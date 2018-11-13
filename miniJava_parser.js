var antlr4 = require('antlr4');
var jLexer = require('./build/miniJavaLexer').miniJavaLexer;
var jParser = require('./build/miniJavaParser').miniJavaParser;
var jListener = require('./build/miniJavaListener').miniJavaListener;
var conVisitor = require('./constructTree').conVisitor;

var parser = function (input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new jLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new jParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.prog();
    var visitor = new conVisitor();
    var AST = visitor.visit(tree);
    return AST.toPrinter();
};

exports.parser = parser;

