
function calcCardPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart__order');
    const totalPriceEl = document.querySelector('.cart__total_price');
    const deliveryCoust = document.querySelector('.delivery-coust');

    let totalPrice = 0;

    

    cartItems.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountEl.innerHTML) * parseInt(priceEl.innerHTML);
        totalPrice += currentPrice;
    });


    console.log(totalPrice)
    // отображаем цену на странице 
    totalPriceEl.innerText = totalPrice;

    if (totalPrice >= 120) {
        deliveryCoust.classList.add('free')
        deliveryCoust.innerText = 'Gratis'
    } else {
        deliveryCoust.classList.remove('free');
        deliveryCoust.innerText = '25 zl'
    }



}