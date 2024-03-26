#!/usr/bin/env node
  const { print, Complex } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f;

$f = function($x) {
    return function($y) {
        return $x.add($y);
    };
}, print($f(Complex("2"))(Complex("3")));
  