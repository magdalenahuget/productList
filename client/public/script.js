import { products } from '/data.js';

// Task 1 - Insert all

// const divElement = function (content) {

//     return `<div>${content.name}</div>`;
// }

// const loadEvent = function () {

//     // Write your JavaScript code after this line

//     for (let product of products) {
//         document.getElementById("root").insertAdjacentHTML("beforeend", divElement(product));
//     }

//     // Write your JavaScript code before this line

// }

// window.addEventListener("load", loadEvent);




// Task 2 - Insert tracks

// const divElement = function (content) {

//     let arrOfTracks = content.details;
//     let tracksInString = "";
//     for (let track of arrOfTracks) {
//         tracksInString += `${track.name},<br />`
//     }

//     return `<div><h1>${content.name}</h1></div><div>${tracksInString}</div>`;
// }

// const loadEvent = function () {

//     // Write your JavaScript code after this line

//     for (let product of products) {
//         document.getElementById("root").insertAdjacentHTML("beforeend", divElement(product));
//     }

//     // Write your JavaScript code before this line

// }

// window.addEventListener("load", loadEvent);




// Task 3 - Insert more album detail



const divElement = function (content) {


    let arrOfTracks = content.details;
    let tracksInString = "";



    for (let track of arrOfTracks) {
        tracksInString += `${track.track_id}. ${track.name} - <em>time:</em> <b>${msToTime(track.milliseconds)},</b></br>`
    }



    function msToTime(ms) {
        var seconds = Math.floor((ms / 1000) % 60),
          minutes = Math.floor((ms / (1000 * 60)) % 60),
          hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds;
      }



    return `<div><h1>${content.name}</h1><p>Status: <em>${content.status}</em></p><p>Price: <b>${content.price}</b></p></div></br><div>${tracksInString}</div></br>`;
}

const loadEvent = function () {

    // Write your JavaScript code after this line

    for (let product of products) {
        document.getElementById("root").insertAdjacentHTML("beforeend", divElement(product));
    }

    // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);