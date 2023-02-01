;(function () {

const inputPlaces =  document.querySelectorAll('.login__input-text');
const loginName = 'admin';
const password = '12345678';

for (let i = 0; i < inputPlaces.length; i ++) {
    inputPlaces[i].addEventListener('input', function(evt) {
        if (inputPlaces[i].validity.tooShort && i == 0) {
            inputPlaces[i].setCustomValidity('Должно быть не менее 5 символов');
        } else if (inputPlaces[i].validity.tooShort && i == 1) {
            inputPlaces[i].setCustomValidity('Должно быть не менее 8 символов');
        } else if (inputPlaces[0].value === loginName && 
            inputPlaces[1].value !== password) {
                inputPlaces[0].setCustomValidity('');
                inputPlaces[1].setCustomValidity('Неверный пароль');
        } else {
            inputPlaces[i].setCustomValidity('');
        };
    });
};

})();

