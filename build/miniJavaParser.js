// Generated from grammar/miniJava.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var miniJavaListener = require('./miniJavaListener').miniJavaListener;
var grammarFileName = "miniJava.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003(\u00e0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0007\u0002\u0015\n\u0002",
    "\f\u0002\u000e\u0002\u0018\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u00040\n\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u00044\n\u0004\f\u0004\u000e\u00047\u000b\u0004\u0003\u0004\u0007\u0004",
    ":\n\u0004\f\u0004\u000e\u0004=\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006N\n\u0006\f\u0006\u000e\u0006Q\u000b\u0006\u0005\u0006",
    "S\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006X\n\u0006\f",
    "\u0006\u000e\u0006[\u000b\u0006\u0003\u0006\u0007\u0006^\n\u0006\f\u0006",
    "\u000e\u0006a\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0007\u0007j\n\u0007\f\u0007",
    "\u000e\u0007m\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u0091\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b\u00b2\n\b\u0003\t\u0003\t\u0007\t\u00b6\n\t\f\t\u000e\t\u00b9\u000b",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00bf\n\t\f\t\u000e\t\u00c2",
    "\u000b\t\u0003\t\u0003\t\u0007\t\u00c6\n\t\f\t\u000e\t\u00c9\u000b\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00d1\n\t\f",
    "\t\u000e\t\u00d4\u000b\t\u0005\t\u00d6\n\t\u0003\t\u0007\t\u00d9\n\t",
    "\f\t\u000e\t\u00dc\u000b\t\u0005\t\u00de\n\t\u0003\t\u0002\u0002\n\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0002\u0003\u0003\u0002\u001e\"\u0002",
    "\u00f6\u0002\u0012\u0003\u0002\u0002\u0002\u0004\u0019\u0003\u0002\u0002",
    "\u0002\u0006+\u0003\u0002\u0002\u0002\b@\u0003\u0002\u0002\u0002\nD",
    "\u0003\u0002\u0002\u0002\f\u0090\u0003\u0002\u0002\u0002\u000e\u00b1",
    "\u0003\u0002\u0002\u0002\u0010\u00dd\u0003\u0002\u0002\u0002\u0012\u0016",
    "\u0005\u0004\u0003\u0002\u0013\u0015\u0005\u0006\u0004\u0002\u0014\u0013",
    "\u0003\u0002\u0002\u0002\u0015\u0018\u0003\u0002\u0002\u0002\u0016\u0014",
    "\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0003",
    "\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0007\u0003\u0002\u0002\u001a\u001b\u0007\'\u0002\u0002\u001b\u001c",
    "\u0007\u0004\u0002\u0002\u001c\u001d\u0007\u0005\u0002\u0002\u001d\u001e",
    "\u0007\u0006\u0002\u0002\u001e\u001f\u0007\u0007\u0002\u0002\u001f ",
    "\u0007\b\u0002\u0002 !\u0007\t\u0002\u0002!\"\u0007\n\u0002\u0002\"",
    "#\u0007\u000b\u0002\u0002#$\u0007\f\u0002\u0002$%\u0007\'\u0002\u0002",
    "%&\u0007\r\u0002\u0002&\'\u0007\u0004\u0002\u0002\'(\u0005\f\u0007\u0002",
    "()\u0007\u000e\u0002\u0002)*\u0007\u000e\u0002\u0002*\u0005\u0003\u0002",
    "\u0002\u0002+,\u0007\u0003\u0002\u0002,/\u0007\'\u0002\u0002-.\u0007",
    "\u000f\u0002\u0002.0\u0007\'\u0002\u0002/-\u0003\u0002\u0002\u0002/",
    "0\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u000215\u0007\u0004\u0002",
    "\u000224\u0005\b\u0005\u000232\u0003\u0002\u0002\u000247\u0003\u0002",
    "\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026;\u0003",
    "\u0002\u0002\u000275\u0003\u0002\u0002\u00028:\u0005\n\u0006\u00029",
    "8\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<>\u0003\u0002\u0002\u0002=;\u0003\u0002",
    "\u0002\u0002>?\u0007\u000e\u0002\u0002?\u0007\u0003\u0002\u0002\u0002",
    "@A\u0007%\u0002\u0002AB\u0007\'\u0002\u0002BC\u0007\u0010\u0002\u0002",
    "C\t\u0003\u0002\u0002\u0002DE\u0007\u0005\u0002\u0002EF\u0007%\u0002",
    "\u0002FG\u0007\'\u0002\u0002GR\u0007\t\u0002\u0002HI\u0007%\u0002\u0002",
    "IO\u0007\'\u0002\u0002JK\u0007\u0011\u0002\u0002KL\u0007%\u0002\u0002",
    "LN\u0007\'\u0002\u0002MJ\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002",
    "\u0002OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PS\u0003\u0002",
    "\u0002\u0002QO\u0003\u0002\u0002\u0002RH\u0003\u0002\u0002\u0002RS\u0003",
    "\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0007\r\u0002\u0002U",
    "Y\u0007\u0004\u0002\u0002VX\u0005\b\u0005\u0002WV\u0003\u0002\u0002",
    "\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002Z_\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\^",
    "\u0005\f\u0007\u0002]\\\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002",
    "\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002",
    "\u0002\u0002a_\u0003\u0002\u0002\u0002bc\u0007\u0012\u0002\u0002cd\u0005",
    "\u000e\b\u0002de\u0007\u0010\u0002\u0002ef\u0007\u000e\u0002\u0002f",
    "\u000b\u0003\u0002\u0002\u0002gk\u0007\u0004\u0002\u0002hj\u0005\f\u0007",
    "\u0002ih\u0003\u0002\u0002\u0002jm\u0003\u0002\u0002\u0002ki\u0003\u0002",
    "\u0002\u0002kl\u0003\u0002\u0002\u0002ln\u0003\u0002\u0002\u0002mk\u0003",
    "\u0002\u0002\u0002n\u0091\u0007\u000e\u0002\u0002op\u0007\u0013\u0002",
    "\u0002pq\u0007\t\u0002\u0002qr\u0005\u000e\b\u0002rs\u0007\r\u0002\u0002",
    "st\u0005\f\u0007\u0002tu\u0007\u0014\u0002\u0002uv\u0005\f\u0007\u0002",
    "v\u0091\u0003\u0002\u0002\u0002wx\u0007\u0015\u0002\u0002xy\u0007\t",
    "\u0002\u0002yz\u0005\u000e\b\u0002z{\u0007\r\u0002\u0002{|\u0005\f\u0007",
    "\u0002|\u0091\u0003\u0002\u0002\u0002}~\u0007\u0016\u0002\u0002~\u007f",
    "\u0007\t\u0002\u0002\u007f\u0080\u0005\u000e\b\u0002\u0080\u0081\u0007",
    "\r\u0002\u0002\u0081\u0082\u0007\u0010\u0002\u0002\u0082\u0091\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0007\'\u0002\u0002\u0084\u0085\u0007",
    "\u0017\u0002\u0002\u0085\u0086\u0005\u000e\b\u0002\u0086\u0087\u0007",
    "\u0010\u0002\u0002\u0087\u0091\u0003\u0002\u0002\u0002\u0088\u0089\u0007",
    "\'\u0002\u0002\u0089\u008a\u0007\u000b\u0002\u0002\u008a\u008b\u0005",
    "\u000e\b\u0002\u008b\u008c\u0007\f\u0002\u0002\u008c\u008d\u0007\u0017",
    "\u0002\u0002\u008d\u008e\u0005\u000e\b\u0002\u008e\u008f\u0007\u0010",
    "\u0002\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090g\u0003\u0002",
    "\u0002\u0002\u0090o\u0003\u0002\u0002\u0002\u0090w\u0003\u0002\u0002",
    "\u0002\u0090}\u0003\u0002\u0002\u0002\u0090\u0083\u0003\u0002\u0002",
    "\u0002\u0090\u0088\u0003\u0002\u0002\u0002\u0091\r\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0007&\u0002\u0002\u0093\u00b2\u0005\u0010\t\u0002",
    "\u0094\u0095\u0007\u0018\u0002\u0002\u0095\u00b2\u0005\u0010\t\u0002",
    "\u0096\u0097\u0007\u0019\u0002\u0002\u0097\u00b2\u0005\u0010\t\u0002",
    "\u0098\u0099\u0007\'\u0002\u0002\u0099\u00b2\u0005\u0010\t\u0002\u009a",
    "\u009b\u0007\u001a\u0002\u0002\u009b\u00b2\u0005\u0010\t\u0002\u009c",
    "\u009d\u0007\u001b\u0002\u0002\u009d\u009e\u0007\u001c\u0002\u0002\u009e",
    "\u009f\u0007\u000b\u0002\u0002\u009f\u00a0\u0005\u000e\b\u0002\u00a0",
    "\u00a1\u0007\f\u0002\u0002\u00a1\u00a2\u0005\u0010\t\u0002\u00a2\u00b2",
    "\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u001b\u0002\u0002\u00a4\u00a5",
    "\u0007\'\u0002\u0002\u00a5\u00a6\u0007\t\u0002\u0002\u00a6\u00a7\u0007",
    "\r\u0002\u0002\u00a7\u00b2\u0005\u0010\t\u0002\u00a8\u00a9\u0007\u001d",
    "\u0002\u0002\u00a9\u00aa\u0005\u000e\b\u0002\u00aa\u00ab\u0005\u0010",
    "\t\u0002\u00ab\u00b2\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\t\u0002",
    "\u0002\u00ad\u00ae\u0005\u000e\b\u0002\u00ae\u00af\u0007\r\u0002\u0002",
    "\u00af\u00b0\u0005\u0010\t\u0002\u00b0\u00b2\u0003\u0002\u0002\u0002",
    "\u00b1\u0092\u0003\u0002\u0002\u0002\u00b1\u0094\u0003\u0002\u0002\u0002",
    "\u00b1\u0096\u0003\u0002\u0002\u0002\u00b1\u0098\u0003\u0002\u0002\u0002",
    "\u00b1\u009a\u0003\u0002\u0002\u0002\u00b1\u009c\u0003\u0002\u0002\u0002",
    "\u00b1\u00a3\u0003\u0002\u0002\u0002\u00b1\u00a8\u0003\u0002\u0002\u0002",
    "\u00b1\u00ac\u0003\u0002\u0002\u0002\u00b2\u000f\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\t\u0002\u0002\u0002\u00b4\u00b6\u0005\u000e\b\u0002\u00b5",
    "\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7",
    "\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8",
    "\u00de\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba",
    "\u00bb\u0007\u000b\u0002\u0002\u00bb\u00bc\u0005\u000e\b\u0002\u00bc",
    "\u00bd\u0007\f\u0002\u0002\u00bd\u00bf\u0003\u0002\u0002\u0002\u00be",
    "\u00ba\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003\u0002\u0002\u0002\u00c0",
    "\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1",
    "\u00de\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3",
    "\u00c4\u0007#\u0002\u0002\u00c4\u00c6\u0007$\u0002\u0002\u00c5\u00c3",
    "\u0003\u0002\u0002\u0002\u00c6\u00c9\u0003\u0002\u0002\u0002\u00c7\u00c5",
    "\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00de",
    "\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0007#\u0002\u0002\u00cb\u00cc\u0007\'\u0002\u0002\u00cc\u00d5\u0007",
    "\t\u0002\u0002\u00cd\u00d2\u0005\u000e\b\u0002\u00ce\u00cf\u0007\u0011",
    "\u0002\u0002\u00cf\u00d1\u0005\u000e\b\u0002\u00d0\u00ce\u0003\u0002",
    "\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002",
    "\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002",
    "\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d5\u00cd\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002",
    "\u0002\u0002\u00d7\u00d9\u0007\r\u0002\u0002\u00d8\u00ca\u0003\u0002",
    "\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00de\u0003\u0002",
    "\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd\u00b7\u0003\u0002",
    "\u0002\u0002\u00dd\u00c0\u0003\u0002\u0002\u0002\u00dd\u00c7\u0003\u0002",
    "\u0002\u0002\u00dd\u00da\u0003\u0002\u0002\u0002\u00de\u0011\u0003\u0002",
    "\u0002\u0002\u0014\u0016/5;ORY_k\u0090\u00b1\u00b7\u00c0\u00c7\u00d2",
    "\u00d5\u00da\u00dd"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'class'", "'{'", "'public'", "'static'", "'void'", 
                     "'main'", "'('", "'String'", "'['", "']'", "')'", "'}'", 
                     "'extends'", "';'", "','", "'return'", "'if'", "'else'", 
                     "'while'", "'System.out.println'", "'='", "'true'", 
                     "'false'", "'this'", "'new'", "'int'", "'!'", "'&&'", 
                     "'<'", "'+'", "'-'", "'*'", "'.'", "'length'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, "Type", 
                      "Number", "Identifier", "WS" ];

var ruleNames =  [ "prog", "mainClass", "classDeclaration", "varDeclaration", 
                   "methodDeclaration", "statement", "expression", "expression_" ];

function miniJavaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

miniJavaParser.prototype = Object.create(antlr4.Parser.prototype);
miniJavaParser.prototype.constructor = miniJavaParser;

Object.defineProperty(miniJavaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

miniJavaParser.EOF = antlr4.Token.EOF;
miniJavaParser.T__0 = 1;
miniJavaParser.T__1 = 2;
miniJavaParser.T__2 = 3;
miniJavaParser.T__3 = 4;
miniJavaParser.T__4 = 5;
miniJavaParser.T__5 = 6;
miniJavaParser.T__6 = 7;
miniJavaParser.T__7 = 8;
miniJavaParser.T__8 = 9;
miniJavaParser.T__9 = 10;
miniJavaParser.T__10 = 11;
miniJavaParser.T__11 = 12;
miniJavaParser.T__12 = 13;
miniJavaParser.T__13 = 14;
miniJavaParser.T__14 = 15;
miniJavaParser.T__15 = 16;
miniJavaParser.T__16 = 17;
miniJavaParser.T__17 = 18;
miniJavaParser.T__18 = 19;
miniJavaParser.T__19 = 20;
miniJavaParser.T__20 = 21;
miniJavaParser.T__21 = 22;
miniJavaParser.T__22 = 23;
miniJavaParser.T__23 = 24;
miniJavaParser.T__24 = 25;
miniJavaParser.T__25 = 26;
miniJavaParser.T__26 = 27;
miniJavaParser.T__27 = 28;
miniJavaParser.T__28 = 29;
miniJavaParser.T__29 = 30;
miniJavaParser.T__30 = 31;
miniJavaParser.T__31 = 32;
miniJavaParser.T__32 = 33;
miniJavaParser.T__33 = 34;
miniJavaParser.Type = 35;
miniJavaParser.Number = 36;
miniJavaParser.Identifier = 37;
miniJavaParser.WS = 38;

miniJavaParser.RULE_prog = 0;
miniJavaParser.RULE_mainClass = 1;
miniJavaParser.RULE_classDeclaration = 2;
miniJavaParser.RULE_varDeclaration = 3;
miniJavaParser.RULE_methodDeclaration = 4;
miniJavaParser.RULE_statement = 5;
miniJavaParser.RULE_expression = 6;
miniJavaParser.RULE_expression_ = 7;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.mainClass = function() {
    return this.getTypedRuleContext(MainClassContext,0);
};

ProgContext.prototype.classDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassDeclarationContext);
    } else {
        return this.getTypedRuleContext(ClassDeclarationContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitProg(this);
	}
};




miniJavaParser.ProgContext = ProgContext;

miniJavaParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, miniJavaParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.mainClass();
        this.state = 20;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniJavaParser.T__0) {
            this.state = 17;
            this.classDeclaration();
            this.state = 22;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MainClassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_mainClass;
    return this;
}

MainClassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainClassContext.prototype.constructor = MainClassContext;

MainClassContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniJavaParser.Identifier);
    } else {
        return this.getToken(miniJavaParser.Identifier, i);
    }
};


MainClassContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

MainClassContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterMainClass(this);
	}
};

MainClassContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitMainClass(this);
	}
};




miniJavaParser.MainClassContext = MainClassContext;

miniJavaParser.prototype.mainClass = function() {

    var localctx = new MainClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, miniJavaParser.RULE_mainClass);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(miniJavaParser.T__0);
        this.state = 24;
        this.match(miniJavaParser.Identifier);
        this.state = 25;
        this.match(miniJavaParser.T__1);
        this.state = 26;
        this.match(miniJavaParser.T__2);
        this.state = 27;
        this.match(miniJavaParser.T__3);
        this.state = 28;
        this.match(miniJavaParser.T__4);
        this.state = 29;
        this.match(miniJavaParser.T__5);
        this.state = 30;
        this.match(miniJavaParser.T__6);
        this.state = 31;
        this.match(miniJavaParser.T__7);
        this.state = 32;
        this.match(miniJavaParser.T__8);
        this.state = 33;
        this.match(miniJavaParser.T__9);
        this.state = 34;
        this.match(miniJavaParser.Identifier);
        this.state = 35;
        this.match(miniJavaParser.T__10);
        this.state = 36;
        this.match(miniJavaParser.T__1);
        this.state = 37;
        this.statement();
        this.state = 38;
        this.match(miniJavaParser.T__11);
        this.state = 39;
        this.match(miniJavaParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClassDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_classDeclaration;
    return this;
}

ClassDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclarationContext.prototype.constructor = ClassDeclarationContext;

ClassDeclarationContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniJavaParser.Identifier);
    } else {
        return this.getToken(miniJavaParser.Identifier, i);
    }
};


ClassDeclarationContext.prototype.varDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclarationContext);
    } else {
        return this.getTypedRuleContext(VarDeclarationContext,i);
    }
};

ClassDeclarationContext.prototype.methodDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MethodDeclarationContext);
    } else {
        return this.getTypedRuleContext(MethodDeclarationContext,i);
    }
};

ClassDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterClassDeclaration(this);
	}
};

ClassDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitClassDeclaration(this);
	}
};




miniJavaParser.ClassDeclarationContext = ClassDeclarationContext;

miniJavaParser.prototype.classDeclaration = function() {

    var localctx = new ClassDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, miniJavaParser.RULE_classDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(miniJavaParser.T__0);
        this.state = 42;
        this.match(miniJavaParser.Identifier);
        this.state = 45;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===miniJavaParser.T__12) {
            this.state = 43;
            this.match(miniJavaParser.T__12);
            this.state = 44;
            this.match(miniJavaParser.Identifier);
        }

        this.state = 47;
        this.match(miniJavaParser.T__1);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniJavaParser.Type) {
            this.state = 48;
            this.varDeclaration();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniJavaParser.T__2) {
            this.state = 54;
            this.methodDeclaration();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 60;
        this.match(miniJavaParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_varDeclaration;
    return this;
}

VarDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclarationContext.prototype.constructor = VarDeclarationContext;

VarDeclarationContext.prototype.Type = function() {
    return this.getToken(miniJavaParser.Type, 0);
};

VarDeclarationContext.prototype.Identifier = function() {
    return this.getToken(miniJavaParser.Identifier, 0);
};

VarDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterVarDeclaration(this);
	}
};

VarDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitVarDeclaration(this);
	}
};




miniJavaParser.VarDeclarationContext = VarDeclarationContext;

miniJavaParser.prototype.varDeclaration = function() {

    var localctx = new VarDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, miniJavaParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(miniJavaParser.Type);
        this.state = 63;
        this.match(miniJavaParser.Identifier);
        this.state = 64;
        this.match(miniJavaParser.T__13);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_methodDeclaration;
    return this;
}

MethodDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodDeclarationContext.prototype.constructor = MethodDeclarationContext;

MethodDeclarationContext.prototype.Type = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniJavaParser.Type);
    } else {
        return this.getToken(miniJavaParser.Type, i);
    }
};


MethodDeclarationContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniJavaParser.Identifier);
    } else {
        return this.getToken(miniJavaParser.Identifier, i);
    }
};


MethodDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

MethodDeclarationContext.prototype.varDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclarationContext);
    } else {
        return this.getTypedRuleContext(VarDeclarationContext,i);
    }
};

MethodDeclarationContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

MethodDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterMethodDeclaration(this);
	}
};

MethodDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitMethodDeclaration(this);
	}
};




miniJavaParser.MethodDeclarationContext = MethodDeclarationContext;

miniJavaParser.prototype.methodDeclaration = function() {

    var localctx = new MethodDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, miniJavaParser.RULE_methodDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(miniJavaParser.T__2);
        this.state = 67;
        this.match(miniJavaParser.Type);
        this.state = 68;
        this.match(miniJavaParser.Identifier);
        this.state = 69;
        this.match(miniJavaParser.T__6);
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===miniJavaParser.Type) {
            this.state = 70;
            this.match(miniJavaParser.Type);
            this.state = 71;
            this.match(miniJavaParser.Identifier);
            this.state = 77;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===miniJavaParser.T__14) {
                this.state = 72;
                this.match(miniJavaParser.T__14);
                this.state = 73;
                this.match(miniJavaParser.Type);
                this.state = 74;
                this.match(miniJavaParser.Identifier);
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 82;
        this.match(miniJavaParser.T__10);
        this.state = 83;
        this.match(miniJavaParser.T__1);
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniJavaParser.Type) {
            this.state = 84;
            this.varDeclaration();
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniJavaParser.T__1) | (1 << miniJavaParser.T__16) | (1 << miniJavaParser.T__18) | (1 << miniJavaParser.T__19))) !== 0) || _la===miniJavaParser.Identifier) {
            this.state = 90;
            this.statement();
            this.state = 95;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 96;
        this.match(miniJavaParser.T__15);
        this.state = 97;
        this.expression();
        this.state = 98;
        this.match(miniJavaParser.T__13);
        this.state = 99;
        this.match(miniJavaParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

StatementContext.prototype.Identifier = function() {
    return this.getToken(miniJavaParser.Identifier, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitStatement(this);
	}
};




miniJavaParser.StatementContext = StatementContext;

miniJavaParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, miniJavaParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 142;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.match(miniJavaParser.T__1);
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniJavaParser.T__1) | (1 << miniJavaParser.T__16) | (1 << miniJavaParser.T__18) | (1 << miniJavaParser.T__19))) !== 0) || _la===miniJavaParser.Identifier) {
                this.state = 102;
                this.statement();
                this.state = 107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 108;
            this.match(miniJavaParser.T__11);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.match(miniJavaParser.T__16);
            this.state = 110;
            this.match(miniJavaParser.T__6);
            this.state = 111;
            this.expression();
            this.state = 112;
            this.match(miniJavaParser.T__10);
            this.state = 113;
            this.statement();
            this.state = 114;
            this.match(miniJavaParser.T__17);
            this.state = 115;
            this.statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            this.match(miniJavaParser.T__18);
            this.state = 118;
            this.match(miniJavaParser.T__6);
            this.state = 119;
            this.expression();
            this.state = 120;
            this.match(miniJavaParser.T__10);
            this.state = 121;
            this.statement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 123;
            this.match(miniJavaParser.T__19);
            this.state = 124;
            this.match(miniJavaParser.T__6);
            this.state = 125;
            this.expression();
            this.state = 126;
            this.match(miniJavaParser.T__10);
            this.state = 127;
            this.match(miniJavaParser.T__13);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 129;
            this.match(miniJavaParser.Identifier);
            this.state = 130;
            this.match(miniJavaParser.T__20);
            this.state = 131;
            this.expression();
            this.state = 132;
            this.match(miniJavaParser.T__13);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 134;
            this.match(miniJavaParser.Identifier);
            this.state = 135;
            this.match(miniJavaParser.T__8);
            this.state = 136;
            this.expression();
            this.state = 137;
            this.match(miniJavaParser.T__9);
            this.state = 138;
            this.match(miniJavaParser.T__20);
            this.state = 139;
            this.expression();
            this.state = 140;
            this.match(miniJavaParser.T__13);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.Number = function() {
    return this.getToken(miniJavaParser.Number, 0);
};

ExpressionContext.prototype.expression_ = function() {
    return this.getTypedRuleContext(Expression_Context,0);
};

ExpressionContext.prototype.Identifier = function() {
    return this.getToken(miniJavaParser.Identifier, 0);
};

ExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitExpression(this);
	}
};




miniJavaParser.ExpressionContext = ExpressionContext;

miniJavaParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, miniJavaParser.RULE_expression);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.match(miniJavaParser.Number);
            this.state = 145;
            this.expression_();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.match(miniJavaParser.T__21);
            this.state = 147;
            this.expression_();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 148;
            this.match(miniJavaParser.T__22);
            this.state = 149;
            this.expression_();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 150;
            this.match(miniJavaParser.Identifier);
            this.state = 151;
            this.expression_();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 152;
            this.match(miniJavaParser.T__23);
            this.state = 153;
            this.expression_();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 154;
            this.match(miniJavaParser.T__24);
            this.state = 155;
            this.match(miniJavaParser.T__25);
            this.state = 156;
            this.match(miniJavaParser.T__8);
            this.state = 157;
            this.expression();
            this.state = 158;
            this.match(miniJavaParser.T__9);
            this.state = 159;
            this.expression_();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 161;
            this.match(miniJavaParser.T__24);
            this.state = 162;
            this.match(miniJavaParser.Identifier);
            this.state = 163;
            this.match(miniJavaParser.T__6);
            this.state = 164;
            this.match(miniJavaParser.T__10);
            this.state = 165;
            this.expression_();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 166;
            this.match(miniJavaParser.T__26);
            this.state = 167;
            this.expression();
            this.state = 168;
            this.expression_();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 170;
            this.match(miniJavaParser.T__6);
            this.state = 171;
            this.expression();
            this.state = 172;
            this.match(miniJavaParser.T__10);
            this.state = 173;
            this.expression_();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expression_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_expression_;
    return this;
}

Expression_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_Context.prototype.constructor = Expression_Context;

Expression_Context.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Expression_Context.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniJavaParser.Identifier);
    } else {
        return this.getToken(miniJavaParser.Identifier, i);
    }
};


Expression_Context.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterExpression_(this);
	}
};

Expression_Context.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitExpression_(this);
	}
};




miniJavaParser.Expression_Context = Expression_Context;

miniJavaParser.prototype.expression_ = function() {

    var localctx = new Expression_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 14, miniJavaParser.RULE_expression_);
    var _la = 0; // Token type
    try {
        this.state = 219;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 181;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 177;
                    _la = this._input.LA(1);
                    if(!(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (miniJavaParser.T__27 - 28)) | (1 << (miniJavaParser.T__28 - 28)) | (1 << (miniJavaParser.T__29 - 28)) | (1 << (miniJavaParser.T__30 - 28)) | (1 << (miniJavaParser.T__31 - 28)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 178;
                    this.expression(); 
                }
                this.state = 183;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 184;
                    this.match(miniJavaParser.T__8);
                    this.state = 185;
                    this.expression();
                    this.state = 186;
                    this.match(miniJavaParser.T__9); 
                }
                this.state = 192;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 197;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 193;
                    this.match(miniJavaParser.T__32);
                    this.state = 194;
                    this.match(miniJavaParser.T__33); 
                }
                this.state = 199;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
            }

            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 216;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 200;
                    this.match(miniJavaParser.T__32);
                    this.state = 201;
                    this.match(miniJavaParser.Identifier);
                    this.state = 202;
                    this.match(miniJavaParser.T__6);
                    this.state = 211;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (miniJavaParser.T__6 - 7)) | (1 << (miniJavaParser.T__21 - 7)) | (1 << (miniJavaParser.T__22 - 7)) | (1 << (miniJavaParser.T__23 - 7)) | (1 << (miniJavaParser.T__24 - 7)) | (1 << (miniJavaParser.T__26 - 7)) | (1 << (miniJavaParser.Number - 7)) | (1 << (miniJavaParser.Identifier - 7)))) !== 0)) {
                        this.state = 203;
                        this.expression();
                        this.state = 208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while(_la===miniJavaParser.T__14) {
                            this.state = 204;
                            this.match(miniJavaParser.T__14);
                            this.state = 205;
                            this.expression();
                            this.state = 210;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }

                    this.state = 213;
                    this.match(miniJavaParser.T__10); 
                }
                this.state = 218;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.miniJavaParser = miniJavaParser;
