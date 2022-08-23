// popup cart

var cartBtn = document.querySelector('.cart-btn')
let cartOverlay = document.querySelector('.cart__overlay')
let cartClose = document.querySelector('.cart__close')

cartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('_active')
})

cartClose.addEventListener('click', () => {
    cartOverlay.classList.remove('_active')
})





const cartWrapper = document.querySelector('.cart__inner')

// add to cart 

window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.product-card');
        const cardBtn = card.querySelector('[data-cart]');
        cardBtn.innerText = "Dodano do koszyka"
        setTimeout(function(){
            cardBtn.innerText = "Dodaj do koszyka"
          }, 2000)
        cartBtn.classList.add('cart-icon-animation');
        setTimeout(function(){
            cartBtn.classList = 'cart-btn'
          }, 1000)

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-card__img').getAttribute('src'),
            title: card.querySelector('.product-card__title').innerText,
            weight: card.querySelector('.product-card__info_weight').innerText,
            calory: card.querySelector('.product-card__info_calory').innerText,
            price: card.querySelector('.product-card__price').innerText,
            counter: card.querySelector('[data-counter]').innerText

        };
        
        const itemCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);


        if (itemCart) {
            const counterElement = itemCart.querySelector('[data-counter]');
            counterElement.innerHTML = parseInt(counterElement.innerHTML) + parseInt(productInfo.counter);


        } else {
            const cartItemHTML = `
                    <div class="cart__order" data-id=${productInfo.id}>
                    <div class="cart__order_column_left">
                        <img class="order-image" src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="cart__order_column_right">
                        <h5 class="order-name">${productInfo.title}</h5>
                        <span class="order-weight">${productInfo.weight}</span>
                        <span class="order-energy">${productInfo.calory}</span>

                        <div class="order__price">
                            <div class="count">
                                
                                    <input type="button" class="product-card_btn_count-minus" data-action="minus">
                                    <span class="count-number" data-counter>${productInfo.counter}</span>
                                    <input type="button" class="product-card_btn_count-plus" data-action="plus">

                            </div>
                            <div class="price__wrapper">
                                <h5 class="price__currency">${productInfo.price}</h5>
                            </div>
                        </div>
                    
                    </div>
                    <hr>
                </div>
                `;

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        card.querySelector('[data-counter]').innerText = '1';


        // отображение статуса корзины Пустая / Полная 

        toggleCartStatus();

        calcCardPriceAndDelivery();

    }

})