#!/usr/bin/env node
  const { arr, Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2223/pl2223/practicas/functions/functions-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $a, $b;

(($a = arr(Complex("4"), Complex("3i"), Complex("i").neg()), print("a = ", $a)), $b = $a("map")(function($x) {
    return $x.mul($x);
})), print("b = ", $b);
  