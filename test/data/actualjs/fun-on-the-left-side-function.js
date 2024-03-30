#!/usr/bin/env node
  const { functionObject, assign, Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f, $g;

((($f = functionObject(function($x) {
    return functionObject(function($y) {
        return $x.add($y);
    });
}), $g = functionObject(function($y) {
    return $y.mul($y);
})), assign($f, [$g], functionObject(function($v) {
    return $f($g($v))(Complex("3"));
}), 0)), write($f(Complex("2"))(Complex("3")))), write($f($g)(Complex("4")));
  