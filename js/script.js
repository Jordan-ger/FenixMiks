document.addEventListener('DOMContentLoaded', function() {



var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener('mousemove', function(e) {
  const movingText = document.getElementById('moving-text');
  const x = e.clientX;
  const y = e.clientY;
  movingText.style.left = x + 'px';
  movingText.style.top = y + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
  const requestForm = document.getElementById('requestForm');
  const modal = document.getElementById('modal');
  const closeModalBtn = modal.querySelector('.close');

  });


});

// document.getElementById('requestForm').addEventListener('submit', function(event) {
//   event.preventDefault(); 
  
//   var formData = new FormData(this);

//   fetch('/submit', {
//       method: 'POST',
//       body: formData
//   }).then(function(response) {
//       if (response.ok) {
//           window.location.href = '/submit.php';
//       } else {
//           alert('Ошибка при отправке формы. Попробуйте снова.');
//       }
//   }).catch(function(error) {
//       alert('Ошибка при отправке формы. Попробуйте снова.');
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('requestForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      
      fetch('submit.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          alert(data);
      })
      .catch(error => {
          alert('Ошибка при отправке сообщения: ' + error);
      });
  });
});

document.getElementById('phone').addEventListener('input', function (e) {
  let x = e.target.value.replace(/\D/g, '').match(/(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value = x[1] ? '+7 (' + x[1] + (x[2] ? x[2] : '') : '';
  if (x[2]) e.target.value += ') ' + x[2];
  if (x[3]) e.target.value += ' ' + x[3];
  if (x[4]) e.target.value += '-' + x[4];
  if (x[5]) e.target.value += '-' + x[5];
});
