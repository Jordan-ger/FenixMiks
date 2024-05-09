document.addEventListener('DOMContentLoaded', function () {
  // Получаем ссылки на все элементы списка продукции
  var productItems = document.querySelectorAll('.sub-products .sub-name');

  // Получаем ссылку на основное изображение продукции
  var mainImage = document.querySelector('.main-product-image img');

  // Создаем массив с путями к дополнительным изображениям продукции
  var additionalImages = [
      'image/product1.jpg',
      'image/product2.jpg',
      'image/product3.jpg',
      // Добавьте пути к дополнительным изображениям продукции
  ];

  // Добавляем обработчик события клика на каждый элемент списка продукции
  productItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
          // При клике на элемент списка меняем основное изображение на соответствующее дополнительное изображение
          mainImage.src = additionalImages[index];
      });
  });

  // Добавляем обработчик события клика для каждого изображения продукта
  var productImages = document.querySelectorAll('.product-image');
  var mainProductImage = document.querySelector('.main-product-image img');

  productImages.forEach(function (image) {
      image.addEventListener('click', function () {
          // При клике на изображение меняем основное изображение на соответствующее
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
