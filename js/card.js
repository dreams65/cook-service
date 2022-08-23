window.addEventListener('click', function (event) {
  
  let count = event.target.closest('.count');
  let counter;

  if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ) {
    count;
    counter = count.querySelector('[data-counter]');
  }

  if (event.target.dataset.action === 'plus') {
   
    if(parseInt(counter.innerText) < 30 ) {
      counter.innerText = ++counter.innerText;
    }
  }

  if (event.target.dataset.action === 'minus') {
  
    if(parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    
    } else if (event.target.closest('.cart__inner') && parseInt(counter.innerText) === 1 ) {

      event.target.closest('.cart__order').remove();


       // отображение статуса корзины Пустая / Полная 

       toggleCartStatus();

       calcCardPriceAndDelivery();

    }

  }

  // проверяем клик на + / - внутри корзины

  if (event.target.hasAttribute('data-action') && event.target.closest('.cart__inner')) {
    calcCardPriceAndDelivery();
  }
});
