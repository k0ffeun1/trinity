// var number = document.querySelector('.number'), 
// numberTop = number.getBoundingClientRect().top,
// start = +number.innerHTML, end = +number.dataset.max;

// window.addEventListener('scroll', function onScroll() {
//     if(window.pageYOffset > numberTop - window.innerHeight/2) {
//         this.removeEventListener('scroll', onScroll);
//         var interval = setInterval(function() {
//             number.innerHTML = ++start;
//             if(start == end) {
//                 clearInterval(interval);
//             }
//         }, 5);
//     }
// }); 
//<p class="number" data-max="1200">0</p> - в HTML


// $(document).ready(function () {
//     $('.slider1').slick({
//         initialSlide: 0,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         dots: false,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1025,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     arrows: true,
//                 }
//             },
//             {
//                 breakpoint: 769,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     arrows: false,
//                     dots: true,
//                 }
//             },
//         ]
//     });
//     $('.slider2').slick({
//         initialSlide: 0,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         dots: false,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1025,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                 }
//             },
//             {
//                 breakpoint: 769,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     centerMode: false,
//                 }
//             },
//         ]
//     });
//     $('.stories__slider').slick({
//         initialSlide: 3,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });
