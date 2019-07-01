'use strict';

const express = require("express");
const models = require("./model/index");

const app = new express();
app.models = models;
app.model = (m) => app.models[m];

const post = app.model("post");

const posts = [
    new post("post 1", "hello"),
    new post("post 2", "world"),
];

app.get('*', (req, res) => {
    console.log({
        path: req.path,
        url: req.url,
        originalUrl: req.originalUrl
    });

    res.json(posts);

    res.end();
});

app.listen(8080);
