const throwBtn = document.getElementById('throwBtn');
const ball = document.getElementById('ball');
const scoreElement = document.getElementById('score');

let score = 0;
let isThrowing = false;

throwBtn.addEventListener('click', () => {
    if (isThrowing) return;
    isThrowing = true;

    // Запускаем анимацию полёта мяча по параболе
    // Мяч летит вправо и вверх, затем падает в сетку
    ball.style.transform = 'translate(215px, -110px) rotate(360deg)';

    setTimeout(() => {
        // Увеличиваем счет
        score += 1;
        scoreElement.textContent = score;

        // Возвращаем мяч на исходную позицию с небольшой задержкой
        setTimeout(() => {
            ball.style.transition = 'none';
            ball.style.transform = 'translate(0, 0) rotate(0deg)';
            
            // Включаем анимацию обратно
            setTimeout(() => {
                ball.style.transition = 'transform 0.8s ease-in-out';
                isThrowing = false;
            }, 50);
        }, 300);

    }, 800);
});


