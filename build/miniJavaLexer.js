// Generated from grammar\miniJava.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002(\u00fd\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003%\u0006",
    "%\u00ee\n%\r%\u000e%\u00ef\u0003&\u0006&\u00f3\n&\r&\u000e&\u00f4\u0003",
    "\'\u0006\'\u00f8\n\'\r\'\u000e\'\u00f9\u0003\'\u0003\'\u0002\u0002(",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010",
    "\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u0019",
    "1\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'M(\u0003",
    "\u0002\u0005\u0003\u00022;\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0002\u00ff\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002",
    "7\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003",
    "\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002",
    "\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002",
    "\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002",
    "\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002",
    "M\u0003\u0002\u0002\u0002\u0003O\u0003\u0002\u0002\u0002\u0005U\u0003",
    "\u0002\u0002\u0002\u0007W\u0003\u0002\u0002\u0002\t^\u0003\u0002\u0002",
    "\u0002\u000be\u0003\u0002\u0002\u0002\rj\u0003\u0002\u0002\u0002\u000f",
    "o\u0003\u0002\u0002\u0002\u0011q\u0003\u0002\u0002\u0002\u0013x\u0003",
    "\u0002\u0002\u0002\u0015z\u0003\u0002\u0002\u0002\u0017|\u0003\u0002",
    "\u0002\u0002\u0019~\u0003\u0002\u0002\u0002\u001b\u0080\u0003\u0002",
    "\u0002\u0002\u001d\u0088\u0003\u0002\u0002\u0002\u001f\u008a\u0003\u0002",
    "\u0002\u0002!\u008c\u0003\u0002\u0002\u0002#\u0093\u0003\u0002\u0002",
    "\u0002%\u0097\u0003\u0002\u0002\u0002\'\u009f\u0003\u0002\u0002\u0002",
    ")\u00a2\u0003\u0002\u0002\u0002+\u00a7\u0003\u0002\u0002\u0002-\u00ad",
    "\u0003\u0002\u0002\u0002/\u00c0\u0003\u0002\u0002\u00021\u00c2\u0003",
    "\u0002\u0002\u00023\u00c4\u0003\u0002\u0002\u00025\u00cb\u0003\u0002",
    "\u0002\u00027\u00cd\u0003\u0002\u0002\u00029\u00d1\u0003\u0002\u0002",
    "\u0002;\u00d3\u0003\u0002\u0002\u0002=\u00d5\u0003\u0002\u0002\u0002",
    "?\u00d7\u0003\u0002\u0002\u0002A\u00d9\u0003\u0002\u0002\u0002C\u00dc",
    "\u0003\u0002\u0002\u0002E\u00e1\u0003\u0002\u0002\u0002G\u00e7\u0003",
    "\u0002\u0002\u0002I\u00ed\u0003\u0002\u0002\u0002K\u00f2\u0003\u0002",
    "\u0002\u0002M\u00f7\u0003\u0002\u0002\u0002OP\u0007e\u0002\u0002PQ\u0007",
    "n\u0002\u0002QR\u0007c\u0002\u0002RS\u0007u\u0002\u0002ST\u0007u\u0002",
    "\u0002T\u0004\u0003\u0002\u0002\u0002UV\u0007}\u0002\u0002V\u0006\u0003",
    "\u0002\u0002\u0002WX\u0007r\u0002\u0002XY\u0007w\u0002\u0002YZ\u0007",
    "d\u0002\u0002Z[\u0007n\u0002\u0002[\\\u0007k\u0002\u0002\\]\u0007e\u0002",
    "\u0002]\b\u0003\u0002\u0002\u0002^_\u0007u\u0002\u0002_`\u0007v\u0002",
    "\u0002`a\u0007c\u0002\u0002ab\u0007v\u0002\u0002bc\u0007k\u0002\u0002",
    "cd\u0007e\u0002\u0002d\n\u0003\u0002\u0002\u0002ef\u0007x\u0002\u0002",
    "fg\u0007q\u0002\u0002gh\u0007k\u0002\u0002hi\u0007f\u0002\u0002i\f\u0003",
    "\u0002\u0002\u0002jk\u0007o\u0002\u0002kl\u0007c\u0002\u0002lm\u0007",
    "k\u0002\u0002mn\u0007p\u0002\u0002n\u000e\u0003\u0002\u0002\u0002op",
    "\u0007*\u0002\u0002p\u0010\u0003\u0002\u0002\u0002qr\u0007U\u0002\u0002",
    "rs\u0007v\u0002\u0002st\u0007t\u0002\u0002tu\u0007k\u0002\u0002uv\u0007",
    "p\u0002\u0002vw\u0007i\u0002\u0002w\u0012\u0003\u0002\u0002\u0002xy",
    "\u0007]\u0002\u0002y\u0014\u0003\u0002\u0002\u0002z{\u0007_\u0002\u0002",
    "{\u0016\u0003\u0002\u0002\u0002|}\u0007+\u0002\u0002}\u0018\u0003\u0002",
    "\u0002\u0002~\u007f\u0007\u007f\u0002\u0002\u007f\u001a\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0007g\u0002\u0002\u0081\u0082\u0007z\u0002",
    "\u0002\u0082\u0083\u0007v\u0002\u0002\u0083\u0084\u0007g\u0002\u0002",
    "\u0084\u0085\u0007p\u0002\u0002\u0085\u0086\u0007f\u0002\u0002\u0086",
    "\u0087\u0007u\u0002\u0002\u0087\u001c\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0007=\u0002\u0002\u0089\u001e\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0007.\u0002\u0002\u008b \u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0007t\u0002\u0002\u008d\u008e\u0007g\u0002\u0002\u008e\u008f\u0007",
    "v\u0002\u0002\u008f\u0090\u0007w\u0002\u0002\u0090\u0091\u0007t\u0002",
    "\u0002\u0091\u0092\u0007p\u0002\u0002\u0092\"\u0003\u0002\u0002\u0002",
    "\u0093\u0094\u0007k\u0002\u0002\u0094\u0095\u0007p\u0002\u0002\u0095",
    "\u0096\u0007v\u0002\u0002\u0096$\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0007d\u0002\u0002\u0098\u0099\u0007q\u0002\u0002\u0099\u009a\u0007",
    "q\u0002\u0002\u009a\u009b\u0007n\u0002\u0002\u009b\u009c\u0007g\u0002",
    "\u0002\u009c\u009d\u0007c\u0002\u0002\u009d\u009e\u0007p\u0002\u0002",
    "\u009e&\u0003\u0002\u0002\u0002\u009f\u00a0\u0007k\u0002\u0002\u00a0",
    "\u00a1\u0007h\u0002\u0002\u00a1(\u0003\u0002\u0002\u0002\u00a2\u00a3",
    "\u0007g\u0002\u0002\u00a3\u00a4\u0007n\u0002\u0002\u00a4\u00a5\u0007",
    "u\u0002\u0002\u00a5\u00a6\u0007g\u0002\u0002\u00a6*\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\u0007y\u0002\u0002\u00a8\u00a9\u0007j\u0002\u0002",
    "\u00a9\u00aa\u0007k\u0002\u0002\u00aa\u00ab\u0007n\u0002\u0002\u00ab",
    "\u00ac\u0007g\u0002\u0002\u00ac,\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u0007U\u0002\u0002\u00ae\u00af\u0007{\u0002\u0002\u00af\u00b0\u0007",
    "u\u0002\u0002\u00b0\u00b1\u0007v\u0002\u0002\u00b1\u00b2\u0007g\u0002",
    "\u0002\u00b2\u00b3\u0007o\u0002\u0002\u00b3\u00b4\u00070\u0002\u0002",
    "\u00b4\u00b5\u0007q\u0002\u0002\u00b5\u00b6\u0007w\u0002\u0002\u00b6",
    "\u00b7\u0007v\u0002\u0002\u00b7\u00b8\u00070\u0002\u0002\u00b8\u00b9",
    "\u0007r\u0002\u0002\u00b9\u00ba\u0007t\u0002\u0002\u00ba\u00bb\u0007",
    "k\u0002\u0002\u00bb\u00bc\u0007p\u0002\u0002\u00bc\u00bd\u0007v\u0002",
    "\u0002\u00bd\u00be\u0007n\u0002\u0002\u00be\u00bf\u0007p\u0002\u0002",
    "\u00bf.\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007?\u0002\u0002\u00c1",
    "0\u0003\u0002\u0002\u0002\u00c2\u00c3\u00070\u0002\u0002\u00c32\u0003",
    "\u0002\u0002\u0002\u00c4\u00c5\u0007n\u0002\u0002\u00c5\u00c6\u0007",
    "g\u0002\u0002\u00c6\u00c7\u0007p\u0002\u0002\u00c7\u00c8\u0007i\u0002",
    "\u0002\u00c8\u00c9\u0007v\u0002\u0002\u00c9\u00ca\u0007j\u0002\u0002",
    "\u00ca4\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007#\u0002\u0002\u00cc",
    "6\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007p\u0002\u0002\u00ce\u00cf",
    "\u0007g\u0002\u0002\u00cf\u00d0\u0007y\u0002\u0002\u00d08\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0007,\u0002\u0002\u00d2:\u0003\u0002\u0002",
    "\u0002\u00d3\u00d4\u0007-\u0002\u0002\u00d4<\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\u0007/\u0002\u0002\u00d6>\u0003\u0002\u0002\u0002\u00d7",
    "\u00d8\u0007>\u0002\u0002\u00d8@\u0003\u0002\u0002\u0002\u00d9\u00da",
    "\u0007(\u0002\u0002\u00da\u00db\u0007(\u0002\u0002\u00dbB\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\u0007v\u0002\u0002\u00dd\u00de\u0007t\u0002",
    "\u0002\u00de\u00df\u0007w\u0002\u0002\u00df\u00e0\u0007g\u0002\u0002",
    "\u00e0D\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007h\u0002\u0002\u00e2",
    "\u00e3\u0007c\u0002\u0002\u00e3\u00e4\u0007n\u0002\u0002\u00e4\u00e5",
    "\u0007u\u0002\u0002\u00e5\u00e6\u0007g\u0002\u0002\u00e6F\u0003\u0002",
    "\u0002\u0002\u00e7\u00e8\u0007v\u0002\u0002\u00e8\u00e9\u0007j\u0002",
    "\u0002\u00e9\u00ea\u0007k\u0002\u0002\u00ea\u00eb\u0007u\u0002\u0002",
    "\u00ebH\u0003\u0002\u0002\u0002\u00ec\u00ee\t\u0002\u0002\u0002\u00ed",
    "\u00ec\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef",
    "\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0",
    "J\u0003\u0002\u0002\u0002\u00f1\u00f3\t\u0003\u0002\u0002\u00f2\u00f1",
    "\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f2",
    "\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5L",
    "\u0003\u0002\u0002\u0002\u00f6\u00f8\t\u0004\u0002\u0002\u00f7\u00f6",
    "\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00f7",
    "\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00fb",
    "\u0003\u0002\u0002\u0002\u00fb\u00fc\b\'\u0002\u0002\u00fcN\u0003\u0002",
    "\u0002\u0002\u0006\u0002\u00ef\u00f4\u00f9\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function miniJavaLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

miniJavaLexer.prototype = Object.create(antlr4.Lexer.prototype);
miniJavaLexer.prototype.constructor = miniJavaLexer;

Object.defineProperty(miniJavaLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

miniJavaLexer.EOF = antlr4.Token.EOF;
miniJavaLexer.T__0 = 1;
miniJavaLexer.T__1 = 2;
miniJavaLexer.T__2 = 3;
miniJavaLexer.T__3 = 4;
miniJavaLexer.T__4 = 5;
miniJavaLexer.T__5 = 6;
miniJavaLexer.T__6 = 7;
miniJavaLexer.T__7 = 8;
miniJavaLexer.T__8 = 9;
miniJavaLexer.T__9 = 10;
miniJavaLexer.T__10 = 11;
miniJavaLexer.T__11 = 12;
miniJavaLexer.T__12 = 13;
miniJavaLexer.T__13 = 14;
miniJavaLexer.T__14 = 15;
miniJavaLexer.T__15 = 16;
miniJavaLexer.T__16 = 17;
miniJavaLexer.T__17 = 18;
miniJavaLexer.T__18 = 19;
miniJavaLexer.T__19 = 20;
miniJavaLexer.T__20 = 21;
miniJavaLexer.T__21 = 22;
miniJavaLexer.T__22 = 23;
miniJavaLexer.T__23 = 24;
miniJavaLexer.T__24 = 25;
miniJavaLexer.T__25 = 26;
miniJavaLexer.T__26 = 27;
miniJavaLexer.T__27 = 28;
miniJavaLexer.T__28 = 29;
miniJavaLexer.T__29 = 30;
miniJavaLexer.T__30 = 31;
miniJavaLexer.T__31 = 32;
miniJavaLexer.T__32 = 33;
miniJavaLexer.T__33 = 34;
miniJavaLexer.T__34 = 35;
miniJavaLexer.Number = 36;
miniJavaLexer.Identifier = 37;
miniJavaLexer.WS = 38;

miniJavaLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

miniJavaLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

miniJavaLexer.prototype.literalNames = [ null, "'class'", "'{'", "'public'", 
                                         "'static'", "'void'", "'main'", 
                                         "'('", "'String'", "'['", "']'", 
                                         "')'", "'}'", "'extends'", "';'", 
                                         "','", "'return'", "'int'", "'boolean'", 
                                         "'if'", "'else'", "'while'", "'System.out.println'", 
                                         "'='", "'.'", "'length'", "'!'", 
                                         "'new'", "'*'", "'+'", "'-'", "'<'", 
                                         "'&&'", "'true'", "'false'", "'this'" ];

miniJavaLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                          null, null, null, null, null, 
                                          null, null, null, null, null, 
                                          null, null, null, null, null, 
                                          null, null, null, null, null, 
                                          null, null, null, null, null, 
                                          null, null, null, null, null, 
                                          null, "Number", "Identifier", 
                                          "WS" ];

miniJavaLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                      "T__5", "T__6", "T__7", "T__8", "T__9", 
                                      "T__10", "T__11", "T__12", "T__13", 
                                      "T__14", "T__15", "T__16", "T__17", 
                                      "T__18", "T__19", "T__20", "T__21", 
                                      "T__22", "T__23", "T__24", "T__25", 
                                      "T__26", "T__27", "T__28", "T__29", 
                                      "T__30", "T__31", "T__32", "T__33", 
                                      "T__34", "Number", "Identifier", "WS" ];

miniJavaLexer.prototype.grammarFileName = "miniJava.g4";



exports.miniJavaLexer = miniJavaLexer;

