  export default [ // funs on the left side
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
]