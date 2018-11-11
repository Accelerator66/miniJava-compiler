grammar miniJava;

prog : mainClass ( classDeclaration )* ;
mainClass : 'class' Identifier '{' 'public' 'static' 'void' 'main' '(' 'String' '[' ']' Identifier ')' '{' statement '}' '}' ;
classDeclaration : 'class' Identifier ( 'extends' Identifier )? '{' ( varDeclaration )* ( methodDeclaration )* '}';
varDeclaration : type Identifier ';';
methodDeclaration : 'public' type Identifier '(' ( type Identifier ( ',' type Identifier )* )? ')' '{' ( varDeclaration )* ( statement )* 'return' expression ';' '}';
type : 'int' '[' ']'
| 'boolean'
| 'int'
| 'Identifier'
;
statement : '{' ( statement )* '}'
| 'if' '(' expression ')' statement 'else' statement
| 'while' '(' expression ')' statement
| 'System.out.println' '(' expression ')' ';'
| Identifier '=' expression ';'
| Identifier '[' expression ']' '=' expression ';'
;
expression : Number expression_
| 'true' expression_
| 'false' expression_
| Identifier expression_
| 'this' expression_
| 'new' 'int' '[' expression ']' expression_
| 'new' Identifier '(' ')' expression_
| '!' expression expression_
| '(' expression ')' expression_
;
expression_ : ( ( '&&' | '<' | '+' | '-' | '*' ) expression )*
| ( '[' expression ']' )*
| ( '.' 'length' )*
| ( '.' Identifier '(' ( expression ( ',' expression )* )? ')' )*
;
Number : [0-9]+ ;
Identifier : [a-zA-Z]+ ;
WS : [ \t\r\n]+ -> skip ;