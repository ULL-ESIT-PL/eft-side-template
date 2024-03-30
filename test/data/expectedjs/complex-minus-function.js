#!/usr/bin/env node
  const { functionObject, Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f, $g;

($f = functionObject(function($x) {
    return $x.add(Complex("1"));
}), $g = Complex("10").sub($f)), print($g(Complex("9")));
  