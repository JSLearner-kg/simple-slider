const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const items = document.querySelector('#items');

let currentPosition = 0;

rightButton.addEventListener('click', function (e) {
    if (currentPosition < 700) {
        currentPosition += 100;
        items.style.right = currentPosition + 'px';
    }
});

leftButton.addEventListener('click', function (e) {
    if (currentPosition > 0) {
        currentPosition -= 100;
        items.style.right = currentPosition + 'px';
    }
});