require('./monkey-patch.js');
let Complex = require('complex.js');

Complex.prototype.lessThan = function (other) {
  if (this.re < other.re) return true;
  if (this.re == other.re && this.im < other.im) return true; 
  return false;
}

Complex.prototype.greaterThan = function (other) {
  if (this.re > other.re) return true;
  if (this.re == other.re && this.im > other.im) return true; 
  return false;
}

Complex.prototype.isReal = function () {
  return this.im === 0;
}

Complex.prototype.isImaginary = function () {
  return this.re === 0;
}

Complex.prototype.isInteger = function () {
  return this.im === 0 && Number.isInteger(this.re);
}

let Operators = new Set(['add', 'sub', 'mul', 'div', 'equals', 'pow', 'neg', 'lessThan'])

let oldComplex = Object.create(null); // no prototype
for (let op of Operators) {

  oldComplex[op] = Complex.prototype[op];
  Complex.prototype[op] = function (other) {
   // console.log(op, other)
    try {
      if (typeof other === 'function') {
        if (op === 'equals') return false; // A complex is never equal to a function?
        return (...x) => this[op](other(...x));

      }
      if (typeof other === 'boolean') return this[op](Complex(Number(other)));
      if (typeof other === 'string') {
        switch (op) {
          case 'equals': return false; // A complex is never equal to a string
          case 'add': return this.add(Complex(other)); // A complex number added to a string is the string converted to a complex number
          case 'sub': return this.sub(Complex(other)); // A complex number subtracted by a string is the string converted to a complex number
          case 'mul': {
            if (this < 0) {
              let reverse = [...other].reverse().join('');
              return reverse.repeat(-this);
            }
            return other.repeat(parseInt(this.re)); // A complex number multiplied by a string is the string repeated n times
          }
          case 'div': return this.div(Complex(other)); // A complex number divided by a string is the string converted to a complex number
          case 'pow': return this.pow(Complex(other)); // A complex number raised to the power of a string is the string converted to a complex number
          default: throw new Error(`Complex numbers do not support "${op}" operation for type "string"`)
        }
      }
      return oldComplex[op].call(this, other)
    }
    catch (e) {
      throw new Error(`Complex numbers do not support "${op}" operation for type "${other}"\n${e}`)
    }
  }
}

Complex.prototype.call = function (other) {
  return this
}

module.exports = Complex;
