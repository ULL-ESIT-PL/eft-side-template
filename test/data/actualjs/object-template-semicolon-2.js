#!/usr/bin/env node
  const { functionObject, Complex, assign, write, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $Person, $john, $thom;

((((($Person = functionObject(function($name) {
    return functionObject(function($age) {
        let $this;

        return ((($this = functionObject(function() {
            return Complex("0");
        }), assign($this, ["name"], $name, 0)), assign($this, ["age"], $age, 0)), assign($this, ["greet"], functionObject(function($other) {
            return write("I am ".add($this("name")).add(". Glad to meet you ").add($other));
        }), 0)), assign($this, ["setAge"], functionObject(function($newAge) {
            return write($newAge), assign($this, ["age"], $newAge, 0);
        }), 0);
    });
}), $john = $Person("John")(Complex("25"))), $john("greet")("Juana")), $thom = $Person("Thom")(Complex("78"))), $thom("greet")("Juana")), $thom("setAge")($thom("age").add(Complex("1")))), print($thom("age"));
  