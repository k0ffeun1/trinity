let popup = document.getElementById('popup');
let popupToggle = document.getElementById('popup-link');
let popupClose = document.getElementById('popup__close');

popupToggle.onclick = function () {
    popup.classList.add('popup__active');
    popupClose.onclick = function () {
        popup.classList.remove('popup__active')
    }
}
$(popup).on('click', function () { // - при клике по любому месту основного контейнера сайта
    $(popup).removeClass('popup__active'); // - Основной контейнер отьезжает назад на 240px
});
