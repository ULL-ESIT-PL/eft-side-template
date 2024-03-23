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

let Operators = new Set(['add', 'sub', 'mul', 'div', 'equals', 'pow', 'neg', 'lessThan'])

let oldComplex = Object.create(null); // no prototype
for (let op of Operators) {
  oldComplex[op] = Complex.prototype[op];
  Complex.prototype[op] = function (other) {
    try {
      if (typeof other === 'function') {
        if (op === 'equals') return false; // A complex is never equal to a function?
        return (...x) => this[op](other(...x));

      }
      if (typeof other === 'boolean') return this[op](Complex(Number(other)));
      if (typeof other === 'string') return (...x) => (this.toString())[op](other(...x));
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
