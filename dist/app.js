(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let dom = require("./dom-builder"),
    output = document.getElementById("output");

function getPodcast(query, type, count) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.ottoradio.com/v1/podcasts?query=${query}&type=${type}&count=${count}`);
  xhr.onload = function() {
      if (xhr.status === 200) {
          var podcasts = JSON.parse(this.responseText);
          dom.showPodcasts(podcasts);
      }
      else {
          console.log('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
}

module.exports = {getPodcast};
},{"./dom-builder":2}],2:[function(require,module,exports){
"use strict";

let output = document.getElementById("output");
let text = "";

function showPodcasts(podcasts) {
    for (var item in podcasts){
        var podcastObj = podcasts[item];
        text += `<div class="podcastItems">
                    <h3 class="title">${podcastObj.source}</h3>
                    <p class="title">${podcastObj.title}</p>
                    <img class="images" src="${podcastObj.image_url}">
                    <p class="audio"><audio controls><source src="${podcastObj.audio_url}" type="audio/mp3"></audio></p>
                    <p class="description">${podcastObj.description}</p>
                </div>`;
    }
    output.innerHTML = text;
}

module.exports = {showPodcasts};
},{}],3:[function(require,module,exports){
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
    let count = 6;
    console.log(query, type, count);
    db.getPodcast(query, type, count);
});

$("#podcastSubmit").click(function( event ) {
  event.preventDefault();
});

// moreButton.addEventListener("click", function(event) {
    
// });

function populateDefault() {
    let query = "";
    let type = "trending";
    let count = 6;
    db.getPodcast(query, type, count);
}
populateDefault();
},{"./db-interaction":1}]},{},[1,2,3]);
