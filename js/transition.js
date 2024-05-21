document.addEventListener('DOMContentLoaded', function () {

  var productItems = document.querySelectorAll('.sub-products .sub-name');


  var mainImage = document.querySelector('.main-product-image img');

  var additionalImages = [
      'image/product1.jpg',
      'image/product2.jpg',
      'image/product3.jpg',
  ];

  productItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
          mainImage.src = additionalImages[index];
      });
  });

  var productImages = document.querySelectorAll('.product-image');
  var mainProductImage = document.querySelector('.main-product-image img');

  productImages.forEach(function (image) {
      image.addEventListener('click', function () {
          mainProductImage.src = image.src;
      });
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
  })
});

document.addEventListener('mousemove', function (e) {
  const movingText = document.getElementById('moving-text');
  const x = e.clientX;
  const y = e.clientY;
  movingText.style.left = x + 'px';
  movingText.style.top = y + 'px';
});

function changeMainProduct(newImage) {
  document.querySelector('.main-product-image').src = newImage;
}


function changeImage(imageSrc, mainDescription, additionalDescription) {
    document.getElementById('mainImage').src = imageSrc;
    document.getElementById('description').innerText = mainDescription;
    document.getElementById('additionalDescription').innerText = additionalDescription;
}