let button = document.getElementById("click-me-button");
let hiddenText = document.getElementById("hidden-text");

function unhideText() {
    hiddenText.style.display = 'block';
}

function hideText() {
    hiddenText.style.display = 'none';
}

function stopColorChanges() {
    let colorSection = document.querySelector(".color-container");
    colorSection.style.background = 'linear-gradient(to right, white, red, orange, yellow, green, blue, indigo, violet, white)';
    colorSection.style.animation = 'none';
    let colorText = document.querySelector("div.color-container > h4");
    colorText.style.color = 'darkgrey';
    let colorStopPrompt = document.querySelector("div.color-container > h3");
    colorStopPrompt.style.display = 'none';
}

button.addEventListener('mousedown', unhideText);
button.addEventListener('mouseup', hideText);
document.addEventListener('keydown', stopColorChanges);

