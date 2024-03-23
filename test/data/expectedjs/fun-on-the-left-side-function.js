#!/usr/bin/env node
  const { assign, Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2223/pl2223/practicas/functions/functions-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f, $g;

((($f = function($x) {
    return function($y) {
        return $x.add($y);
    };
}, $g = function($y) {
    return $y.mul($y);
}), $f = assign($f, [$g], function($v) {
    return $f($g($v))(Complex("3"));
}, 0)), write($f(Complex("2"))(Complex("3")))), write($f($g)(Complex("4")));
  