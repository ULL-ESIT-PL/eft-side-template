#!/usr/bin/env node
  const { assign, Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-template/src/support-lib.js"); 
  
/* End of support code */

 
  let $f;

(((($f = function($x) {
    return function($y) {
        return $x.add($y);
    };
}, $f = assign($f, [Complex("2"), Complex("3")], Complex("8"), 0)), write($f(Complex("2"))(Complex("3")))), write($f(Complex("2"))(Complex("5")))), write($f(Complex("3"))(Complex("1")))), write($f(Complex("9"))(Complex("2")));
  