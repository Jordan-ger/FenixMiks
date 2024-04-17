let firstImage = document.getElementById("first-image");
let secondImage = document.getElementById("second-image");

function zoomImages() {
    firstImage.classList.add('zoomed');
    secondImage.classList.add('zoomed');
}

function unzoomImages() {
    firstImage.classList.remove('zoomed');
    secondImage.classList.remove('zoomed');
}

firstImage.addEventListener('mouseenter', zoomImages);
firstImage.addEventListener('mouseleave', unzoomImages);
secondImage.addEventListener('mouseenter', zoomImages);
secondImage.addEventListener('mouseleave', unzoomImages);
function handleScroll() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

   
    firstImage.style.transform = `translateY(${scrollPosition * 1}px)`;


    secondImage.style.transform = `translateY(${scrollPosition * 1}px)`;
}

window.addEventListener("scroll", handleScroll);
