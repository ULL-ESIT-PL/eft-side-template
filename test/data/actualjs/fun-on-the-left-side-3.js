#!/usr/bin/env node
  const { assign, Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f;

(($f = function($x) {
    return function($y) {
        return function($z) {
            return $x.add($y).add($z);
        };
    };
}, $f = assign($f, [Complex("1")], function($y) {
    return $y.mul($y);
}, 0)), print($f(Complex("1"))(Complex("3")))), print($f(Complex("2"))(Complex("3"))(Complex("5")));
  