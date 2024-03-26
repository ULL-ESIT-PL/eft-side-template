#!/usr/bin/env node
  const { arr, Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $a, $b;

((($a = arr(
    Complex("4").add(Complex("2")),
    Complex("5").add(Complex("3i")),
    Complex("9").sub(Complex("i")),
    Complex("13")
), $b = $a("splice")("length")), $b = $a("splice")(Complex("2"))(Complex("1"))), print($a)), print($b);
  