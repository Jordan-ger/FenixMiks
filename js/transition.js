// function scrips_production(){
// 	$(document).ready(function(){
// 		$('.sub-products li:first-child').addClass("active");
// //                 следующие 2 строки только для "Напиток пороро"(для каждого вкуса нужен свой блок "flying-vegatables");
//                 $('.product-image[fly_index]').fadeOut();
//                 $(".product-image[fly_index=0]").fadeIn();
                
// 		$('.sub-products a').click(function(){
// 			if(!$(this).parent().is(".active")){
// 				var parnt = $(this).parents(".product");
// 				parnt.find(".sub-products li").removeClass("active");
// 				$(this).parent().addClass("active");
// 				var nom = $(this).parent().index();
// 				parnt.find(".inner:visible").fadeOut();
                                
//                                 // на странице "catalog/napitki" требуется показывать один блок "flying-vegatables" для всех вкусов, 
//                                 // кроме "Напитка попоро", для которого каждый вкус имеет свой блок "flying-vegatables".
//                                 // Слующие 2 строки кода только для блока "Напитки пороро"
//                                 // сначала скрываем все "flying-vegatables" для пороро;
//                                 parnt.find('.product-image[fly_index]').hide();
//                                 parnt.find(".product-image[fly_index=" + nom+ "]").show();
                                
// 				parnt.find(".inner").eq(nom).fadeIn();
// 			}
// 			return false;
// 		})
// 	})

// }

document.addEventListener('DOMContentLoaded', function() {
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
    productItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // При клике на элемент списка меняем основное изображение на соответствующее дополнительное изображение
            mainImage.src = additionalImages[index];
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
})});

document.addEventListener('mousemove', function(e) {
    const movingText = document.getElementById('moving-text');
    const x = e.clientX;
    const y = e.clientY;
    movingText.style.left = x + 'px';
    movingText.style.top = y + 'px';
  });

