%{
const { 
  buildRoot, 
  buildBinaryExpression, 
  buildLiteral, 
  buildUnaryExpression,
  buildCallExpression, 
  //buildIdentifierOrCalls,
  buildIdentifier,
  buildAssignmentExpression,
  buildSequenceExpression,
  buildCallMemberExpression,
  buildMax,
  buildMin,
  buildArrowFunctionExpression,
  buildFunctionExpression,
  buildLogicalExpression,
  buildParOrCallExpression,
  buildWhileExpression,
  buildForExpression
} = require('./ast-build');
// Prefix with '$'' all user input variables to avoid collisions with our own compiler variables
const {$} = require('./utils.js')
%}

%left ','
%right '='
%nonassoc '<' '>'
%left '&&' '||'
%nonassoc '==' 
%left '@'
%left '&'
%left '-' '+'
%left '*' '/'
%nonassoc UMINUS
%right '**'
%left '!'
%%
es: e { return { ast: buildRoot($e) }; }
;

e: 
    e ',' e             { $$ = buildSequenceExpression([$e1, $e2])  }
  | ID apply '=' e      { $$ = buildAssignmentExpression($($ID), $apply, '=', $e); }
  | e '==' e            { $$ = buildCallMemberExpression($e1, 'equals', [$e2]); }   
  | e '<' e             { $$ = buildCallMemberExpression($e1, 'lessThan', [$e2]); } 
  | e '>' e             { $$ = buildCallMemberExpression($e1, 'greaterThan', [$e2]); }   
  | e '&&' e            { $$ = buildLogicalExpression($e1, '&&', $e2); }   
  | e '||' e            { $$ = buildLogicalExpression($e1, '||', $e2); } 
  | '!' e               { $$ = buildUnaryExpression('!', $e); }  
  | e '@' e             { $$ = buildMax($e1, $e2, true); }
  | e '&' e             { $$ = buildMin($e1, $e2, true); }
  | e '-' e             { $$ = buildCallMemberExpression($e1, 'sub', [$e2]); }
  | e '+' e             { $$ = buildCallMemberExpression($e1, 'add', [$e2]); }
  | e '*' e             { $$ = buildCallMemberExpression($e1, 'mul', [$e2]); }
  | e '/' e             { $$ = buildCallMemberExpression($e1, 'div', [$e2]); }
  | e '**' e            { $$ = buildCallMemberExpression($e1, 'pow', [$e2]); }
  | '(' e ')'  apply    { $$ = buildParOrCallExpression($e, $apply); }
  | '-' e %prec UMINUS  { $$ = buildCallMemberExpression($e, 'neg', []); }
  | e '!'               { $$ = buildCallExpression('factorial', [$e], true); }
  | N                   { $$ = buildCallExpression('Complex',[buildLiteral($N)], true); }
  | TRUE                { $$ = buildLiteral(true); }
  | FALSE               { $$ = buildLiteral(false); }
  | STRING              { $$ = buildLiteral($STRING); }
  | WHILE e '{' e '}'   { $$ = buildWhileExpression($e1, $e2); }
  | FOR '(' e ';'  e ';'  e ')'  '{' e '}'   
                        { $$ = buildForExpression($e1, $e2, $e3, $e4); }
  | PID '(' eListEmpty ')'   { $$ = buildCallExpression($PID, $eListEmpty, true); }
  | ID  apply           { $$ = buildParOrCallExpression(buildIdentifier($($ID)), $apply); }
  | FUN '(' idListEmpty ')' '{' e '}'   
                        { $$ = buildFunctionExpression($idListEmpty, $e); } 
;

apply:
    /* empty */      { $$ = []; }
  | '('  ')' apply   { $$ = [ null ].concat($apply); }
  | '(' eList ')' apply  { $$ = $eList.concat($apply); }
;

idList:
  // fill it
;

idListEmpty:
  // fill it
;

eList:
  // fill it
;

eListEmpty:
    /* empty */      { $$ = []; }
  | eList            { $$ = $eList; }
;