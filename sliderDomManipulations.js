function createSlider(selector) {
    const sliderContainer = document.querySelector(selector);

    const leftButton = sliderContainer.querySelector('.arrow-left');
    const rightButton = sliderContainer.querySelector('.arrow-right');
    const items = sliderContainer.querySelector('.items');
    const slider = sliderContainer.querySelector('.slider');
    const slides = sliderContainer.querySelectorAll('.item');

    const itemWidth = slides[0].offsetWidth; // ширина одного слайда
    const sliderWidth = slider.offsetWidth; // ширина слайдера
    const totalWidth = itemWidth * slides.length; // общая ширина всех слайдов
    const maxPosition = totalWidth - sliderWidth; // максимальное смещение

    let currentPosition = 0;

    rightButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPosition < maxPosition) {
            currentPosition += itemWidth;
            items.style.right = currentPosition + 'px';
        }
    });

    leftButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPosition > 0) {
            currentPosition -= itemWidth;
            items.style.right = currentPosition + 'px';
        }
    });
}

createSlider('.simple-slider-container');

