document.addEventListener('DOMContentLoaded', function() {

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

document.addEventListener('mousemove', function(e) {
  const movingText = document.getElementById('moving-text');
  const x = e.clientX;
  const y = e.clientY;
  movingText.style.left = x + 'px';
  movingText.style.top = y + 'px';
});

window.addEventListener("scroll", handleScroll);

const movingImages = document.querySelectorAll('.moving-image');

movingImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.cursor = 'pointer';
  });

  image.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
  });
})});

