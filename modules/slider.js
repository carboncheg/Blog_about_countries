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

module.exports = slider;