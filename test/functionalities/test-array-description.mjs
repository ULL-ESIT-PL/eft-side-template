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
]