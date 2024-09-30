function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();  // Получение границ элемента
  
    return ( // Проверка, пересекаются ли границы элемента с видимой областью окна
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        if (isElementInViewport(reveal)) {
            reveal.classList.add('reveal_active');
        }
    });
});

window.removeEventListener('scroll', () => {})