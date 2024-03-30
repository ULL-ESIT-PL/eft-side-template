#!/usr/bin/env node
  const { functionObject, assign, Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f;

(($f = functionObject(function($x) {
    return functionObject(function($y) {
        return functionObject(function($z) {
            return $x.add($y).add($z);
        });
    });
}), assign($f, [Complex("1")], functionObject(function($y) {
    return $y.mul($y);
}), 0)), print($f(Complex("1"))(Complex("3")))), print($f(Complex("2"))(Complex("3"))(Complex("5")));
  