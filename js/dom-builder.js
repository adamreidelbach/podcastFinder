"use strict";

let output = document.getElementById("output"),
    podcastItems = document.getElementsByClassName("podcastItems"),
    moreButton = document.getElementById("moreButton");

function showPodcasts(podcasts) {
    let text = "";
    if (podcasts.length <= 6) {
        moreButton.disabled = true;
    } 
    for (var item in podcasts){
        if (podcasts.length > 6) {
            var morePodcasts = podcasts.splice(6, 11);
        }
        var podcastObj = podcasts[item];
        text += `<div class="podcastItems container">
                    <h3 class="title">${podcastObj.source}</h3>
                    <p class="episode">${podcastObj.title}</p>
                    <img class="images" src="${podcastObj.image_url}">
                    <p class="audio"><audio controls><source src="${podcastObj.audio_url}" type="audio/mp3"></audio></p>
                    <p class="description">${podcastObj.description}</p>
                </div>`;
    }
    output.innerHTML = text;
    moreButton.addEventListener("click", function() {
        showMorePodcasts(podcasts, morePodcasts);
        moreButton.disabled = true;
    });
}

function showMorePodcasts(podcasts, morePodcasts) {
    var combinedPodcasts = podcasts.concat(morePodcasts);
    console.log(combinedPodcasts);
    let text = "";
    for (var item in combinedPodcasts){
        var podcastObj = combinedPodcasts[item];
        text += `<div class="podcastItems">
                    <h3 class="title">${podcastObj.source}</h3>
                    <p class="episode">${podcastObj.title}</p>
                    <img class="images" src="${podcastObj.image_url}">
                    <p class="audio"><audio controls><source src="${podcastObj.audio_url}" type="audio/mp3"></audio></p>
                    <p class="description">${podcastObj.description}</p>
                </div>`;
    }
    output.innerHTML = text;
}

module.exports = {showPodcasts, showMorePodcasts};