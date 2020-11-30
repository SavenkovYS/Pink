const commentsSection = document.querySelector('.comments')
const comments = commentsSection.querySelectorAll('.comments__item');
const toggles = commentsSection.querySelectorAll('.slider__toggle');
const arrowForward = commentsSection.querySelector('.comments__toggle-arrow--forward');
const arrowBackward = commentsSection.querySelector('.comments__toggle-arrow--backward');

let currentIndex = 0;

function resetComments() {
    comments.forEach(comment => comment.classList.remove('comments__item--active'))
    toggles.forEach(toggle => toggle.classList.remove('slider__toggle--active'))

    comments[currentIndex].classList.add('comments__item--active');
    toggles[currentIndex].classList.add('slider__toggle--active');
}
resetComments()


for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', ()=> {
        comments[currentIndex].classList.remove('comments__item--active');
        toggles[currentIndex].classList.remove('slider__toggle--active');
        currentIndex = i;
        comments[currentIndex].classList.add('comments__item--active');
        toggles[currentIndex].classList.add('slider__toggle--active');
    })
}

function goToNextSlide(n) {

}

arrowForward.addEventListener('click', nextSlide)

arrowBackward.addEventListener('click', previousSlide)


function nextSlide() {
    goToSlide(currentIndex + 1);
}

function previousSlide() {
    goToSlide(currentIndex - 1);
}

function goToSlide(n) {
    comments[currentIndex].classList.remove('comments__item--active');
    currentIndex = (n + comments.length) % comments.length;
    comments[currentIndex].classList.add('comments__item--active');
};