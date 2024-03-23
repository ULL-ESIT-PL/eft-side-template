#!/usr/bin/env node
  const { Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2223/pl2223/practicas/functions/functions-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f, $g;

($f = function($x) {
    return $x.add(Complex("1"));
}, $g = Complex("10").sub($f)), print($g(Complex("9")));
  