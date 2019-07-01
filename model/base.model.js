'use strict';

class baseModel {
    constructor(){
        if(this.constructor === baseModel)
            throw "Can't instanciate base model";
        
    }
}

baseModel._methods = [
    "get",
    "post"
];

module.exports = baseModel;