const outerContentSlide = document.querySelector(".img-slide");
const contentImages = document.querySelectorAll(".img-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = contentImages[0].clientWidth;

outerContentSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

const next = () => {
    if (counter >= contentImages.length - 1) return;
    outerContentSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    outerContentSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
const prev = () => {
    if (counter <= 0) return;
    outerContentSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    outerContentSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
nextBtn.addEventListener('click', () => {
    next();
});
prevBtn.addEventListener('click', () => {
    prev();
});

outerContentSlide.addEventListener('transitionend', () => {
    if (contentImages[counter].id === 'lastClone') {
        outerContentSlide.style.transition = "none";
        counter = contentImages.length - 2;
        outerContentSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if (contentImages[counter].id === 'firstClone') {
        outerContentSlide.style.transition = "none";
        counter = contentImages.length - counter;
        outerContentSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});

setInterval(() => {
    next();
}, 3000);
