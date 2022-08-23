function toggleCartStatus() {    

    const cartInner = document.querySelector('.cart__inner');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    const cartBg = document.querySelector('#cart-bg');


    if(cartInner.children.length > 0 ) {
        cartEmptyBadge.classList.add('none')
        orderForm.classList.remove('none')
        cartBg.classList.add('none')
        

    } else {
        cartEmptyBadge.classList.remove('none')
        cartBg.classList.remove('none')
        orderForm.classList.add('none')
    }


}