// Получаем ссылки на элементы страницы
const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");
const holes = document.querySelectorAll(".hole");

let score = 0;
let misses = 0;

// Функция для обработки клика по ячейке
function handleClick() {
  if (this.classList.contains("hole_has-mole")) {
    // Если это ячейка с кротом, увеличиваем счетчик убитых кротов
    score++;
    deadCounter.textContent = score;
    if (Number(deadCounter.textContent >= 10)) {
      alert('Победа!');
      score = 0;
      misses = 0;
      deadCounter.textContent = score;
      lostCounter.textContent = misses;
    }
  } else if (!this.classList.contains("hole_has-mole")){
    // Если это пустая ячейка, увеличиваем счетчик промахов
    misses++;
    lostCounter.textContent = misses;
    if (Number(lostCounter.textContent >= 5)) {
      alert('Проигрыш!');
      misses = 0;
      score = 0;
      deadCounter.textContent = score;
      lostCounter.textContent = misses;
    }
  }
}

// Добавляем обработчики клика для каждой ячейки
holes.forEach((hole) => {
  hole.addEventListener("click", handleClick);
  this.removeEventListener("click", handleClick);
});