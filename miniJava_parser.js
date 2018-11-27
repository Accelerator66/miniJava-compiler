var antlr4 = require('antlr4');
var jLexer = require('./build/miniJavaLexer').miniJavaLexer;
var jParser = require('./build/miniJavaParser').miniJavaParser;
var jListener = require('./build/miniJavaListener').miniJavaListener;
var conVisitor = require('./constructTree').conVisitor;
var miniJavaErrorListener = require('./miniJavaErrorListener').miniJavaErrorListener;
var SemanticVisitor = require('./semanticError').SemanticVisitor;
var fs = require('fs');

var parser = function (input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new jLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new jParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(new miniJavaErrorListener());
    var tree = parser.prog();
    var semVisitor = new SemanticVisitor();
    semVisitor.visit(tree);
    // var visitor = new conVisitor();
    // var AST = visitor.visit(tree);
    // return AST.toPrinter();
};

// var test = 'class BinarySearch { public static void main(String[] a){ test = (5 + 9) * 23 - 5 + 3 * 12; }}';
var test = fs.readFileSync('./testcase/mytest.java', 'utf8');
parser(test);

exports.parser = parser;

