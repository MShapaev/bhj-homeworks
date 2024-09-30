// const rotator = Array.from(document.querySelectorAll('.rotator__case'));
// let count = 1;

// rotator[0].classList.remove('rotator__case_active');

// const rotation = function () {
//     rotator.forEach(function (elem, index) {
//         elem.classList.toggle('rotator__case', count !== index);
//     });

//     count++;

//     if (count >= rotator.length) {
//         count = 0;
//     }
// }


// setInterval(rotation, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        
        let currentIndex = 0;

        const updateRotator = () => {  
            cases[currentIndex].classList.remove('rotator__case_active');  // Скрываем текущий элемент
            currentIndex = (currentIndex + 1) % cases.length;  // Получаем следующий индекс

            const nextCase = cases[currentIndex];
            const speed = nextCase.dataset.speed;
            const color = nextCase.dataset.color;  // Получаем скорость и цвет следующего элемента

            nextCase.style.color = color;  // Устанавливаем цвет текста

            nextCase.classList.add('rotator__case_active');  // Показываем следующий элемент

            setTimeout(updateRotator, speed); // Запускаем следующий updateRotator через заданную скорость
        };
        
        cases[currentIndex].classList.add('rotator__case_active');  // Инициализируем первый активный элемент
        
        const initialSpeed = cases[currentIndex].dataset.speed;  // Запускаем процесс смены
        setTimeout(updateRotator, initialSpeed);
    });
});