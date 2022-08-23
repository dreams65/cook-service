const productsContainer = document.querySelector('#products-container');

async function getProducts() {
  const response = await fetch('./js/products.json');
  const productsArray = await response.json();
  renderProducts(productsArray);
}

getProducts();

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `

        
        <div class="product-card col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4" data-id="${item.id}">
        <span class="category-title" id="${item.category}">${item.category}</span> 
          <div class="product-card_top ${item.color}">
            <img class="product-card__img" src="./assets/menu_img/${item.imgSrc}" alt="">
          </div>
          <div class="product-card_content">
            <h3 class="product-card__title">${item.title}</h3>
            <div class="product-card__info">
              <span class="product-card__info_weight">${item.weight}</span>
              <span class="product-card__info_calory">${item.calories}</span>
              <p class="product-card__price" id="calculation">${item.price}<span>zl</span></p>
            </div>
            <div class="product-card__description">
              <p>${item.descr}</p>
            </div>
            <div class="product-card_bottom">
              <div class="count" id="counter">
                <input type="button" class="product-card_btn_count-minus" data-action="minus">
                <span class="coount-number" data-counter>1</span>
                <input type="button" class="product-card_btn_count-plus" data-action="plus">
              </div>
              <button data-cart type="button" class="product-card_btn btn-custom_light">
                Dodaj do koszyka
              </button>
            </div>
          </div>
        </div>
        
        `
       
        productsContainer.insertAdjacentHTML('beforeend', productHTML);

    });
}

