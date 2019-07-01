function Abstracter(_class){
    console.log(_class._methods);
    _class._methods.forEach((f) => {
        if(typeof _class.prototype[f] !== "function"){
            throw new TypeError(`${_class.name}.${f}() must be implemented`);
        }
    });
    return _class;
}

module.exports = Abstracter;