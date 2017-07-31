"use strict";

let db = require("./db-interaction");

let podcastSubmit = document.getElementById("podcastSubmit"),
    podcastQuery = document.getElementById("podcastQuery"),
    podcastType = document.getElementById("podcastType"),
    podcastCount = document.getElementById("podcastCount"),
    output = document.getElementById("output"),
    moreButton = document.getElementById("moreButton");

podcastSubmit.addEventListener("click", function(event) {
    let query = podcastQuery.value;
    let type = podcastType.value;
    let count = 12;
    console.log(query, type, count);
    db.getPodcast(query, type, count);
});

$("#podcastSubmit").click(function( event ) {
  event.preventDefault();
  moreButton.disabled = false;
});

function populateDefault() {
    let query = "";
    let type = "trending";
    let count = 12;
    db.getPodcast(query, type, count);
}
populateDefault();