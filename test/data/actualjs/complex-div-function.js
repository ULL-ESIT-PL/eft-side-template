#!/usr/bin/env node
  const { Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-template/src/support-lib.js"); 
  
/* End of support code */

 
  let $f, $g;

($f = function($x) {
    return $x.add(Complex("1"));
}, $g = Complex("10").div($f)), print($g(Complex("9")));
  