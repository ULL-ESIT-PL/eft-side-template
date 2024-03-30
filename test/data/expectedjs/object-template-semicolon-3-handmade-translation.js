#!/usr/bin/env node
const { assign, Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js");

/* End of support code */


let $Person, $thom;

(($Person = function ($name) {
  return function ($age) {
    let $this;

    return (($this = function ($x) {
      return $x;
    }, 
    $this = assign($this, ["name"], $name, 0)), 
    $this = assign($this, ["age"], $age, 0)), 

    $this = assign($this, ["setAge"], function ($person, $newAge) {
      $person.object = assign($person.object, ["age"], $newAge, 0);
      write($person.object("name"), "is", $person.object("age"));
      return $person.object;
    }, 0);

  };
}, 
$thom = { object: $Person("Thom")(Complex("78"))}
),

$thom.object("setAge")($thom, Complex("80"))), 
write($thom.object("name"), "is", $thom.object("age"));
