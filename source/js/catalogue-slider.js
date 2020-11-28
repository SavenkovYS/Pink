'use strict'

{
    const catalogueSection = document.querySelector('.catalogue');
    const catalogueTable = catalogueSection.querySelector('.catalogue__list');
    const toggles = catalogueSection.querySelectorAll('.slider__toggle');

    let currentIndex = 1;

    for(let i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', () => {
          catalogueTable.classList.remove('catalogue__list--left', 'catalogue__list--center', 'catalogue__list--right');
          toggles[currentIndex].classList.remove('slider__toggle--active');
          currentIndex = i;
          toggles[currentIndex].classList.add('slider__toggle--active')
          switch(i) {
              case 0: 
              catalogueTable.classList.add('catalogue__list--left');
              break;
              case 1:
              catalogueTable.classList.add('catalogue__list--center');
              break;
              case 2: 
              catalogueTable.classList.add('catalogue__list--right');
              break;
          }
      })  
    }
 
}