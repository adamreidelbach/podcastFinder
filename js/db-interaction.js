"use strict";

let db = require("./db-interaction");

function getPodcast() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.ottoradio.com/v1/podcasts?query=${query}&type=${type}&count=${count}`);
  xhr.onload = function() {
      if (xhr.status === 200) {
          console.log(xhr.responseText);
      }
      else {
          console.log('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
}