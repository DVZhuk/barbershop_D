;(function () {

const toggle = document.querySelector(".navigation");
const button = document.querySelector(".navigation__toggle");
const login = document.querySelector(".login__form");
const loginButton = document.querySelector(".navigation__login");
const loginClose = document.querySelector(".login__button-close");
const loginEnter = document.querySelector(".login__button-log");

toggle.classList.remove("navigation--nojs");

// Открытие/закрытие меню
button.onclick = function() {
  toggle.classList.toggle("navigation--opened");
  toggle.classList.toggle("navigation--closed");
};

// Открытие формы логина
loginButton.onclick = function() {
  login.classList.toggle("login__form--closed");
  toggle.classList.toggle("navigation--closed");
  toggle.classList.toggle("navigation--opened");
}

// Закрытие формы логина
loginClose.onclick = function() {
  login.classList.toggle("login__form--closed");
};

// В логин форме видоизменение текстового содержания кнопки
// в зависимости от размера экрана
let loginEnterFunc = function (size) {
  if (window.innerWidth >= size) {
    loginEnter.setAttribute("value", "Войти в личный кабинет");
  } else {
    loginEnter.setAttribute("value", "Войти");
  }
};

loginEnterFunc(767);

window.onresize = function() {
  loginEnterFunc(767);
}

// Плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        const id = smoothLink.getAttribute('href');
        if (id.length > 1) {
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        }
    });
};

})();