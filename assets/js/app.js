/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n//document.addEventListener('touchstart', onTouchStart, {passive: true});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("/* -------------- BURGER MOBILE ------------- */\n//console.log('burger mobile 333');\n\nlet navToggle = $('#navToggle');\nlet navMenu = $('#navmenu');\n\nnavToggle.on('click', function(event){\n    event.preventDefault();\n\n   // console.log(navMenu);\n   // $('body').toggleClass('no-scroll');\n    navMenu.toggleClass('open');\n    $(this).toggleClass('white');\n   // console.log('burger mobile');\n});\n\n$(window).on(\"resize, scroll\", function(){\n    navToggle.removeClass('white');\n     navMenu.removeClass('open');\n  //  $('body').removeClass('no-scroll');\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/gallery-filter.js":
/*!*****************************************!*\
  !*** ./src/assets/js/gallery-filter.js ***!
  \*****************************************/
/***/ (function() {

eval("/* -------------- KATALOG & TARGET FILTER ------------- */\nconst filterGallery = document.getElementById('gallery-filter');\n\ngalleryItems = document.querySelectorAll('.gall-item');\nconsole.log(galleryItems);\n\nfilterGallery.addEventListener('click', (e)=>{\n   // console.log('click Cat');\n\n   if(e.target.classList.contains('gallery__tags-item') && !e.target.classList.contains('active')){\n      filterGallery.querySelector('.active').classList.remove('active');\n      e.target.classList.add('active');\n\n      const target = e.target.getAttribute('data-target');\n      console.log(target);\n      \n      galleryItems.forEach((item) => {\n      //console.log(item);\n      if(target == 'all') {\n         if(item.classList.contains('hide')){\n            item.classList.remove('hide');\n         }\n         }  else\n         if(!item.getAttribute('data-category').includes(target)){\n               item.classList.add('hide');\n         } else{\n               item.classList.remove('hide');\n         }\n      })\n   } \n});\n\n/* -------------- ZAKAZ FILTER ------------- */\nconst filterZakaz = document.getElementById('zakaz-filter');\n//console.log('-----------zakaz   filter =========')\n//console.log(filterZakaz);\nconst zakazItems = document.querySelectorAll('.zakaz__item');\n//console.log(zakazItems);\nfilterZakaz.addEventListener('click', (e)=>{\n   // console.log(e.target);\n\n    const target2 = e.target.getAttribute('data-target');\n   // console.log(target2);\n\n   if(e.target.classList.contains('zakaz__tags-item') && !e.target.classList.contains('active')){\n      filterZakaz.querySelector('.active').classList.remove('active');\n      e.target.classList.add('active');\n\n   }  \n      \n      zakazItems.forEach((item) => {\n     // console.log(item);\n\n     if(target2 == 'all') {\n      if(item.classList.contains('hide')){\n         item.classList.remove('hide');\n      }\n      }  else\n     \n         if(!item.getAttribute('data-category').includes(target2)){\n                item.classList.add('hide');\n              // console.log(item.getAttribute('data-category'));\n         } else{\n            item.classList.remove('hide');\n         }\n       })\n\n  \n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/gallery-filter.js?");

/***/ }),

/***/ "./src/assets/js/js-inputmask.js":
/*!***************************************!*\
  !*** ./src/assets/js/js-inputmask.js ***!
  \***************************************/
/***/ (function() {

eval("window.addEventListener(\"DOMContentLoaded\", function() {\n    [].forEach.call( document.querySelectorAll('.tel'), function(input) {\n      var keyCode;\n      function mask(event) {\n        event.keyCode && (keyCode = event.keyCode);\n        var pos = this.selectionStart;\n        if (pos < 3) event.preventDefault();\n        var matrix = \"+7 (___) ___ ____\",\n            i = 0,\n            def = matrix.replace(/\\D/g, \"\"),\n            val = this.value.replace(/\\D/g, \"\"),\n            new_value = matrix.replace(/[_\\d]/g, function(a) {\n                return i < val.length ? val.charAt(i++) : a\n            });\n        i = new_value.indexOf(\"_\");\n        if (i != -1) {\n            i < 5 && (i = 3);\n            new_value = new_value.slice(0, i)\n        }\n        var reg = matrix.substr(0, this.value.length).replace(/_+/g,\n            function(a) {\n                return \"\\\\d{1,\" + a.length + \"}\"\n            }).replace(/[+()]/g, \"\\\\$&\");\n        reg = new RegExp(\"^\" + reg + \"$\");\n        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n          this.value = new_value;\n        }\n        if (event.type == \"blur\" && this.value.length < 5) {\n          this.value = \"\";\n        }\n      }\n  \n      input.addEventListener(\"input\", mask, false);\n      input.addEventListener(\"focus\", mask, false);\n      input.addEventListener(\"blur\", mask, false);\n      input.addEventListener(\"keydown\", mask, false);\n  \n    });\n  \n  });\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/js-inputmask.js?");

/***/ }),

/***/ "./src/assets/js/loader.js":
/*!*********************************!*\
  !*** ./src/assets/js/loader.js ***!
  \*********************************/
/***/ (function() {

eval("// var body1 = document.getElementById(\"page\");\n\n// window.addEventListener('load', function(){\n//     body1.classList.add('loaded');\n// })\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/loader.js?");

/***/ }),

/***/ "./src/assets/js/magnific.js":
/*!***********************************!*\
  !*** ./src/assets/js/magnific.js ***!
  \***********************************/
/***/ (function() {

eval("\t/*------------------ Popup Window Effect------------------*/\n    console.log('Magnific POPUP')\n\t$('.link, .link2').magnificPopup({\n        type:'image',\n        gallery:{enabled:true},\n        zoom:{enabled: true, duration: 300}\n    });\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/magnific.js?");

/***/ }),

/***/ "./src/assets/js/popup.js":
/*!********************************!*\
  !*** ./src/assets/js/popup.js ***!
  \********************************/
/***/ (function() {

eval("window.addEventListener('DOMContentLoaded', function() {\n\n    /*==================== POPUP VIDEO====================*/\n    var btnOpenVideo = document.querySelectorAll('.video-content')\n    var videoPopup = document.getElementById('popup')\n    var videoPopupInner = document.getElementById('popup-inner')\n   // var src = videoPopupInner.dataset.src;\n   var src='';\n\n    btnOpenVideo.forEach(b => b.addEventListener('click', () => {\n       // console.log(b);\n        src = b.dataset.src;\n        console.log(src);\n        videoPopup.classList.add('show-popup')\n        if (src != '') {\n            videoPopupInner.insertAdjacentHTML('afterbegin','<iframe width=\"100%\" height=\"100%\" src=\"' + src +'\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;\" allowfullscreen></iframe>');\n        }\n    }))\n\n    var btnCloseVideo = document.getElementById('popup-close')\n\n    function CloseFun(){\n        videoPopup.classList.remove('show-popup')\n        src = ''\n        location.reload();\n    }\n\n\n    btnCloseVideo.addEventListener('click', ()=> {\n        CloseFun()\n        // videoPopup.classList.remove('show-popup')\n        // src = ''\n        // location.reload();\n    })\n\n    videoPopup.addEventListener('click', () => {\n        CloseFun()\n        // videoPopup.classList.remove('show-popup')\n        // src = ''\n        // location.reload();\n    })\n\n    videoPopupInner.addEventListener('click', (event) => {\n        event.stopPropagation();\n    })\n    /*==================== POPUP SUBMIT====================*/\n    var modalClick = document.querySelectorAll('[data-modal]');\n    var modalInner = document.getElementById('modal-inner')\n     //var modal;\n\n\n    modalClick.forEach(b => b.addEventListener('click', (event) => {\n        event.preventDefault();\n       \n         var modalText = b.dataset.modal;\n    //     console.log(modalText);\n         var modal = document.querySelector(modalText);\n       // console.log(modal);\n        if (modal !== null) {\n            modal.classList.add('show-popup');\n        }\n     \n    }))\n\n    //console.log(modal)\n     var btnCloseModal = document.getElementById('modal-close')\n     var moddd = btnCloseModal.closest('.modal');\n   // console.log(moddd);\n\n    function CloseModal(){ \n        moddd.classList.remove('show-popup')\n       // location.reload();\n    }\n\n\n    btnCloseModal.addEventListener('click', ()=> {\n        CloseModal()\n       // console.log(modal)\n       \n    })\n\n    moddd.addEventListener('click', () => {\n        CloseModal()  \n    })\n\n    modalInner.addEventListener('click', (event) => {\n       // console.log('click inner');\n        event.stopPropagation();\n    })\n})\n \n\n\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/popup.js?");

/***/ }),

/***/ "./src/assets/js/scroll-animate.js":
/*!*****************************************!*\
  !*** ./src/assets/js/scroll-animate.js ***!
  \*****************************************/
/***/ (function() {

eval("/*==================== SCROLL REVEAL ANIMATION ====================*/\nconst sr = ScrollReveal({\n    origin: 'top',\n    distance: '30px',\n    duration: 2000,\n    reset: true,\n    mobile: false,\n});\n\nsr.reveal(`.intro__pre-title, .intro__title,\n            .intro__descr, .intro__left-bottom,\n            .intro__right, .title, .descr, .where__container, .title__white,\n            .advantages__item, .video-title, .video__container,\n            .gallery__container, .zakaz, .table-title, .table__container-header, .table__tables `, {\n    interval: 200\n})\n\n\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scroll-animate.js?");

/***/ }),

/***/ "./src/assets/js/slick.js":
/*!********************************!*\
  !*** ./src/assets/js/slick.js ***!
  \********************************/
/***/ (function() {

eval("// $('#slick0').slick({\n//     // centerMode:true,\n//     //  rows: 1,\n//      dots: false,\n//      infinite: true,\n//      autoplay:true,\n//      autoplaySpeed:1500,\n//      arrows:true,\n//      slidesToShow: 2,\n//      slidesToScroll: 1,\n//      prevArrow: $('#video-prev'),\n//      nextArrow: $('#video-next'),\n//    //  mobileFirst: true, //optional, to be used only if your page is mobile first\n//      responsive: [\n//          {\n//              breakpoint: 1024,\n//              settings: {\n//                  slidesToShow: 2,\n//                  slidesToScroll: 1,\n//              }\n//          },\n//          {\n//              breakpoint: 600,\n//              settings: {\n//                  slidesToShow: 2,\n//                  slidesToScroll:1 \n//              }\n//          },\n//          {\n//              breakpoint: 480,\n//              settings: {\n//                  slidesToShow: 1,\n//                  slidesToScroll: 1\n//              }\n//          }\n//          // You can unslick at a given breakpoint now by adding:\n//          // settings: \"unslick\"\n//          // instead of a settings object\n//      ]\n \n//  });\n\n\n// $('#slick1').slick({\n\n//     rows: 2,\n//     dots: true,\n//     infinite: true,\n//     autoplay:true,\n//     autoplaySpeed:1500,\n//     arrows:true,\n//     slidesToShow: 3,\n//     slidesToScroll: 1,\n//     prevArrow: $('#gal-prev'),\n//     nextArrow: $('#gal-next'),\n//    //mobileFirst: true, //optional, to be used only if your page is mobile first\n//     responsive: [\n//         {\n//             breakpoint: 1024,\n//             settings: {\n//                 rows: 2,\n//                 slidesToShow: 3,\n//                 slidesToScroll: 1,\n//             }\n//         },\n//         {\n//             breakpoint: 600,\n//             settings: {\n                \n//                 slidesToShow: 2,\n//                 slidesToScroll: 1\n//             }\n//         },\n//         {\n//             breakpoint: 480,\n//             settings: {\n//                 rows: 1,\n//                 slidesToShow: 1,\n//                 slidesToScroll: 1\n//             }\n//         }\n//         // You can unslick at a given breakpoint now by adding:\n//         // settings: \"unslick\"\n//         // instead of a settings object\n//     ]\n\n// });\n\n// $('#slick2').slick({\n//     // centerMode:true,\n//     //  rows: 1,\n//      dots: false,\n//      infinite: true,\n//      autoplay:true,\n//      autoplaySpeed:1500,\n//      arrows:true,\n//      slidesToShow: 4,\n//      slidesToScroll: 1,\n//      prevArrow: $('#zak-prev'),\n//      nextArrow: $('#zak-next'),\n//     // mobileFirst: true, //optional, to be used only if your page is mobile first\n//      responsive: [\n//          {\n//              breakpoint: 1200,\n//              settings: {\n//                  slidesToShow: 4,\n//                  slidesToScroll: 1,\n//              }\n//          },\n//          {\n//             breakpoint: 1000,\n//             settings: {\n//                 slidesToShow: 3,\n//                 slidesToScroll: 1,\n//             }\n//         },\n//         {\n//             breakpoint: 800,\n//             settings: {\n//                 slidesToShow: 2,\n//                 slidesToScroll:1 \n//             }\n//         },\n//         {\n//             breakpoint: 500,\n//             settings: {\n//                 slidesToShow: 1,\n//                 slidesToScroll:1 \n//             }\n//         },\n  \n    \n//          // You can unslick at a given breakpoint now by adding:\n//          // settings: \"unslick\"\n//          // instead of a settings object\n//      ]\n \n//  });\n\n//  $('#slick3').slick({\n//     // centerMode:true,\n//       rows: 1,\n//      dots: false,\n//      infinite: true,\n//      autoplay:true,\n//      autoplaySpeed:1500,\n//      arrows:true,\n//      slidesToShow: 3,\n//      slidesToScroll: 1,\n//      prevArrow: $('#sert-prev'),\n//      nextArrow: $('#sert-next'),\n//    //  mobileFirst: true, //optional, to be used only if your page is mobile first\n//      responsive: [\n//          {\n//              breakpoint: 1200,\n//              settings: {\n//                  slidesToShow: 3,\n//                  slidesToScroll: 1,\n//              }\n//          },\n//          {\n//             breakpoint: 900,\n//             settings: {\n//                 slidesToShow: 2,\n//                 slidesToScroll: 1,\n//             }\n//         },\n//          {\n//              breakpoint: 600,\n//              settings: {\n//                  slidesToShow: 2,\n//                  slidesToScroll:1 \n//              }\n//          },\n//          {\n//              breakpoint: 480,\n//              settings: {\n                \n//                  slidesToShow: 1,\n//                  slidesToScroll: 1\n//              }\n//          }\n \n//      ]\n \n//  });\n\n//  $('#slick4').slick({\n//      dots: false,\n//      infinite: true,\n//      autoplay:true,\n//      autoplaySpeed:1500,\n//      arrows:false,\n//      slidesToShow: 2,\n//      slidesToScroll: 1,\n \n//   //   mobileFirst: true, //optional, to be used only if your page is mobile first\n//      responsive: [\n//          {\n//              breakpoint: 1200,\n//              settings: {\n//                  slidesToShow: 2,\n//                  slidesToScroll: 1,\n//              }\n//          },\n//          {\n//             breakpoint: 900,\n//             settings: {\n//                 slidesToShow: 2,\n//                 slidesToScroll: 1,\n//             }\n//         },\n//          {\n//              breakpoint: 600,\n//              settings: {\n//                 dots: true,\n//                  slidesToShow: 1,\n//                  slidesToScroll:1 ,\n                 \n//              }\n//          },\n//          {\n//              breakpoint: 480,\n//              settings: {\n//                 dots: true,\n//                  slidesToShow: 1,\n//                  slidesToScroll: 1\n//              }\n//          }\n//          // You can unslick at a given breakpoint now by adding:\n//          // settings: \"unslick\"\n//          // instead of a settings object\n//      ]\n \n//  });\n\n//  $('#slick5').slick({\n//     // centerMode:true,\n//      rows: 2,\n//      dots: false,\n//      infinite: true,\n//      autoplay:true,\n//      autoplaySpeed:1500,\n//      arrows:false,\n//      slidesToShow: 2,\n//      slidesToScroll: 1,\n//     //  prevArrow: $('#gal-prev'),\n//     //  nextArrow: $('#gal-next'),\n//    //  mobileFirst: true, //optional, to be used only if your page is mobile first\n//      responsive: [\n//          {\n//              breakpoint: 1024,\n//              settings: {\n//                  slidesToShow: 2,\n//                  slidesToScroll: 1,\n//              }\n//          },\n//          {\n//             breakpoint: 780,\n//             settings: {\n\n              \n//                 slidesToShow: 2,\n//                 slidesToScroll: 1\n//             }\n//         },\n//          {\n//              breakpoint: 600,\n//              settings: {\n\n//                 rows: 1,\n//                 dots: true,\n//                  slidesToShow: 1,\n//                  slidesToScroll: 1\n//              }\n//          },\n//          {\n//              breakpoint: 480,\n//              settings: {\n                \n//                 dots: true,\n//                  slidesToShow: 1,\n//                  slidesToScroll: 1\n//              }\n//          }\n//          // You can unslick at a given breakpoint now by adding:\n//          // settings: \"unslick\"\n//          // instead of a settings object\n//      ]\n \n//  });\n \n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slick.js?");

/***/ }),

/***/ "./src/assets/js/swiper.js":
/*!*********************************!*\
  !*** ./src/assets/js/swiper.js ***!
  \*********************************/
/***/ (function() {

eval("// var swiper = new Swiper(\".mySwiper\", {\n//     slidesPerView: 3,\n//     grid: {\n//       rows: 2,\n//     },\n//     spaceBetween: 30,\n//     pagination: {\n//       el: \".swiper-pagination\",\n//       clickable: true,\n//     },\n//   });\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/swiper.js?");

/***/ }),

/***/ "./src/assets/js/swiperjs.js":
/*!***********************************!*\
  !*** ./src/assets/js/swiperjs.js ***!
  \***********************************/
/***/ (function() {

eval("var swiperGallery123 = new Swiper(\".gallery__items\", {\n  slidesPerView: 1,\n  spaceBetween: 20,\n  grid: {\n    rows: 3,\n    fill: 'column',\n  },\n  autoplay: {\n    delay: 3000,\n    disableOnInteraction: false,\n  },\n  navigation: {\n    nextEl: \"#gal-next\",\n    prevEl: \"#gal-prev\",\n  },\n\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n    \n      spaceBetween: 30,\n    },\n    468: {\n      slidesPerView: 2,\n      grid: {\n        rows: 1,\n        fill: 'row',\n      },\n      spaceBetween: 30,\n    },\n    768: {\n      slidesPerView: 2,\n      grid: {\n        rows: 2,\n        fill: 'row',\n      },\n      spaceBetween: 30,\n    },\n    992: {\n      slidesPerView: 3,\n      grid: {\n        rows: 2,\n        fill: 'row',\n      },\n      spaceBetween: 30,\n    },\n  },\n\n});\n\nvar swiper2 = new Swiper(\".video__slider\", {\n    loop:true,\n    grabCursor: true,\n    autoplay: {     //add\n        delay: 3000,\n    disableOnInteraction: false,\n    },    \n   \n    centeredSlides:false,\n    slidesPerView: 2,\n    spaceBetween: 50,\n    navigation: {\n      nextEl: \"#video-next\",\n      prevEl: \"#video-prev\",\n    },\n    breakpoints: {\n        0: {\n          slidesPerView: 1,\n        \n          \n        },\n        768: {\n          slidesPerView: 2,\n          spaceBetween: 20,\n        },\n        1024: {\n          slidesPerView: 2,\n          spaceBetween: 50,\n        },\n      },\n});\n\n\n\n\n\nvar swiperZak = new Swiper(\".zakaz__container\", {\n    loop:true,\n    autoplay: {     //add\n        delay: 3000,\n    disableOnInteraction: false,\n    },    \n   \n    //centeredSlides:false,\n    slidesPerView: 4,\n    spaceBetween: 50,\n    grabCursor: true,\n\n    navigation: {\n      nextEl: \"#zak-next\",\n      prevEl: \"#zak-prev\",\n    },\n    breakpoints: {\n        0: {\n          slidesPerView: 'auto',\n          loop:true,\n        //  slidesPerView: 1,\n          // centeredSlides:true,\n           spaceBetween: 50,\n         \n      \n          \n        },\n        568: {\n          //slidesPerView: 'auto',\n          slidesPerView: 2,\n           spaceBetween: 10,\n          // centeredSlides:false,\n          loop:true,\n         \n        },\n        768: {\n         // slidesPerView: 'auto',\n          slidesPerView: 3,\n           spaceBetween: 30,\n          // centeredSlides:false,\n          loop:true,\n      \n        },\n        1024: {\n        //  slidesPerView: 'auto',\n          slidesPerView: 4,\n           spaceBetween: 30,\n          loop:true,\n    \n        },\n      },\n  });\n\n// ================ GALLERY 2 ROWS ================= // \nvar swiper = new Swiper(\".mySwiper\", {\n    slidesPerView: 3,\n    grid: {\n      rows: 2,\n    },\n    spaceBetween: 30,\n    pagination: {\n      el: \".swiper-pagination\",\n      clickable: true,\n    },\n});\n\n/* Swiper Slider Cards Home - Show only on mobile */\nvar init = false;\nvar swiper7;\n//var swiperGallery;\nfunction swiperCard() {\n  if ((window.innerWidth <= 1024) ) {\n    if (!init) {\n      init = true;\n      swiper7 = new Swiper(\".where__container\", {\n        loop: true,\n        dots: true,\n        autoplay: {     //add\n            delay: 5500,   //add\n        },    \n        direction: \"horizontal\",\n       // centeredSlides: true,\n        slidesPerView: 1,\n        centeredSlides: true,\n        spaceBetween: 42,\n \n        pagination: {\n          el: \"#where-pagination\",\n          clickable: true,\n        },\n    \n      });\n      \n    }\n  } else if (init) {\n    swiper7.destroy();\n    //swiperGallery.destroy();\n    init = false;\n  }\n}\nswiperCard();\nwindow.addEventListener(\"resize\", swiperCard);\n\n/* Swiper Slider - Show only on BIG SIZE */\nvar initSert = false;\nvar swiperSert;\nfunction swiperCardSert() {\n  if ((window.innerWidth > 768) ) {\n    if (!initSert) {\n      initSert = true;\n      swiperSert = new Swiper(\".sert__container\", {\n        loop: true,\n       // dots: true,\n        autoplay: {     //add\n            delay: 2500,   //add\n        },    \n        direction: \"horizontal\",\n        centeredSlides: false,\n        slidesPerView: 4,\n        //centeredSlides: false,\n        spaceBetween: 10,\n \n        navigation: {\n            nextEl: \"#sert-next\",\n            prevEl: \"#sert-prev\",\n        },\n        breakpoints: {\n            481: {\n              slidesPerView: 1,\n            \n              \n            },\n            768: {\n              slidesPerView: 2,\n              spaceBetween: 10,\n            },\n            1024: {\n              slidesPerView: 4,\n              spaceBetween: 10,\n            },\n          },\n    \n      });\n    }\n  } else if (initSert) {\n    swiperSert.destroy();\n    initSert = false;\n  }\n}\nswiperCardSert();\nwindow.addEventListener(\"resize\", swiperCardSert);\n\n\n\n\n\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/swiperjs.js?");

/***/ }),

/***/ "./src/assets/js/table-filter.js":
/*!***************************************!*\
  !*** ./src/assets/js/table-filter.js ***!
  \***************************************/
/***/ (function() {

eval("/* -------------- KATALOG & TARGET FILTER ------------- */\nconst filterCat = document.getElementById('cat-filter'),\n\ntableItems = document.querySelectorAll('.table-item');\n//console.log(tableItems);\n\nfilterCat.addEventListener('click', (e)=>{\n    //console.log('click Cat');\n\n    if(e.target.classList.contains('table-title') && !e.target.classList.contains('active')){\n    filterCat.querySelector('.active').classList.remove('active');\n    e.target.classList.add('active');\n\n    const target = e.target.getAttribute('data-target');\n    //console.log(target);\n    \n    tableItems.forEach((item) => {\n     //console.log(item);\n   \n        if(item.getAttribute('data-category').includes(target)){\n            item.classList.add('show');\n        } else{\n            item.classList.remove('show');\n        }\n    })\n     } \n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/table-filter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/gallery-filter.js"]();
/******/ 	__webpack_modules__["./src/assets/js/js-inputmask.js"]();
/******/ 	__webpack_modules__["./src/assets/js/loader.js"]();
/******/ 	__webpack_modules__["./src/assets/js/magnific.js"]();
/******/ 	__webpack_modules__["./src/assets/js/popup.js"]();
/******/ 	__webpack_modules__["./src/assets/js/scroll-animate.js"]();
/******/ 	__webpack_modules__["./src/assets/js/slick.js"]();
/******/ 	__webpack_modules__["./src/assets/js/swiper.js"]();
/******/ 	__webpack_modules__["./src/assets/js/swiperjs.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/table-filter.js"]();
/******/ 	
/******/ })()
;