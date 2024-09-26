function formatTime(time) {
    return String(time).padStart(2, '0');
}

const timer = document.getElementById("timer");
remainingTime = timer.textContent;
setInterval(() => {
    if (remainingTime) {
        // Вычисляем часы, минуты и секунды
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        // Форматируем время
        let formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
        timer.textContent = formattedTime;
        remainingTime--;
    } else {
        alert("Вы победили в конкурсе!")
    }
}, 1000);

// setInterval(() => {
//  if (Number(timer.textContent) > 0) {
//   timer.textContent = Number(timer.textContent) - 1;
//  } else if (Number(timer.textContent) === 0) {
//   alert("Вы победили в конкурсе!")
//  }
//  }, 1000);