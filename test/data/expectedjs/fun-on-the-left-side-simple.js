#!/usr/bin/env node
const { functionObject, Complex, assign, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js");

/* End of support code */

let $f;

(($f = functionObject(function ($x) {
  return $x.add(Complex("1"));
}), assign($f, [Complex("2")], Complex("8"), 0)), print($f(Complex("2")))), print($f(Complex("4")));
