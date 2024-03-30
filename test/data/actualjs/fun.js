#!/usr/bin/env node
  const { functionObject, Complex, assign, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f;

(((($f = functionObject(function($x) {
    return $x.add(Complex("1"));
}), assign($f, [Complex("0").add(Complex("2"))], Complex("8"), 0)), assign($f, [Complex("1").add(Complex("3"))], Complex("1000"), 0)), write($f(Complex("0")))), write($f(Complex("2")))), write($f(Complex("4")));
  