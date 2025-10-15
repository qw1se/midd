// Переключатель темы
const themeToggle = document.getElementById('themeToggle'); // Находим кнопку переключения темы
const body = document.body; // Получаем элемент body

themeToggle.addEventListener('click', () => { // При клике по кнопке
  body.classList.toggle('light-mode'); // Переключаем светлую тему
  body.classList.toggle('dark-mode'); // Переключаем тёмную тему
  themeToggle.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙'; // Меняем иконку в зависимости от темы
});

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Находим все ссылки, начинающиеся с #
  anchor.addEventListener('click', function (e) { // При клике по ссылке
    e.preventDefault(); // Отменяем стандартное поведение (резкий переход)
    document.querySelector(this.getAttribute('href')).scrollIntoView({ // Получаем нужный блок
      behavior: 'smooth' // Плавный переход к нему
    });
  });
});

// Анимация появления при скролле
const elements = document.querySelectorAll('.раздел, .главный-блок'); // Находим все разделы и главный блок

window.addEventListener('scroll', () => { // При прокрутке страницы
  elements.forEach(el => { // Проверяем каждый элемент
    const rect = el.getBoundingClientRect(); // Получаем координаты элемента
    if (rect.top < window.innerHeight - 100) { // Если элемент почти в зоне видимости
      el.style.opacity = 1; // Делаем его видимым
      el.style.transform = 'translateY(0)'; // Возвращаем в нормальное положение
    }
  });
});

// Инициализация начальных стилей для анимации
elements.forEach(el => { // Для всех элементов заранее задаём стартовые стили
  el.style.opacity = 0; // Прозрачность 0 — невидим
  el.style.transform = 'translateY(40px)'; // Немного смещён вниз
  el.style.transition = 'all 0.6s ease'; // Плавное появление
});

// --- Приветствие с именем ---
const g = document.getElementById('greeting'); // Находим блок приветствия
const btn = document.getElementById('askName'); // Находим кнопку "Ввести имя"

function showGreeting(name) { // Функция отображения приветствия
  g.textContent = name ? `Привет, ${name}!` : 'Добро пожаловать!'; // Если имя введено — приветствуем по имени, иначе стандартно
}

function askName() { // Функция запроса имени
  const name = prompt('Как тебя зовут?'); // Спрашиваем имя через окно ввода
  if (name) { // Если имя введено
    localStorage.setItem('visitorName', name); // Сохраняем в localStorage
  } else {
    localStorage.removeItem('visitorName'); // Если ничего не введено — удаляем старое имя
  }
  showGreeting(localStorage.getItem('visitorName')); // Обновляем приветствие
}

btn.addEventListener('click', askName); // Слушаем клик по кнопке "Ввести имя"
showGreeting(localStorage.getItem('visitorName')); // При загрузке страницы показываем приветствие (если имя сохранено)



