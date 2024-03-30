#!/usr/bin/env node
  const { functionObject, Complex, assign, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $Person, $john;

($Person = functionObject(function($name) {
    let $this;

    return (($this = functionObject(function() {
        return Complex("0");
    }), assign($this, ["name"], $name, 0)), assign($this, ["greet"], functionObject(function($other) {
        return write("I am ".add($this("name")).add(". Glad to meet you ").add($other));
    }), 0)), functionObject(function($age) {
        return assign($this, ["age"], $age, 0);
    });
}), $john = $Person("John")(Complex("25"))), $john("greet")("Juana");
  