#!/usr/bin/env node
  const { Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-template/src/support-lib.js"); 
  
/* End of support code */

 
  let $a, $b;

(() => {
    let result = false;

    for ($a = Complex("0"); $a.lessThan(Complex("5")); $a = $a.add(Complex("1"))) {
        result = (write("a = ".add($a)), (() => {
            let result = false;

            for ($b = Complex("0"); $b.lessThan($a); $b = $b.add(Complex("1"))) {
                result = write("  b = ".add($b));
            }

            return result;
        })());
    }

    return result;
})();
  