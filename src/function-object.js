const CallableInstance = require("callable-instance");

class FunctionObject extends CallableInstance {
    constructor(a) {
        // CallableInstance accepts the name of the property to use as the callable
        // method.
        super("_call");
        this.function = a;
    }

    _call(arg) {
       // fill it
    }

    toFunction() {
        return this.function;
    }

    toString() {
        return this.function.toString();
    }
}

function functionObject(a) {
    return new FunctionObject(a);
}

module.exports = { functionObject, FunctionObject };