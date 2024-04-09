
const all = document.querySelectorAll(".inner-scroller");
all.forEach(carousel => {
const arrows = document.querySelectorAll(".scroller i");
const firstProductWidth = carousel.querySelector(".product-card").offsetWidth;

let isDragging = false, startX, startScrollLeft;


arrows.forEach(btn => {
    btn.addEventListener("click", () =>{
        carousel.scrollLeft += btn.id === "prevProduct" ? -firstProductWidth : firstProductWidth;
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
})











    