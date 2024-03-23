#!/usr/bin/env node
  const { arr, Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-template/src/support-lib.js"); 
  
/* End of support code */

 
  let $a, $b;

((($a = arr(
    Complex("4").add(Complex("2")),
    Complex("5").add(Complex("3i")),
    Complex("9").sub(Complex("i"))
), print("a = ", $a)), $b = $a("concat")(arr(Complex("12"), Complex("13")))), print("b is of length: ", $b("length"))), print("b = ", $b);
  