#!/usr/bin/env node
  const { functionObject, Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $fact;

$fact = functionObject(function($n) {
    return $n.equals(Complex("0")) && Complex("1") || $n.mul($fact($n.sub(Complex("1"))));
}), write($fact(Complex("4")));
  