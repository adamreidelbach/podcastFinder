"use strict";

let db = require("./db-interaction");

let podcastSubmit = document.getElementById("podcastSubmit"),
    podcastQuery = document.getElementById("podcastQuery"),
    podcastType = document.getElementById("podcastType"),
    podcastCount = document.getElementById("podcastCount");

podcastSubmit.addEventListener("click", function() {
    db.query = podcastQuery.value;
    db.type = podcastType.value;
    db.count = podcastType.value;
    db.getPodcast(db.query, db.type, db.count);
});
