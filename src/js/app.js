"use strict";

var $ = require("jquery");

window.addEventListener("load", function() {
    new FastClick(document.body);
}, false);

function main() {
    let message = "Hello world";
    console.log(message);
}

$(main);
