
export default [
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
  { // array map method test
    input: "arr-map.calc",
    actualjs: "arr-map.js",
    expectedjs: "arr-map.js",
    expectedout: "arr-map-out.txt"
  },
  { // concat with array argument b = a("concat")([12; 13])
    input: "arr-concat-manyargs2.calc",
    actualjs: "arr-concat-manyargs2.js",
    expectedjs: "arr-concat-manyargs2.js",
    expectedout: "arr-concat-manyargs2-out.txt"
  },
  { // Expressions like ([4; 3i; -i])(0) 
    input: "arr-expression.calc",
    actualjs: "arr-expression.js",
    expectedjs: "arr-expression.js",
    expectedout: "arr-expression-out.txt"
  },
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
  // fun call
  {
    "input": "test-fun-call-empty.calc",
    "actualjs": "fun-call-empty.js",
    "expectedjs": "fun-call-empty.js",
    "expectedout": "fun-call-empty.txt"
  },
  // recursiveness and short circuit for boolean expressions
  {
    "input": "test-recursive.calc",
    "actualjs": "out-recursive.js",
    "expectedjs": "correct-recursive.js",
    "expectedout": "correct-out-recursive.txt"
  },
  {
    "input": "test-recursive2.calc",
    "actualjs": "out-recursive2.js",
    "expectedjs": "correct-recursive2.js",
    "expectedout": "correct-out-recursive2.txt"
  },
  // scope and functions
  {
    "input": "test-fun-scop1.calc",
    "actualjs": "out-fun-scop1.js",
    "expectedjs": "correct-fun-scop1.js",
    "expectedout": "correct-out-fun-scop1.txt"
  },
  {
    "input": "test-fun-scop2.calc",
    "actualjs": "out-fun-scop2.js",
    "expectedjs": "correct-fun-scop2.js",
    "expectedout": "correct-out-fun-scop2.txt"
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
