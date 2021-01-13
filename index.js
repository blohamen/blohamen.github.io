const elementsToShow = document.querySelectorAll('.show-on-scroll');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.wrapper').addEventListener('scroll', () => {
        window.requestAnimationFrame(onScroll);
    })
});

function onScroll() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    }
  });
}


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}


