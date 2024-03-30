#!/usr/bin/env node
  const { functionObject, assign, Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f;

((($f = functionObject(function($x) {
    return functionObject(function($y) {
        return $x.add($y);
    });
}), assign($f, [true, Complex("3")], Complex("8"), 0)), write($f(true)(Complex("3")))), write($f(true)(Complex("4")))), write($f(Complex("4"))(true));
  