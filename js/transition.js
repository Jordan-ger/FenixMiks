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