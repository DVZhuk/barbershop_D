;(function () {
const radios = document.querySelectorAll('.model__radio-input');
const checkboxes = document.querySelectorAll('.checkbox-input')

window.addEventListener('keydown', function (evt) {
  if (evt.key== 'Tab') {
    for (let radio of radios) {
      radio.style.display = 'block';
    };
    for (let checkbox of checkboxes) {
      checkbox.style.display = 'block';
    };
  };
});
})();
