
export default [
  /*
  // Arrays
  { // array functions. Simple example. key: arr
    input: "arr.calc",
    actualjs: "arr.js",
    expectedjs: "arr.js",
    expectedout: "arr-out.txt"
  },
  { //a("0") gives the first element of the array due to the implementation
    input: "arr-string-index.calc",
    actualjs: "arr-string-index.js",
    expectedjs: "arr-string-index.js",
    expectedout: "arr-string-index-out.txt"
  },
  // Array properties
  { // property length of array
    input: "arr-length.calc",
    actualjs: "arr-length.js",
    expectedjs: "arr-length.js",
    expectedout: "arr-length-out.txt"
  },
  // Array methods
  {  // array concat method test
    input: "arr-concat.calc",
    actualjs: "arr-concat.js",
    expectedjs: "arr-concat.js",
    expectedout: "arr-concat-out.txt"
  },
  { 
    input: "arr-concat2.calc",
    actualjs: "arr-concat2.js",
    expectedjs: "arr-concat2.js",
    expectedout: "arr-concat2-out.txt"
  },
  { 
    input: "arr-concat-manyargs.calc",
    actualjs: "arr-concat-manyargs.js",
    expectedjs: "arr-concat-manyargs.js",
    expectedout: "arr-concat-manyargs-out.txt"
  },
  { // concat with array argument b = a("concat")([12; 13])
    input: "arr-concat-manyargs2.calc",
    actualjs: "arr-concat-manyargs2.js",
    expectedjs: "arr-concat-manyargs2.js",
    expectedout: "arr-concat-manyargs2-out.txt"
  },
  { // array map method test
    input: "arr-map.calc",
    actualjs: "arr-map.js",
    expectedjs: "arr-map.js",
    expectedout: "arr-map-out.txt"
  },
  { // Expressions like ([4; 3i; -i])(0) 
    input: "arr-expression.calc",
    actualjs: "arr-expression.js",
    expectedjs: "arr-expression.js",
    expectedout: "arr-expression-out.txt"
  },
  { 
    input: "arr-mul.calc",
    actualjs: "arr-mul.js",
    expectedjs: "arr-mul.js",
    expectedout: "arr-mul-out.txt"
  },
  { 
    input: "arr-div.calc",
    actualjs: "arr-div.js",
    expectedjs: "arr-div.js",
    expectedout: "arr-div-out.txt"
  },
  { 
    input: "arr-neg.calc",
    actualjs: "arr-neg.js",
    expectedjs: "arr-neg.js",
    expectedout: "arr-neg-out.txt"
  },
  { 
    input: "arr-tostring.calc",
    actualjs: "arr-tostring.js",
    expectedjs: "arr-tostring.js",
    expectedout: "arr-tostring-out.txt"
  },
  { 
    input: "arr-nested.calc",
    actualjs: "arr-nested.js",
    expectedjs: "arr-nested.js",
    expectedout: "arr-nested-out.txt"
  },
  { 
    input: "arr-with-functions.calc",
    actualjs: "arr-with-functions.js",
    expectedjs: "arr-with-functions.js",
    expectedout: "arr-with-functions.txt"
  },
  { 
    input: "arr-neg-indices.calc",
    actualjs: "arr-neg-indices.js",
    expectedjs: "arr-neg-indices.js",
    expectedout: "arr-neg-indices.txt"
  }, 
  { 
    input: "arr-neg-indices-last.calc",
    actualjs: "arr-neg-indices-last.js",
    expectedjs: "arr-neg-indices-last.js",
    expectedout: "arr-neg-indices-last-out.txt"
  },
  { 
    input: "arr-float-index.calc",
    actualjs: "arr-float-index.js",
    expectedjs: "arr-float-index.js",
    expectedout: "arr-float-index-out.txt"
  },
  // array methods with more than one compulsory argument
  { 
    input: "arr-splice.calc",
    actualjs: "arr-splice.js",
    expectedjs: "arr-splice.js",
    expectedout: "arr-splice-out.txt"
  },
  { 
    input: "arr-splice-semicolon.calc",
    actualjs: "arr-splice-semicolon.js",
    expectedjs: "arr-splice-semicolon.js",
    expectedout: "arr-splice-semicolon-out.txt"
  },
  { 
    input: "arr-copywithin.calc",
    actualjs: "arr-copywithin.js",
    expectedjs: "arr-copywithin.js",
    expectedout: "arr-copywithin-out.txt"
  },
  { 
    input: "arr-copywithin-semicolon.calc",
    actualjs: "arr-copywithin-semicolon.js",
    expectedjs: "arr-copywithin-semicolon.js",
    expectedout: "arr-copywithin-semicolon-out.txt"
  },
  */
  // funs on the left side
  { // left side of assignments with function modification f(1) = 2
    input: "fun.calc",
    actualjs: "fun.js",
    expectedjs: "fun.js",
    expectedout: "fun.txt"
  },
  { // left side of assignments with function modification f(2)(3) = 8
    input: "fun-on-the-left-side.calc",
    actualjs: "fun-on-the-left-side.js",
    expectedjs: "fun-on-the-left-side.js",
    expectedout: "fun-on-the-left-side.txt"
  },
  { /*  f = fun(x) {  fun(y) { fun (z) { x + y + z } } }, f(1) = fun(y) { y*y }, print(f(1)(3)),   #  9  */
    input: "fun-on-the-left-side-3.calc",
    actualjs: "fun-on-the-left-side-3.js",
    expectedjs: "fun-on-the-left-side-3.js",
    expectedout: "fun-on-the-left-side-3-out.txt"
  },
  { 
    input: "fun-on-the-left-side-boolean.calc",
    actualjs: "fun-on-the-left-side-boolean.js",
    expectedjs: "fun-on-the-left-side-boolean.js",
    expectedout: "fun-on-the-left-side-boolean-out.txt"
  },
  { 
    input: "fun-on-the-left-side-string.calc",
    actualjs: "fun-on-the-left-side-string.js",
    expectedjs: "fun-on-the-left-side-string.js",
    expectedout: "fun-on-the-left-side-string-out.txt"
  },
  { 
    input: "fun-on-the-left-side-function.calc",
    actualjs: "fun-on-the-left-side-function.js",
    expectedjs: "fun-on-the-left-side-function.js",
    expectedout: "fun-on-the-left-side-function-out.txt"
  },
  { 
    input: "fun-on-the-left-side-simple.calc",
    actualjs: "fun-on-the-left-side-simple.js",
    expectedjs: "fun-on-the-left-side-simple.js",
    expectedout: "fun-on-the-left-side-simple-out.txt"
  },
  { 
    input: "fun-on-the-left-side-multiple.calc",
    actualjs: "fun-on-the-left-side-multiple.js",
    expectedjs: "fun-on-the-left-side-multiple.js",
    expectedout: "fun-on-the-left-side-multiple-out.txt"
  },
  // OOP and Classes
  { 
    input: "object.calc",
    actualjs: "object.js",
    expectedjs: "object.js",
    expectedout: "object-out.txt"
  },
  { 
    input: "object-template.calc",
    actualjs: "object-template.js",
    expectedjs: "object-template.js",
    expectedout: "object-template-out.txt"
  },
  { 
    input: "object-template-semicolon.calc",
    actualjs: "object-template-semicolon.js",
    expectedjs: "object-template-semicolon.js",
    expectedout: "object-template-semicolon-out.txt"
  },
  { 
    input: "object-template-semicolon-2.calc",
    actualjs: "object-template-semicolon-2.js",
    expectedjs: "object-template-semicolon-2.js",
    expectedout: "object-template-semicolon-2-out.txt"
  },
  // funs operations
  {
    input: "complex-minus-function.calc",
    actualjs: "complex-minus-function.js",
    expectedjs: "complex-minus-function.js",
    expectedout: "complex-minus-function.txt"
  },
  {
    input: "complex-div-function.calc",
    actualjs: "complex-div-function.js",
    expectedjs: "complex-div-function.js",
    expectedout: "complex-div-function.txt"
  },
  // several arguments
  { 
    input: "fun-manyargs.calc",
    actualjs: "fun-manyargs.js",
    expectedjs: "fun-manyargs.js",
    expectedout: "fun-manyargs-out.txt"
  },
  // loops while, for
  {
    input: "while.calc",
    actualjs: "while.js",
    expectedjs: "while.js",
    expectedout: "while.txt"
  },
  {
    input: "while-while.calc",
    actualjs: "while-while.js",
    expectedjs: "while-while.js",
    expectedout: "while-while.txt"
  },
  {
    input: "while-sum.calc",
    actualjs: "while-sum.js",
    expectedjs: "while-sum.js",
    expectedout: "while-sum.txt"
  },
  {
    input: "while-nested.calc",
    actualjs: "while-nested.js",
    expectedjs: "while-nested.js",
    expectedout: "while-nested.txt"
  },
  {
    input: "for-loop.calc",
    actualjs: "for-loop.js",
    expectedjs: "for-loop.js",
    expectedout: "for-loop.txt"
  },
  {
    input: "for-loop-nested.calc",
    actualjs: "for-loop-nested.js",
    expectedjs: "for-loop-nested.js",
    expectedout: "for-loop-nested.txt"
  },
  {
    input: "for-loop-nested-write.calc",
    actualjs: "for-loop-nested-write.js",
    expectedjs: "for-loop-nested-write.js",
    expectedout: "for-loop-nested-write.txt"
  },
  // if
  { 
    input: "if.calc",
    actualjs: "if.js",
    expectedjs: "if.js",
    expectedout: "if-out.txt"
  },
  { 
    input: "if-noelse.calc",
    actualjs: "if-noelse.js",
    expectedjs: "if-noelse.js",
    expectedout: "if-noelse-out.txt"
  },
  // strings
  {
    input: "string-string.calc",
    actualjs: "string-string.js",
    expectedjs: "string-string.js",
    expectedout: "string-string.txt"
  },
  {
    input: "string.calc",
    actualjs: "string.js",
    expectedjs: "string.js",
    expectedout: "string.txt"
  },
  {
    input: "string-add.calc",
    actualjs: "string-add.js",
    expectedjs: "string-add.js",
    expectedout: "string-add.txt"
  },
  { 
    input: "string-times-number.calc",
    actualjs: "string-times-number.js",
    expectedjs: "string-times-number.js",
    expectedout: "string-times-number-out.txt"
  },
  { 
    input: "number-times-string.calc",
    actualjs: "number-times-string.js",
    expectedjs: "number-times-string.js",
    expectedout: "number-times-string-out.txt"
  },
  // fun call
  { 
    input: "test-fun-call-empty.calc",
    actualjs: "test-fun-call-empty.js",
    expectedjs: "test-fun-call-empty.js",
    expectedout: "test-fun-call-empty.txt"
  },
  // recursiveness and short circuit for boolean expressions
  { 
    input: "test-recursive.calc",
    actualjs: "test-recursive.js",
    expectedjs: "test-recursive.js",
    expectedout: "test-recursive-out.txt"
  },
  { 
    input: "test-recursive2.calc",
    actualjs: "test-recursive2.js",
    expectedjs: "test-recursive2.js",
    expectedout: "test-recursive2-out.txt"
  },
  // scope and functions
  {
    "input": "test-fun-scop1.calc",
    "actualjs": "test-fun-scop1.js",
    "expectedjs": "test-fun-scop1.js",
    "expectedout": "test-fun-scop1.txt"
  },
  {
    "input": "test-fun-scop2.calc",
    "actualjs": "test-fun-scop2.js",
    "expectedjs": "test-fun-scop2.js",
    "expectedout": "test-fun-scop2.txt"
  },
  {
    "input": "test-scope2.calc",
    "actualjs": "out-scope2.js",
    "expectedjs": "correct-scope2.js",
    "expectedout": "correct-out-scope2.txt"
  },
  // operations
  {
    "input": "test1.calc",
    "actualjs": "out1.js",
    "expectedjs": "correct1.js",
    "expectedout": "correct-out1.txt"
  },
  {
    "input": "test2.calc",
    "actualjs": "out2.js",
    "expectedjs": "correct2.js",
    "expectedout": "correct-out2.txt"
  },
  {
    "input": "test-exp.calc",
    "actualjs": "out-exp.js",
    "expectedjs": "correct-exp.js",
    "expectedout": "correct-out-exp.txt"
  },
  {
    "input": "test-exp-fact.calc",
    "actualjs": "out-exp-fact.js",
    "expectedjs": "correct-exp-fact.js",
    "expectedout": "correct-out-exp-fact.txt"
  },
  {
    "input": "test4.calc",
    "actualjs": "out4.js",
    "expectedjs": "correct4.js",
    "expectedout": "correct-out4.txt"
  },
  {
    "input": "test-power-power.calc",
    "actualjs": "out-power-power.js",
    "expectedjs": "correct-power-power.js",
    "expectedout": "correct-out-power-power.txt"
  },
  {
    "input": "test-print.calc",
    "actualjs": "out-print.js",
    "expectedjs": "correct-print.js",
    "expectedout": "correct-out-print.txt"
  },
  {
    "input": "test-maxmin.calc",
    "actualjs": "out-maxmin.js",
    "expectedjs": "correct-maxmin.js",
    "expectedout": "correct-out-maxmin.txt"
  },
  {
    "input": "test-mixed.calc",
    "actualjs": "out-mixed.js",
    "expectedjs": "correct-mixed.js",
    "expectedout": "correct-out-mixed.txt"
  },
  {
    "input": "test-assign1.calc",
    "actualjs": "out-assign1.js",
    "expectedjs": "correct-assign1.js",
    "expectedout": "correct-out-assign1.txt"
  },
  //booleans
  {
    "input": "test-logic1.calc",
    "actualjs": "out-logic1.js",
    "expectedjs": "correct-logic1.js",
    "expectedout": "correct-out-logic1.txt"
  }
];
