const dropdown__value = document.querySelector('.dropdown__value');
const dropdown__list = document.querySelector('.dropdown__list');
const dropdown__item = document.querySelectorAll('.dropdown__item');

dropdown__value.addEventListener('click', () => { // обрабатываем выпадающий список
    dropdown__list.classList.add('dropdown__list_active'); // добавляем класс по клику
});

dropdown__item.forEach((element) => { //
    element.addEventListener('click', (event) => { // обработываем событие
        event.preventDefault(); // предотвращаем переход по ссылке после выбора элемента списка
        dropdown__value.textContent = element.textContent; // обновляем выбранный элемент
        dropdown__list.classList.remove('dropdown__list_active'); // закрываем выпадающий список - удаляем лишний класс
    });
});