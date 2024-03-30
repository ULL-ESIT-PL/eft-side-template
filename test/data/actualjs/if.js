#!/usr/bin/env node
  const { Complex, functionObject, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $a, $b, $f;

((($a = Complex("4"), $b = Complex("5")), $f = functionObject(function($a) {
    return functionObject(function($b) {
        return $a.lessThan($b) ? write($a, " < ", $b) : write($a, " ≥ ", $b);
    });
})), $f($a)($b)), $f($b)($a);
  