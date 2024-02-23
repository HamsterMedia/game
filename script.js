let clicks = 0;
let timerValue = 10;
let timer;
let res = ""; // начало текстовки
let lev = ""; // переменная с текстом уровня
let vel = 0;  // текущая скорость, кликов в секеунду

const clickCount = document.getElementById('clickCount');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const level = document.getElementById('level');
const velocity = document.getElementById('velocity');

startButton.addEventListener('click', () => {
    clicks = 0;
    timerValue = 10;
    clickCount.textContent = `Клики: ${clicks}`;
    timerDisplay.textContent = `Осталось: ${timerValue}`;
    
    startButton.disabled = true;
    
    timer = setInterval(() => {
        timerValue--;
        timerDisplay.textContent = `Осталось: ${timerValue}`;
        
        if (timerValue === 0) {
            clearInterval(timer);
            startButton.disabled = false;
            res = "Время всё! Результат = " + clicks;
//куча сравнивалок
            if (clicks < 20) {
                lev =  "идиот?";
            } else if (clicks >= 20 && clicks < 70) {
                lev = "норм";
            } else if (clicks >= 70 && clicks < 200) {
                lev = "кул";
            } else if (clicks >= 200 && clicks < 300) {
                lev = "бог";
            } else if (clicks >= 300) {
                lev = "ты забанен за читерство";
            }
            alert(res + ", " + lev); // это мы выводим полную текстовку в модальном окошке

            level.textContent = `Уровень: ${lev}`; // а это выводим на html-странице
        }
    }
    , 1000);

    document.addEventListener('keydown', (event) => {
        // а клики мы считаем только когда нажат Enter И еще не вышло время
        if ((event.key === 'Enter') && (timerValue > 0)) {
            clicks++;
            clickCount.textContent = `Клики: ${clicks}`;
            // нажалась кнопка, самое вермя посчитать текущую скорость
            // делим количество кликов на время, которое прошло с момента старта
            vel = clicks / (10-timerValue);
            vel = vel.toFixed(2);
            // выведем скорость на страничку
            velocity.textContent = `Скорость: ${vel}`;
        }
    });
});
