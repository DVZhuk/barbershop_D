;(function () {

const loginName = 'admin';
const password = '12345678';

const inputPlaces =  document.querySelectorAll('.login__input-text');
const loginOrder = document.querySelector('.login__order');
const login = document.querySelector(".login__form");
const userName = document.querySelector(".admin-name");
const loginButton = document.querySelector(".navigation__login");
const rememberMe = document.querySelector('.checkbox-input');

let loginOn = false;

loginOrder.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (inputPlaces[0].value === loginName && 
        inputPlaces[1].value === password) {
            login.classList.toggle("login__form--closed");
            userName.classList.toggle('admin-name--novisible');
            loginButton.lastChild.nodeValue = 'Выйти';
            loginOn = true;
    };
});

loginButton.addEventListener('click', function() {
    if (loginOn) {
        login.classList.toggle("login__form--closed");
        userName.classList.toggle('admin-name--novisible');
        loginButton.lastChild.nodeValue = 'Войти';
        loginOn = false;
        window.localStorage.removeItem("login")
    };
});

rememberMe.addEventListener('input', function() {
    if (rememberMe.checked) {
        window.localStorage.setItem("login", "1");
    };
});

if (window.localStorage.getItem("login") === "1") {
    userName.classList.toggle('admin-name--novisible');
    loginButton.lastChild.nodeValue = 'Выйти';
    loginOn = true;
};

})();

