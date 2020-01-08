'use strict';

window.addEventListener('DOMContentLoaded', function() {

    // Вкладки
    let header = document.querySelector('.header'),
        tabBtn = document.querySelectorAll('.btn_tab'),
        tabContent = document.querySelectorAll('.tab_content');

    function tabs() {

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
            if (e.target && e.target.classList.contains('btn_tab')) {
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


    // Слайдер
    function slider() {

        let slideIndex = 1,
            slides = document.querySelectorAll('.slider_item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrapper = document.querySelector('.dots_wrapper'),
            dots = document.querySelectorAll('.dot'),
            slider = document.querySelector('.slider');

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

        next.addEventListener('click', () => {
            plusSlides(1);
        });

        prev.addEventListener('click', () => {
            plusSlides(-1);
        });

        dotsWrapper.addEventListener('click', (event) => {
            for (let i = 1; i <= dots.length; i++) {
                if (event.target.classList.contains('dot') && 
                    event.target == dots[i - 1]) {
                    currentSlide(i);
                    clearInterval(timerId);
                    autoshow();
                }
            }
        });

        let timerId;

        function autoshow() {
            timerId = setInterval( () => plusSlides(1), 2000
            );
        }
        autoshow();

        slider.addEventListener('mouseover', (event) => {
            clearInterval(timerId);
        });

        slider.addEventListener('mouseout', (event) => {
            autoshow();
        });



        header.addEventListener('click', (event) => {
            for (let i = 0; i <= tabBtn.length; i++) {
                if (event.target.classList.contains('btn_tab') && 
                    event.target != tabBtn[0]) {
                    clearInterval(timerId);
                }
                // if (event.target.classList.contains('btn_tab') && 
                //     event.target == tabBtn[0]) {
                //     autoshow();
                // }
            }
        });

        // if (tabContent[0].classList.contains('tab_content show')) {
        //     autoshow();
        // }

    }
    slider();


    // Блог
    let btnWritePost = document.querySelector('.write-post'),
        modal = document.querySelector('.modal'),
        bgModal = document.querySelector('.bg-modal');

    function addModal() {
        btnWritePost.addEventListener('click', () => {
            bgModal.classList.remove('hidden');
            modal.classList.remove('hidden');
        });
    }
    addModal();

    function removeModal() {
        bgModal.addEventListener('click', () => {
            bgModal.classList.add('hidden');
            modal.classList.add('hidden');
        });
    
        document.addEventListener('keydown', (e) => {
            if (e.code == 'Escape') {
                bgModal.classList.add('hidden');
                modal.classList.add('hidden');
            }
        });
    }
    removeModal();

});