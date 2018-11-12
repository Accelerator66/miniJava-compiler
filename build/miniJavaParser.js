// Generated from grammar\miniJava.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var miniJavaListener = require('./miniJavaListener').miniJavaListener;
var miniJavaVisitor = require('./miniJavaVisitor').miniJavaVisitor;

var grammarFileName = "miniJava.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003(\u00e3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0007\u0002\u0017",
    "\n\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u00042\n\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u00046\n\u0004\f\u0004\u000e\u00049\u000b\u0004\u0003\u0004\u0007",
    "\u0004<\n\u0004\f\u0004\u000e\u0004?\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006Q\n\u0006\f\u0006\u000e\u0006T\u000b",
    "\u0006\u0005\u0006V\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007",
    "\u0006[\n\u0006\f\u0006\u000e\u0006^\u000b\u0006\u0003\u0006\u0007\u0006",
    "a\n\u0006\f\u0006\u000e\u0006d\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007q\n\u0007\u0003\b\u0003\b",
    "\u0007\bu\n\b\f\b\u000e\bx\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u009c\n\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u00be\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0007\t\u00cf\n\t\f\t\u000e\t\u00d2\u000b\t\u0005\t\u00d4",
    "\n\t\u0003\t\u0007\t\u00d7\n\t\f\t\u000e\t\u00da\u000b\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\n\u00e1\n\n\u0003\n\u0002\u0003\u0010",
    "\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003\u0003\u0002",
    "!%\u0002\u00f9\u0002\u0014\u0003\u0002\u0002\u0002\u0004\u001b\u0003",
    "\u0002\u0002\u0002\u0006-\u0003\u0002\u0002\u0002\bB\u0003\u0002\u0002",
    "\u0002\nF\u0003\u0002\u0002\u0002\fp\u0003\u0002\u0002\u0002\u000e\u009b",
    "\u0003\u0002\u0002\u0002\u0010\u00bd\u0003\u0002\u0002\u0002\u0012\u00e0",
    "\u0003\u0002\u0002\u0002\u0014\u0018\u0005\u0004\u0003\u0002\u0015\u0017",
    "\u0005\u0006\u0004\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u001a",
    "\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0003\u0002\u0002\u0002\u0019\u0003\u0003\u0002\u0002\u0002\u001a\u0018",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0003\u0002\u0002\u001c\u001d",
    "\u0007\'\u0002\u0002\u001d\u001e\u0007\u0004\u0002\u0002\u001e\u001f",
    "\u0007\u0005\u0002\u0002\u001f \u0007\u0006\u0002\u0002 !\u0007\u0007",
    "\u0002\u0002!\"\u0007\b\u0002\u0002\"#\u0007\t\u0002\u0002#$\u0007\n",
    "\u0002\u0002$%\u0007\u000b\u0002\u0002%&\u0007\f\u0002\u0002&\'\u0007",
    "\'\u0002\u0002\'(\u0007\r\u0002\u0002()\u0007\u0004\u0002\u0002)*\u0005",
    "\u000e\b\u0002*+\u0007\u000e\u0002\u0002+,\u0007\u000e\u0002\u0002,",
    "\u0005\u0003\u0002\u0002\u0002-.\u0007\u0003\u0002\u0002.1\u0007\'\u0002",
    "\u0002/0\u0007\u000f\u0002\u000202\u0007\'\u0002\u00021/\u0003\u0002",
    "\u0002\u000212\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000237\u0007",
    "\u0004\u0002\u000246\u0005\b\u0005\u000254\u0003\u0002\u0002\u00026",
    "9\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002",
    "\u00028=\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:<\u0005\n",
    "\u0006\u0002;:\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003",
    "\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>@\u0003\u0002\u0002\u0002",
    "?=\u0003\u0002\u0002\u0002@A\u0007\u000e\u0002\u0002A\u0007\u0003\u0002",
    "\u0002\u0002BC\u0005\f\u0007\u0002CD\u0007\'\u0002\u0002DE\u0007\u0010",
    "\u0002\u0002E\t\u0003\u0002\u0002\u0002FG\u0007\u0005\u0002\u0002GH",
    "\u0005\f\u0007\u0002HI\u0007\'\u0002\u0002IU\u0007\t\u0002\u0002JK\u0005",
    "\f\u0007\u0002KR\u0007\'\u0002\u0002LM\u0007\u0011\u0002\u0002MN\u0005",
    "\f\u0007\u0002NO\u0007\'\u0002\u0002OQ\u0003\u0002\u0002\u0002PL\u0003",
    "\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002",
    "RS\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002",
    "\u0002UJ\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0003\u0002",
    "\u0002\u0002WX\u0007\r\u0002\u0002X\\\u0007\u0004\u0002\u0002Y[\u0005",
    "\b\u0005\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\",
    "Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]b\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002_a\u0005\u000e\b\u0002`_\u0003\u0002",
    "\u0002\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003",
    "\u0002\u0002\u0002ce\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002",
    "ef\u0007\u0012\u0002\u0002fg\u0005\u0010\t\u0002gh\u0007\u0010\u0002",
    "\u0002hi\u0007\u000e\u0002\u0002i\u000b\u0003\u0002\u0002\u0002jk\u0007",
    "\u0013\u0002\u0002kl\u0007\u000b\u0002\u0002lq\u0007\f\u0002\u0002m",
    "q\u0007\u0014\u0002\u0002nq\u0007\u0013\u0002\u0002oq\u0007\'\u0002",
    "\u0002pj\u0003\u0002\u0002\u0002pm\u0003\u0002\u0002\u0002pn\u0003\u0002",
    "\u0002\u0002po\u0003\u0002\u0002\u0002q\r\u0003\u0002\u0002\u0002rv",
    "\u0007\u0004\u0002\u0002su\u0005\u000e\b\u0002ts\u0003\u0002\u0002\u0002",
    "ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
    "\u0002wy\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002y\u009c\u0007",
    "\u000e\u0002\u0002z{\u0007\u0015\u0002\u0002{|\u0007\t\u0002\u0002|",
    "}\u0005\u0010\t\u0002}~\u0007\r\u0002\u0002~\u007f\u0005\u000e\b\u0002",
    "\u007f\u0080\u0007\u0016\u0002\u0002\u0080\u0081\u0005\u000e\b\u0002",
    "\u0081\u009c\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0017\u0002\u0002",
    "\u0083\u0084\u0007\t\u0002\u0002\u0084\u0085\u0005\u0010\t\u0002\u0085",
    "\u0086\u0007\r\u0002\u0002\u0086\u0087\u0005\u000e\b\u0002\u0087\u009c",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u0018\u0002\u0002\u0089\u008a",
    "\u0007\t\u0002\u0002\u008a\u008b\u0005\u0010\t\u0002\u008b\u008c\u0007",
    "\r\u0002\u0002\u008c\u008d\u0007\u0010\u0002\u0002\u008d\u009c\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0007\'\u0002\u0002\u008f\u0090\u0007",
    "\u0019\u0002\u0002\u0090\u0091\u0005\u0010\t\u0002\u0091\u0092\u0007",
    "\u0010\u0002\u0002\u0092\u009c\u0003\u0002\u0002\u0002\u0093\u0094\u0007",
    "\'\u0002\u0002\u0094\u0095\u0007\u000b\u0002\u0002\u0095\u0096\u0005",
    "\u0010\t\u0002\u0096\u0097\u0007\f\u0002\u0002\u0097\u0098\u0007\u0019",
    "\u0002\u0002\u0098\u0099\u0005\u0010\t\u0002\u0099\u009a\u0007\u0010",
    "\u0002\u0002\u009a\u009c\u0003\u0002\u0002\u0002\u009br\u0003\u0002",
    "\u0002\u0002\u009bz\u0003\u0002\u0002\u0002\u009b\u0082\u0003\u0002",
    "\u0002\u0002\u009b\u0088\u0003\u0002\u0002\u0002\u009b\u008e\u0003\u0002",
    "\u0002\u0002\u009b\u0093\u0003\u0002\u0002\u0002\u009c\u000f\u0003\u0002",
    "\u0002\u0002\u009d\u00be\b\t\u0001\u0002\u009e\u009f\u0007&\u0002\u0002",
    "\u009f\u00be\u0005\u0012\n\u0002\u00a0\u00a1\u0007\u001c\u0002\u0002",
    "\u00a1\u00be\u0005\u0012\n\u0002\u00a2\u00a3\u0007\u001d\u0002\u0002",
    "\u00a3\u00be\u0005\u0012\n\u0002\u00a4\u00a5\u0007\'\u0002\u0002\u00a5",
    "\u00be\u0005\u0012\n\u0002\u00a6\u00a7\u0007\u001e\u0002\u0002\u00a7",
    "\u00be\u0005\u0012\n\u0002\u00a8\u00a9\u0007\u001f\u0002\u0002\u00a9",
    "\u00aa\u0007\u0013\u0002\u0002\u00aa\u00ab\u0007\u000b\u0002\u0002\u00ab",
    "\u00ac\u0005\u0010\t\u0002\u00ac\u00ad\u0007\f\u0002\u0002\u00ad\u00ae",
    "\u0005\u0012\n\u0002\u00ae\u00be\u0003\u0002\u0002\u0002\u00af\u00b0",
    "\u0007\u001f\u0002\u0002\u00b0\u00b1\u0007\'\u0002\u0002\u00b1\u00b2",
    "\u0007\t\u0002\u0002\u00b2\u00b3\u0007\r\u0002\u0002\u00b3\u00be\u0005",
    "\u0012\n\u0002\u00b4\u00b5\u0007 \u0002\u0002\u00b5\u00b6\u0005\u0010",
    "\t\u0002\u00b6\u00b7\u0005\u0012\n\u0002\u00b7\u00be\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\u0007\t\u0002\u0002\u00b9\u00ba\u0005\u0010\t\u0002",
    "\u00ba\u00bb\u0007\r\u0002\u0002\u00bb\u00bc\u0005\u0012\n\u0002\u00bc",
    "\u00be\u0003\u0002\u0002\u0002\u00bd\u009d\u0003\u0002\u0002\u0002\u00bd",
    "\u009e\u0003\u0002\u0002\u0002\u00bd\u00a0\u0003\u0002\u0002\u0002\u00bd",
    "\u00a2\u0003\u0002\u0002\u0002\u00bd\u00a4\u0003\u0002\u0002\u0002\u00bd",
    "\u00a6\u0003\u0002\u0002\u0002\u00bd\u00a8\u0003\u0002\u0002\u0002\u00bd",
    "\u00af\u0003\u0002\u0002\u0002\u00bd\u00b4\u0003\u0002\u0002\u0002\u00bd",
    "\u00b8\u0003\u0002\u0002\u0002\u00be\u00d8\u0003\u0002\u0002\u0002\u00bf",
    "\u00c0\f\u000e\u0002\u0002\u00c0\u00c1\u0007\u000b\u0002\u0002\u00c1",
    "\u00c2\u0005\u0010\t\u0002\u00c2\u00c3\u0007\f\u0002\u0002\u00c3\u00d7",
    "\u0003\u0002\u0002\u0002\u00c4\u00c5\f\r\u0002\u0002\u00c5\u00c6\u0007",
    "\u001a\u0002\u0002\u00c6\u00d7\u0007\u001b\u0002\u0002\u00c7\u00c8\f",
    "\f\u0002\u0002\u00c8\u00c9\u0007\u001a\u0002\u0002\u00c9\u00ca\u0007",
    "\'\u0002\u0002\u00ca\u00d3\u0007\t\u0002\u0002\u00cb\u00d0\u0005\u0010",
    "\t\u0002\u00cc\u00cd\u0007\u0011\u0002\u0002\u00cd\u00cf\u0005\u0010",
    "\t\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00cf\u00d2\u0003\u0002",
    "\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002",
    "\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002",
    "\u0002\u0002\u00d3\u00cb\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002",
    "\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d7\u0007\r",
    "\u0002\u0002\u00d6\u00bf\u0003\u0002\u0002\u0002\u00d6\u00c4\u0003\u0002",
    "\u0002\u0002\u00d6\u00c7\u0003\u0002\u0002\u0002\u00d7\u00da\u0003\u0002",
    "\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002",
    "\u0002\u0002\u00d9\u0011\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002",
    "\u0002\u0002\u00db\u00dc\t\u0002\u0002\u0002\u00dc\u00dd\u0005\u0010",
    "\t\u0002\u00dd\u00de\u0005\u0012\n\u0002\u00de\u00e1\u0003\u0002\u0002",
    "\u0002\u00df\u00e1\u0003\u0002\u0002\u0002\u00e0\u00db\u0003\u0002\u0002",
    "\u0002\u00e0\u00df\u0003\u0002\u0002\u0002\u00e1\u0013\u0003\u0002\u0002",
    "\u0002\u0013\u001817=RU\\bpv\u009b\u00bd\u00d0\u00d3\u00d6\u00d8\u00e0"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'class'", "'{'", "'public'", "'static'", "'void'", 
                     "'main'", "'('", "'String'", "'['", "']'", "')'", "'}'", 
                     "'extends'", "';'", "','", "'return'", "'int'", "'boolean'", 
                     "'if'", "'else'", "'while'", "'System.out.println'", 
                     "'='", "'.'", "'length'", "'true'", "'false'", "'this'", 
                     "'new'", "'!'", "'&&'", "'<'", "'+'", "'-'", "'*'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "Number", "Identifier", "WS" ];

var ruleNames =  [ "prog", "mainClass", "classDeclaration", "varDeclaration", 
                   "methodDeclaration", "type", "statement", "expression", 
                   "expression_" ];

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
miniJavaParser.T__34 = 35;
miniJavaParser.Number = 36;
miniJavaParser.Identifier = 37;
miniJavaParser.WS = 38;

miniJavaParser.RULE_prog = 0;
miniJavaParser.RULE_mainClass = 1;
miniJavaParser.RULE_classDeclaration = 2;
miniJavaParser.RULE_varDeclaration = 3;
miniJavaParser.RULE_methodDeclaration = 4;
miniJavaParser.RULE_type = 5;
miniJavaParser.RULE_statement = 6;
miniJavaParser.RULE_expression = 7;
miniJavaParser.RULE_expression_ = 8;

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

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




miniJavaParser.ProgContext = ProgContext;

miniJavaParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, miniJavaParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.mainClass();
        this.state = 22;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniJavaParser.T__0) {
            this.state = 19;
            this.classDeclaration();
            this.state = 24;
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

MainClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitMainClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




miniJavaParser.MainClassContext = MainClassContext;

miniJavaParser.prototype.mainClass = function() {

    var localctx = new MainClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, miniJavaParser.RULE_mainClass);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.match(miniJavaParser.T__0);
        this.state = 26;
        this.match(miniJavaParser.Identifier);
        this.state = 27;
        this.match(miniJavaParser.T__1);
        this.state = 28;
        this.match(miniJavaParser.T__2);
        this.state = 29;
        this.match(miniJavaParser.T__3);
        this.state = 30;
        this.match(miniJavaParser.T__4);
        this.state = 31;
        this.match(miniJavaParser.T__5);
        this.state = 32;
        this.match(miniJavaParser.T__6);
        this.state = 33;
        this.match(miniJavaParser.T__7);
        this.state = 34;
        this.match(miniJavaParser.T__8);
        this.state = 35;
        this.match(miniJavaParser.T__9);
        this.state = 36;
        this.match(miniJavaParser.Identifier);
        this.state = 37;
        this.match(miniJavaParser.T__10);
        this.state = 38;
        this.match(miniJavaParser.T__1);
        this.state = 39;
        this.statement();
        this.state = 40;
        this.match(miniJavaParser.T__11);
        this.state = 41;
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

ClassDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitClassDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




miniJavaParser.ClassDeclarationContext = ClassDeclarationContext;

miniJavaParser.prototype.classDeclaration = function() {

    var localctx = new ClassDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, miniJavaParser.RULE_classDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(miniJavaParser.T__0);
        this.state = 44;
        this.match(miniJavaParser.Identifier);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===miniJavaParser.T__12) {
            this.state = 45;
            this.match(miniJavaParser.T__12);
            this.state = 46;
            this.match(miniJavaParser.Identifier);
        }

        this.state = 49;
        this.match(miniJavaParser.T__1);
        this.state = 53;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (miniJavaParser.T__16 - 17)) | (1 << (miniJavaParser.T__17 - 17)) | (1 << (miniJavaParser.Identifier - 17)))) !== 0)) {
            this.state = 50;
            this.varDeclaration();
            this.state = 55;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 59;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniJavaParser.T__2) {
            this.state = 56;
            this.methodDeclaration();
            this.state = 61;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 62;
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

VarDeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
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

VarDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitVarDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




miniJavaParser.VarDeclarationContext = VarDeclarationContext;

miniJavaParser.prototype.varDeclaration = function() {

    var localctx = new VarDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, miniJavaParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.type();
        this.state = 65;
        this.match(miniJavaParser.Identifier);
        this.state = 66;
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

MethodDeclarationContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
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

MethodDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitMethodDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




miniJavaParser.MethodDeclarationContext = MethodDeclarationContext;

miniJavaParser.prototype.methodDeclaration = function() {

    var localctx = new MethodDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, miniJavaParser.RULE_methodDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(miniJavaParser.T__2);
        this.state = 69;
        this.type();
        this.state = 70;
        this.match(miniJavaParser.Identifier);
        this.state = 71;
        this.match(miniJavaParser.T__6);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (miniJavaParser.T__16 - 17)) | (1 << (miniJavaParser.T__17 - 17)) | (1 << (miniJavaParser.Identifier - 17)))) !== 0)) {
            this.state = 72;
            this.type();
            this.state = 73;
            this.match(miniJavaParser.Identifier);
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===miniJavaParser.T__14) {
                this.state = 74;
                this.match(miniJavaParser.T__14);
                this.state = 75;
                this.type();
                this.state = 76;
                this.match(miniJavaParser.Identifier);
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 85;
        this.match(miniJavaParser.T__10);
        this.state = 86;
        this.match(miniJavaParser.T__1);
        this.state = 90;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 87;
                this.varDeclaration(); 
            }
            this.state = 92;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniJavaParser.T__1) | (1 << miniJavaParser.T__18) | (1 << miniJavaParser.T__20) | (1 << miniJavaParser.T__21))) !== 0) || _la===miniJavaParser.Identifier) {
            this.state = 93;
            this.statement();
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 99;
        this.match(miniJavaParser.T__15);
        this.state = 100;
        this.expression(0);
        this.state = 101;
        this.match(miniJavaParser.T__13);
        this.state = 102;
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

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniJavaParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.Identifier = function() {
    return this.getToken(miniJavaParser.Identifier, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof miniJavaListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




miniJavaParser.TypeContext = TypeContext;

miniJavaParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, miniJavaParser.RULE_type);
    try {
        this.state = 110;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.match(miniJavaParser.T__16);
            this.state = 105;
            this.match(miniJavaParser.T__8);
            this.state = 106;
            this.match(miniJavaParser.T__9);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 107;
            this.match(miniJavaParser.T__17);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 108;
            this.match(miniJavaParser.T__16);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 109;
            this.match(miniJavaParser.Identifier);
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

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




miniJavaParser.StatementContext = StatementContext;

miniJavaParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, miniJavaParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.match(miniJavaParser.T__1);
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniJavaParser.T__1) | (1 << miniJavaParser.T__18) | (1 << miniJavaParser.T__20) | (1 << miniJavaParser.T__21))) !== 0) || _la===miniJavaParser.Identifier) {
                this.state = 113;
                this.statement();
                this.state = 118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 119;
            this.match(miniJavaParser.T__11);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 120;
            this.match(miniJavaParser.T__18);
            this.state = 121;
            this.match(miniJavaParser.T__6);
            this.state = 122;
            this.expression(0);
            this.state = 123;
            this.match(miniJavaParser.T__10);
            this.state = 124;
            this.statement();
            this.state = 125;
            this.match(miniJavaParser.T__19);
            this.state = 126;
            this.statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 128;
            this.match(miniJavaParser.T__20);
            this.state = 129;
            this.match(miniJavaParser.T__6);
            this.state = 130;
            this.expression(0);
            this.state = 131;
            this.match(miniJavaParser.T__10);
            this.state = 132;
            this.statement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 134;
            this.match(miniJavaParser.T__21);
            this.state = 135;
            this.match(miniJavaParser.T__6);
            this.state = 136;
            this.expression(0);
            this.state = 137;
            this.match(miniJavaParser.T__10);
            this.state = 138;
            this.match(miniJavaParser.T__13);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 140;
            this.match(miniJavaParser.Identifier);
            this.state = 141;
            this.match(miniJavaParser.T__22);
            this.state = 142;
            this.expression(0);
            this.state = 143;
            this.match(miniJavaParser.T__13);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 145;
            this.match(miniJavaParser.Identifier);
            this.state = 146;
            this.match(miniJavaParser.T__8);
            this.state = 147;
            this.expression(0);
            this.state = 148;
            this.match(miniJavaParser.T__9);
            this.state = 149;
            this.match(miniJavaParser.T__22);
            this.state = 150;
            this.expression(0);
            this.state = 151;
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

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
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

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniJavaParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, miniJavaParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            break;

        case 2:
            this.state = 156;
            this.match(miniJavaParser.Number);
            this.state = 157;
            this.expression_();
            break;

        case 3:
            this.state = 158;
            this.match(miniJavaParser.T__25);
            this.state = 159;
            this.expression_();
            break;

        case 4:
            this.state = 160;
            this.match(miniJavaParser.T__26);
            this.state = 161;
            this.expression_();
            break;

        case 5:
            this.state = 162;
            this.match(miniJavaParser.Identifier);
            this.state = 163;
            this.expression_();
            break;

        case 6:
            this.state = 164;
            this.match(miniJavaParser.T__27);
            this.state = 165;
            this.expression_();
            break;

        case 7:
            this.state = 166;
            this.match(miniJavaParser.T__28);
            this.state = 167;
            this.match(miniJavaParser.T__16);
            this.state = 168;
            this.match(miniJavaParser.T__8);
            this.state = 169;
            this.expression(0);
            this.state = 170;
            this.match(miniJavaParser.T__9);
            this.state = 171;
            this.expression_();
            break;

        case 8:
            this.state = 173;
            this.match(miniJavaParser.T__28);
            this.state = 174;
            this.match(miniJavaParser.Identifier);
            this.state = 175;
            this.match(miniJavaParser.T__6);
            this.state = 176;
            this.match(miniJavaParser.T__10);
            this.state = 177;
            this.expression_();
            break;

        case 9:
            this.state = 178;
            this.match(miniJavaParser.T__29);
            this.state = 179;
            this.expression(0);
            this.state = 180;
            this.expression_();
            break;

        case 10:
            this.state = 182;
            this.match(miniJavaParser.T__6);
            this.state = 183;
            this.expression(0);
            this.state = 184;
            this.match(miniJavaParser.T__10);
            this.state = 185;
            this.expression_();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 214;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 212;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, miniJavaParser.RULE_expression);
                    this.state = 189;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 190;
                    this.match(miniJavaParser.T__8);
                    this.state = 191;
                    this.expression(0);
                    this.state = 192;
                    this.match(miniJavaParser.T__9);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, miniJavaParser.RULE_expression);
                    this.state = 194;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 195;
                    this.match(miniJavaParser.T__23);
                    this.state = 196;
                    this.match(miniJavaParser.T__24);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, miniJavaParser.RULE_expression);
                    this.state = 197;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 198;
                    this.match(miniJavaParser.T__23);
                    this.state = 199;
                    this.match(miniJavaParser.Identifier);
                    this.state = 200;
                    this.match(miniJavaParser.T__6);
                    this.state = 209;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                    if(la_===1) {
                        this.state = 201;
                        this.expression(0);
                        this.state = 206;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while(_la===miniJavaParser.T__14) {
                            this.state = 202;
                            this.match(miniJavaParser.T__14);
                            this.state = 203;
                            this.expression(0);
                            this.state = 208;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }

                    }
                    this.state = 211;
                    this.match(miniJavaParser.T__10);
                    break;

                } 
            }
            this.state = 216;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
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

Expression_Context.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Expression_Context.prototype.expression_ = function() {
    return this.getTypedRuleContext(Expression_Context,0);
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

Expression_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof miniJavaVisitor ) {
        return visitor.visitExpression_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




miniJavaParser.Expression_Context = Expression_Context;

miniJavaParser.prototype.expression_ = function() {

    var localctx = new Expression_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 16, miniJavaParser.RULE_expression_);
    var _la = 0; // Token type
    try {
        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            _la = this._input.LA(1);
            if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (miniJavaParser.T__30 - 31)) | (1 << (miniJavaParser.T__31 - 31)) | (1 << (miniJavaParser.T__32 - 31)) | (1 << (miniJavaParser.T__33 - 31)) | (1 << (miniJavaParser.T__34 - 31)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 218;
            this.expression(0);
            this.state = 219;
            this.expression_();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);

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


miniJavaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

miniJavaParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);
		case 1:
			return this.precpred(this._ctx, 11);
		case 2:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.miniJavaParser = miniJavaParser;
