#!/usr/bin/env node
  const { functionObject, assign, Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $obj;

((($obj = functionObject(function($x) {
    return $x;
}), assign($obj, ["name"], "John", 0)), assign($obj, ["age"], Complex("42"), 0)), assign($obj, ["greet"], functionObject(function($other) {
    return write(
        "I am ".add($obj("name")).add(". I am ").add($obj("age")).add(" years old. Glad to meet you ").add($other)
    );
}), 0)), $obj("greet")("Juana");
  