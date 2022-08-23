let personalCabinetBtn = document.querySelector('.btn-custom_light_ico');
let personalCabinetMenu = document.querySelector('.popup__wraper');
let personalCabinetClose = document.querySelector('.popup_cabinet_btn');


personalCabinetBtn.addEventListener('click', () => {
    personalCabinetMenu.classList.add('_active');
})

personalCabinetClose.addEventListener('click', () => {
    personalCabinetMenu.classList.remove('_active');
})