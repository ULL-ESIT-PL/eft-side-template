#!/usr/bin/env node
  const { Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $sum, $a;

($sum = $a = Complex("0"), (() => {
    let result = false;

    while ($a.lessThan(Complex("10"))) {
        result = ($sum = $sum.add($a.mul($a)), $a = $a.add(Complex("1")));
    }

    return result;
})()), print($sum);
  