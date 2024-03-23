const { $, getIdBack, deb } = require('./utils.js')

function buildRoot(child) {
  return {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: child,
      },
    ],
    sourceType: "script",
  };
}

function buildLiteral(value) {
  return {
    type: "Literal",
    value: value,
    raw: `"${value}"`, // Recast compatibility!! escodegen does not need the extra quotes
  };
}


function buildBinaryExpression(left, op, right) {
  return {
    type: "BinaryExpression",
    left: left,
    operator: op,
    right: right,
  };
}

function buildCallExpression(functionName, arguments, reservedWord = false) {
  return {
    "type": "CallExpression",
    "callee": {
      "type": "Identifier",
      "name": reservedWord ? functionName : $(functionName)
    },
    "arguments": arguments
  }
}


function buildParOrCallExpression(callee, args) {
  // fill it
}

function buildIdentifierOrCalls(name, calls) {
  let id = {
    type: "Identifier",
    name: name,
  };

  return buildParOrCallExpression(id, calls);
}


function buildUnaryExpression(op, argument, prefix) {
  return {
    type: "UnaryExpression",
    operator: op,
    argument: argument,
    prefix: prefix,
  };
}

function buildIdentifier(name) {
  return buildIdentifierOrCalls(name, []);
}

function buildVariableDeclaration(declarations) {
  return {
    type: "VariableDeclaration",
    declarations: declarations,
    kind: "let",
  };
}

function buildVariableDeclarator(id) {
  return {
    type: "VariableDeclarator",
    id: id,
    init: null,
  };
}

function buildAssignmentExpression(name, apply, operator, right) {
  // fill it
}

function buildSequenceExpression(expressions) {
  return {
    type: "SequenceExpression",
    expressions: expressions,
  };
}

function buildUnaryExpression(operator, child, prefix = true) {
  return {
    type: "UnaryExpression",
    operator,
    argument: child,
    prefix
  };
}

function buildCallMemberExpression(caller, names, args) {
  let namesList = names.split('.');
  return {
    type: "CallExpression",
    callee: buildMemberExpression(caller, namesList),
    arguments: args,
  };
}

function buildMemberExpression(caller, names) {
  if (names.length === 1) {
    return {
      type: "MemberExpression",
      property: {
        type: "Identifier",
        name: names.pop()
      },
      object: caller
    };
  }
  return {
    type: "MemberExpression",
    property: {
      type: "Identifier",
      name: names.pop()
    },
    object: buildMemberExpression(caller, names),
  };
}

function buildMin(left, right, reservedWord = false) {
  return buildCallExpression('min', [left, right], reservedWord);
}

function buildMax(left, right, reservedWord = false) {
  return buildCallExpression('max', [left, right], reservedWord);
}

function buildLogicalExpression(left, operator, right) {
  return {
    type: "LogicalExpression",
    left: left,
    operator: operator,
    right: right,
  };
}

// See for instance: compast -jp 'x => { return x }' | jq '.body[0].expression'
function buildArrowFunctionExpression(params, body) {
  // fill it if needed
}

function buildFunctionExpression(params, exp) {
  // fill it
}

function buildWhileExpression(test, body) {
  // fill it
}

function buildForExpression(init, test, update, body) {
  // fill it
}

module.exports = {
  buildArrowFunctionExpression,
  buildAssignmentExpression,
  buildBinaryExpression,
  buildCallExpression,
  buildCallMemberExpression,
  buildFunctionExpression,
  buildIdentifier,
  buildIdentifierOrCalls,
  buildLiteral,
  buildLogicalExpression,
  buildMax,
  buildMin,
  buildParOrCallExpression,
  buildRoot,
  buildSequenceExpression,
  buildUnaryExpression,
  buildVariableDeclaration,
  buildVariableDeclarator,
  buildWhileExpression,
  buildForExpression,
}