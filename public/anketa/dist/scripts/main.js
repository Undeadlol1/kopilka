// используем JQlite вместо JQuery для экономии трафика

function change(number) {
    var percentage;
    // задаем значение отступа .pointer'a в зависимости от нажатой кнопки
    switch (data) {
        case 1:
            percentage = '0';
            break;
        case 2:
            percentage = '19';
            break;
        case 3:
            percentage = '48';
            break;
        case 4:
            percentage = '97.4';
            break;
    }
    // применяем отступ
    $('.pointer').css('left', percentage + '%');
    // применяем checked аттрибут для того чтобы отправка формы имела смысл
    // сначала убираем аттрибут если были выбранные ранее варианты
    // .removeAttr не работает в Jqlite поэтому применяем ко всем радио инпута checked: false
    $('#js-container input[type="radio"').attr('checked', 'false');
    // добавляем аттрибут к нужному инпуту
    $('#radio' + number).attr('checked', 'checked');
}
