(function () {
  // Поиск элементов отправки формы записи
  const registrationOrder = document.querySelector(".registration__order");
  const popUp = document.querySelector(".pop-up");
  const popUpClose = popUp.querySelector(".pop-up__button");

  // Открытие попапа
  registrationOrder.addEventListener("submit", function (evt) {
    evt.preventDefault();
    popUp.classList.add("pop-up--open");
  });

  // Закрытие попапа по кнопке
  popUpClose.addEventListener("click", function () {
    popUp.classList.remove("pop-up--open");
  });

  // Закрытие попапа при клике по подложке
  popUp.addEventListener("click", function (evt) {
    if (evt.target === evt.currentTarget) {
      popUp.classList.remove("pop-up--open");
    }
  });
})();
