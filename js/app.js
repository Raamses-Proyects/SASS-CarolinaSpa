// window.swiper = new Swiper({
//     el: '.slider__contenedor',
//     slideClass: 'slider__slide',
//     createElements: true,
//     loop: true,
//     pagination: true,
//     navigation: true
// });

var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    }
  });

/*Notas:
    el: elemento es el padre/contenedor de los slides
    slideClass: clase nombre de los hijos
    createElements: genera el código de html que requiera
    autoplay: {
        delay: 5000 // mover automanticamente
    }
    loop: true: llegado al ultimo aparace el primero
    spaceBetween: 20: espacio entre imagenes
    pagination: true: agregar paginación
    navigation: true: barras laterales para navegar
*/