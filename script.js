'use strict';

window.addEventListener('DOMContentLoaded', function() {


    function tabs() {
        let header = document.querySelector('.header'),
            tabBtn = document.querySelectorAll('.header_tab'),
            tabContent = document.querySelectorAll('.tab_content');


        function hideTabContent(x) {
            for (let i = x; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        function showTabContent(y) {
            if (tabContent[y].classList.contains('hide')) {
                tabContent[y].classList.remove('hide');
                tabContent[y].classList.add('show');
            }
        }

        header.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('header_tab')) {
                for (let i = 0; i < tabBtn.length; i++) {
                    if (e.target == tabBtn[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
    tabs();



    function slider() {

        let slideIndex = 1,
            slides = document.querySelectorAll('.slider_item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrapper = document.querySelector('.dots_wrapper'),
            dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);

        function showSlides(n) {

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            
            dots.forEach((item) => item.classList.remove('dot_active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot_active');
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', () => {
            plusSlides(-1);
        });

        next.addEventListener('click', () => {
            plusSlides(1);
        });

        dotsWrapper.addEventListener('click', (event) => {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && 
                    event.target == dots[i - 1]) {
                    currentSlide(i);
                }
            }
        });
    }
    slider();

});