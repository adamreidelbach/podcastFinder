"use strict";

let db = require("./db-interaction");

let podcastSubmit = document.getElementById("podcastSubmit"),
    podcastQuery = document.getElementById("podcastQuery"),
    podcastType = document.getElementById("podcastType"),
    podcastCount = document.getElementById("podcastCount"),
    output = document.getElementById("output");

podcastSubmit.addEventListener("click", function(event) {
    output.innerHTML = "";
    let value = podcastQuery.value;
    let type = podcastType.value;
    let count = podcastCount.value;
    console.log(value, type, count);
    // db.getPodcast(db.query, db.type, db.count);
});

function populateDefault() {
    let query = "";
    let type = "trending";
    let count = 9;
    db.getPodcast(query, type, count);
}
populateDefault();