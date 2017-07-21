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