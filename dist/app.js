(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let dom = require("./dom-builder");

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
        console.log(podcastObj);
        text += `<div class="podcastItems">
                    <h3 class="title">${podcastObj.title}</h3>
                    <img class="images" src="${podcastObj.image_url}">
                    <p class="audio"><audio controls><source src="${podcastObj.audio_url}" type="audio/mp3"></audio></p>
                    <p class="description">${podcastObj.description}</p>
                </div>`;
    }
    output.innerHTML = text;
}

module.exports = {showPodcasts};


// text += `<div class="podcastItems">
//                     <h3 class="title">${podcastObj.title}</h3>
//                     <p><img class="images" src="${podcastObj.image_url}"><p>
//                     <p class="audio"><audio controls><source src="${podcastObj.audio_url}" type="audio/mp3"></audio></p>
//                     <p class="description">${podcastObj.description}</p>
//                 </div>`;
},{}],3:[function(require,module,exports){
"use strict";

let db = require("./db-interaction");

let podcastSubmit = document.getElementById("podcastSubmit"),
    podcastQuery = document.getElementById("podcastQuery"),
    podcastType = document.getElementById("podcastType"),
    podcastCount = document.getElementById("podcastCount");

podcastSubmit.addEventListener("click", function() {
    db.query = podcastQuery.value;
    db.type = podcastType.value;
    db.count = podcastCount.value;
    db.getPodcast(db.query, db.type, db.count);
});
},{"./db-interaction":1}]},{},[1,2,3]);
