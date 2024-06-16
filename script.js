// Получить текущий счет из localStorage или установить его в 0, если его там нет
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;

// Обновить отображение счета
document.getElementById('score').innerText = score;

// Обработчик клика по кликабельному изображению
document.querySelector('.clickable').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerText = score;

    // Сохранить текущий счет в localStorage
    localStorage.setItem('score', score);
});
