#!/usr/bin/env node
  const { arr, Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $a;

($a = arr(
    Complex("4").add(Complex("2")),
    Complex("5").add(Complex("3i")),
    Complex("9").sub(Complex("i"))
), print($a("length"))), print($a);
  