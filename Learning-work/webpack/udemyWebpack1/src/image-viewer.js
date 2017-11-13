//import './css/image-viewer.css' //one way of attaching css to a html generated, web pack will automatically attch this css file to the html code generated from here.

const imageTag = document.createElement("img");

imageTag.src = "http://lorempixel.com/400/400";

document.body.appendChild(imageTag);