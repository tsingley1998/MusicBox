const redBox = document.getElementById('redBox');

redBox.addEventListener("mouseenter", function(event) {
    redBox.style.backgroundColor = "red";
});

redBox.addEventListener("mouseleave", function (event) {
    redBox.style.backgroundColor = "rgb(65, 0, 0)";
});


const orangeBox = document.getElementById('orangeBox');

orangeBox.addEventListener("mouseenter", function(event) {
    orangeBox.style.backgroundColor = "orange";
});

orangeBox.addEventListener("mouseleave", function (event) {
    orangeBox.style.backgroundColor = "rgb(65, 42, 0)";
});


const yellowBox = document.getElementById('yellowBox');

yellowBox.addEventListener("mouseenter", function(event) {
    yellowBox.style.backgroundColor = "yellow";
});

yellowBox.addEventListener("mouseleave", function (event) {
    yellowBox.style.backgroundColor = "rgb(54, 54, 0)";
});


const greenBox = document.getElementById('greenBox');

greenBox.addEventListener("mouseenter", function(event) {
    greenBox.style.backgroundColor = "green";
});

greenBox.addEventListener("mouseleave", function (event) {
    greenBox.style.backgroundColor = "rgb(0, 41, 0)";
});


const blueBox = document.getElementById('blueBox');

blueBox.addEventListener("mouseenter", function(event) {
    blueBox.style.backgroundColor = "blue";
});

blueBox.addEventListener("mouseleave", function (event) {
    blueBox.style.backgroundColor = "rgb(0, 0, 56)";
});


const purpleBox = document.getElementById('purpleBox');

purpleBox.addEventListener("mouseenter", function(event) {
    purpleBox.style.backgroundColor = "purple";
});

purpleBox.addEventListener("mouseleave", function (event) {
    purpleBox.style.backgroundColor = "rgb(36, 0, 36)";
});


const pinkBox = document.getElementById('pinkBox');

pinkBox.addEventListener("mouseenter", function(event) {
    pinkBox.style.backgroundColor = "pink";
});

pinkBox.addEventListener("mouseleave", function (event) {
    pinkBox.style.backgroundColor = "rgb(71, 55, 58)";
});


function playA() {
    let redAudio = document.getElementById('redAudio');
    redAudio.play();
}


function playB() {
    let orangeAudio = document.getElementById('orangeAudio');
    orangeAudio.play();
}


function playC() {
    let yellowAudio = document.getElementById('yellowAudio');
    yellowAudio.play();
}


function playD() {
    let greenAudio = document.getElementById('greenAudio');
    greenAudio.play();
}


function playE() {
    let blueAudio = document.getElementById('blueAudio');
    blueAudio.play();
}

function playF() {
    let purpleAudio = document.getElementById('purpleAudio');
    purpleAudio.play();
}


function playG() {
    let pinkAudio = document.getElementById('pinkAudio');
    pinkAudio.play();
}

