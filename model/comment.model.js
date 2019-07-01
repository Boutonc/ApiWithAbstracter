'use strict';

const baseModel = require('./base.model');
const Abstracter = require('../Abstracter');

class comment extends baseModel {
    constructor() {
        super();
    }

    get() {
        console.log("Get comment");
    }

    post(){
        console.log("Post comment");
    }
}

module.exports = Abstracter(comment);