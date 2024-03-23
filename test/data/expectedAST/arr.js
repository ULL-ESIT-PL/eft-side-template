({
  type: 'AssignmentExpression',
  operator: '=',
  left: { type: 'Identifier', name: '$a' },
  right: {
    type: 'CallExpression',
    callee: { type: 'Identifier', name: 'assign' },
    arguments: [
      { type: 'Identifier', name: '$a' },
      {
        type: 'ArrayExpression',
        elements: [
          [
            {
              type: 'CallExpression',
              callee: { type: 'Identifier', name: 'Complex' },
              arguments: [ { type: 'Literal', value: '1', raw: '"1"' } ]
            }
          ]
        ]
      },
      {
        type: 'CallExpression',
        callee: { type: 'Identifier', name: 'Complex' },
        arguments: [ { type: 'Literal', value: '333', raw: '"333"' } ]
      },
      { type: 'Literal', value: 0 }
    ]
  }
})