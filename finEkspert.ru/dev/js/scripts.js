
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    //menuList = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
        //menuList.classList.toggle('container');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('menu-active');
        })
    });
});

$(document).ready(function () {

    if($(window).width() < 1161){
        $(".cities__item").click(function() { 
            $(this).toggleClass('cities__item-active');
        
            if($(this).find('.cities__wrapper').text() !== ''){//Если текст есть
                $(this).find('.cities__wrapper').slideToggle();// плавно спускаем вниз текст ответа на вопрос
            }
        });
    }
    

    //Скроллинг по карте
    $(".city").click(function () {
        let placemark = $(this).attr('data-id');
        let cities = document.querySelectorAll('.cities__item');
        let citiesList = '.cities__list';
        //Доработаем функционал для мобилки
        // if( $(window).width() < 1161 ){
        //     citiesList = '.cities__list';
        //     cities = document.querySelectorAll('.cities__item[data-dropdown]');
        //     for (let m = 0; m < cities.length; m++){
        //         if(cities[m].getAttribute('data-dropdown') == placemark){
        //             console.log(cities[m].getAttribute('data-dropdown'));
        //         }
        //         $('html, body').animate({
        //             scrollTop: $(href).offset().top
        //         });
        //     }

        // } else {
            $(this).toggleClass('city-active');
            for(let i = 0; i < cities.length; i++){
                console.log($("#" + cities[i].getAttribute('id')).position());
                if(cities[i].getAttribute('id') == placemark){
                    console.log(cities[i].getAttribute('id') + ' == ' + placemark);
                    $(citiesList).animate({
                        scrollTop: $("#" + placemark).position().top
                    }, 500);
                }
            }
        // }
    });

    $().fancybox();

    $('a[href^="#"]:not(a[href="#request"]):not(a[href="#open-account"]):not(a[href="#politics"])').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
});

