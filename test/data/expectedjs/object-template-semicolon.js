#!/usr/bin/env node
  const { Complex, assign, write } = require("/Users/casianorodriguezleon/campus-virtual/2223/pl2223/practicas/functions/functions-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $Person, $john;

($Person = function($name) {
    return function($age) {
        let $this;

        return (($this = function() {
            return Complex("0");
        }, $this = assign($this, ["name"], $name, 0)), $this = assign($this, ["greet"], function($other) {
            return write("I am ".add($this("name")).add(". Glad to meet you ").add($other));
        }, 0)), $this = assign($this, ["age"], $age, 0);
    };
}, $john = $Person("John")(Complex("25"))), $john("greet")("Juana");
  