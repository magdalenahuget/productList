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

const divElement = function (content) {

    let arrOfTracks = content.details;
    let tracksInString = "";
    for (let track of arrOfTracks) {
        tracksInString += `${track.name},<br />`
    }

    return `<div><h1>${content.name}</h1></div><div>${tracksInString}</div>`;
}

const loadEvent = function () {

    // Write your JavaScript code after this line

    for (let product of products) {
        document.getElementById("root").insertAdjacentHTML("beforeend", divElement(product));
    }

    // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);