const modal = document.querySelector('.popup')
const buttons = document.querySelectorAll('.button')

// button.addEventListener('click', toglleModal);
// buttonClosed.addEventListener('click', toglleModal);
// cancelButton.addEventListener('click', toglleModal);

function toggleModal() {
    modal.classList.toggle('popup__close')
};

buttons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        // popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        toggleModal()
    })
});

modal.addEventListener('click', (event)=>{
    if(event.target == modal){
        toggleModal()
    }
})