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