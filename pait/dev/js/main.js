
// Mobile-menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
    });

    /* menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('menu-active');
        })
    }) */
});



// Плавная прокрутка для всех анкоров
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



//Передача цены из верхних кнопок в нижние (каталог)
$('.catalog__product-list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var mobPrice = $('.catalog__product-slide.slick-active .mobile .cost').text(); 

    $('.slider-nav .catalog__header-slide--active').removeClass('catalog__header-slide--active');   
    $('.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]').find('.catalog__header-slide').addClass('catalog__header-slide--active');   



    $('.catalog .desktop .cost').text(mobPrice);
    if(mobPrice === ''){
        $('.catalog .desktop .product__buttons-price').css('display', 'none');
    }else{
        $('.catalog .desktop .product__buttons-price').css('display', 'flex');
    }
});

$('.slider-nav').on('init', function(event, slick, currentSlide, nextSlide){
    $('.slider-nav .slick-slide[data-slick-index="0"]').find('.catalog__header-slide').addClass('catalog__header-slide--active'); 
});

///////////////Слайдеры///////////////////////////////////
//Баннеры
$(document).ready(function(){
    $('.banner__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        /* autoplay: true, */
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: true
                }
            }
        ]
    });


    //Каталог - контент для табов
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next catalog-product-arrow catalog-product-next">Next</button>',
        prevArrow: '<button type="button" class="slick-prev catalog-product-arrow catalog-product-prev">Next</button>',
        dots: false,
        fade: true,
        // adaptiveHeight: true
    });
    //Каталог - табы
    $('.slider-nav').slick({
        asNavFor: '.slider-for',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 319,
            settings: {
                variableWidth: true,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                variableWidth: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }
    ]
  });

  $('.modal').fancybox(); 
  
  readmoreHeight = 200;
  let container = $(window).width();
  if(container >= 992){
    readmoreHeight = 527-16;
    console.log(readmoreHeight);
  }
  

  $('.product__descr').readmore({ //вызов плагина
    speed: 250, //скорость раскрытия скрытого текста (в миллисекундах)
    collapsedHeight: readmoreHeight, //высота раскрытой области текста (в пикселях)
    heightMargin: 16, //избегание ломания блоков, которые больше maxHeight (в пикселях)
    moreLink: '<a href="#" class="product__descr-readmore">Читать далее</a>', //ссылка "Читать далее", можно переименовать
    lessLink: '<a href="#" class="product__descr-hide">Скрыть</a>' //ссылка "Скрыть", можно переименовать
  });
});