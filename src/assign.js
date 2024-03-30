function assign(oF, cacheArgs, cacheValue, i) {
    let f;
    if (oF?.constructor?.name === "FunctionObject") {
        f = oF.toFunction();
        //console.log(`FunctionObject in assign`)
    } else {
        //console.log(`Not a FunctionObject in assign`)
        f = oF;
    }
    //console.log('f', f.toString().slice(0,8), cacheArgs, cacheValue, i);
    oF.function = _assign(f, cacheArgs, cacheValue, i);
    return oF;    
}

function _assign(f, cacheArgs, cacheValue, i) {
// fill it
}

module.exports = { assign };