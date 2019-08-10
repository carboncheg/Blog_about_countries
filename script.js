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



    

});