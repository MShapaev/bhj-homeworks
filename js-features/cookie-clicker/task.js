let speed = document.getElementById('clicker__speed');
let img = document.getElementById('cookie')
let counter = document.getElementById('clicker__counter');

let lastTime = Date.now();

img.onclick = () => {
    counter.textContent++;
    if (Number(counter.textContent) % 2 != 0) {
        cookie.width += 30;
    } else {
        cookie.width -= 30;
    }
    const curTime = Date.now();
    speed.textContent = (1 / ((curTime - lastTime) / 1000)).toFixed(2);
    lastTime = curTime;
}
