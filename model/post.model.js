'use strict';

const baseModel = require('./base.model');
const Abstracter = require('../Abstracter');

class post extends baseModel {
    constructor(title = "", content = "", date = Date()){
        super();

        this.title = title;
        this.content = content;
        this.date = date;
    }

    get(){
        console.log("Get Post")
    }

    post(){
        console.log("Post post")
    }
}

module.exports = Abstracter(post);