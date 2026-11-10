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
// Константы физики
const GRAVITY = 0.4;
const BOUNCE = 0.7; // Коэффициент отскока

let ball = {
    x: 100,
    y: 300,
    vx: 0,
    vy: 0,
    radius: 12,
    isFlying: false
};

// Функция запуск мяча по углу и силе
function shoot(angleDegrees, power) {
    const angleRad = (angleDegrees * Math.PI) / 180;
    ball.vx = Math.cos(angleRad) * power;
    ball.vy = -Math.sin(angleRad) * power; // минус, так как Y растет вниз
    ball.isFlying = true;
}

// Цикл обновления физики
function updatePhysics() {
    if (!ball.isFlying) return;

    ball.vy += GRAVITY; // гравитация тянет вниз
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Столкновение с полом (например, height = 400)
    if (ball.y + ball.radius > 400) {
        ball.y = 400 - ball.radius;
        ball.vy *= -BOUNCE;
        ball.vx *= BOUNCE; // трение
    }
}

