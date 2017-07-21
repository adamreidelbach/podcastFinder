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